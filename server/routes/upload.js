import express from 'express'
import { PrismaClient } from '@prisma/client'
import Papa from 'papaparse'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()
const prisma = new PrismaClient()

// Parse JSON bodies for this router
router.use(express.json({ limit: '10mb' }))

/**
 * POST /api/upload-test
 * Uploads a CSV file, parses it, and stores attempts in the database
 * 
 * Expected CSV columns:
 * - question_id (string)
 * - topic (string)
 * - subtopic (string, optional)
 * - difficulty (Easy/Medium/Hard)
 * - correct (true/false or 1/0)
 * - time_taken (seconds as integer)
 * - confidence (1-5 integer)
 * - date (YYYY-MM-DD)
 * 
 * Accepts either:
 * 1. FormData with file (multipart/form-data)
 * 2. JSON with csvContent as base64 or string
 */
router.post('/upload-test', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id
    const { csvContent, testName, testDate, examType, source } = req.body

    if (!csvContent) {
      return res.status(400).json({
        success: false,
        error: 'No CSV content provided',
        data: null,
      })
    }

    if (!testName || !testDate || !examType || !source) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: testName, testDate, examType, source',
        data: null,
      })
    }

    // Parse CSV file
    const parseResult = await new Promise((resolve, reject) => {
      Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim().toLowerCase().replace(/\s+/g, '_'),
        complete: (result) => {
          if (result.errors.length > 0) {
            reject(new Error(`CSV parsing errors: ${result.errors.map(e => e.message).join(', ')}`))
          } else {
            resolve(result)
          }
        },
        error: (error) => {
          reject(new Error(`Failed to parse CSV: ${error.message}`))
        },
      })
    })

    const rows = parseResult.data
    if (!rows || rows.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'CSV file contains no data rows',
        data: null,
      })
    }

    // Validate required columns
    const requiredColumns = ['question_id', 'topic', 'difficulty', 'correct', 'time_taken', 'confidence', 'date']
    const headers = Object.keys(rows[0] || {})
    const missingColumns = requiredColumns.filter(col => !headers.includes(col))
    
    if (missingColumns.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required columns: ${missingColumns.join(', ')}`,
        data: null,
      })
    }

    // Create test session
    const testSession = await prisma.testSession.create({
      data: {
        userId,
        testName,
        testDate: new Date(testDate),
        examType,
        source,
        totalQuestions: rows.length,
        totalTime: rows.reduce((sum, row) => sum + (parseInt(row.time_taken) || 0), 0),
        overallScore: null, // Will be calculated from attempts
      },
    })

    // Validate and transform rows into attempts
    const attempts = []
    const validationErrors = []

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i]
      const rowNum = i + 2 // +2 because row 1 is header, and arrays are 0-indexed

      // Validate difficulty
      const difficulty = String(row.difficulty || '').trim()
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
        validationErrors.push(`Row ${rowNum}: Invalid difficulty "${difficulty}". Must be Easy, Medium, or Hard`)
        continue
      }

      // Validate correct
      const correct = row.correct === 'true' || row.correct === true || row.correct === '1' || row.correct === 1

      // Validate time_taken
      const timeTaken = parseInt(row.time_taken)
      if (isNaN(timeTaken) || timeTaken < 0) {
        validationErrors.push(`Row ${rowNum}: Invalid time_taken "${row.time_taken}". Must be a non-negative integer`)
        continue
      }

      // Validate confidence
      const confidence = parseInt(row.confidence)
      if (isNaN(confidence) || confidence < 1 || confidence > 5) {
        validationErrors.push(`Row ${rowNum}: Invalid confidence "${row.confidence}". Must be 1-5`)
        continue
      }

      // Validate date
      const dateStr = String(row.date || '').trim()
      let attemptedAt
      try {
        attemptedAt = new Date(dateStr)
        if (isNaN(attemptedAt.getTime())) {
          throw new Error('Invalid date')
        }
      } catch {
        validationErrors.push(`Row ${rowNum}: Invalid date "${dateStr}". Must be YYYY-MM-DD format`)
        continue
      }

      attempts.push({
        userId,
        testSessionId: testSession.id,
        questionMetadata: {
          question_id: String(row.question_id || '').trim(),
          topic: String(row.topic || '').trim(),
          subtopic: String(row.subtopic || '').trim() || null,
          difficulty,
        },
        correctness: correct,
        confidenceRating: confidence,
        timeTakenSeconds: timeTaken,
        mistakeType: null, // Can be added later if provided
        attemptedAt,
      })
    }

    if (validationErrors.length > 0 && attempts.length === 0) {
      // All rows failed validation
      await prisma.testSession.delete({ where: { id: testSession.id } })
      return res.status(400).json({
        success: false,
        error: 'All rows failed validation',
        data: { validationErrors },
      })
    }

    // Store attempts in database
    const result = await prisma.questionAttempt.createMany({
      data: attempts,
      skipDuplicates: true,
    })

    // Calculate overall score for test session
    const correctCount = attempts.filter(a => a.correctness).length
    const overallScore = attempts.length > 0 ? (correctCount / attempts.length) * 100 : 0

    await prisma.testSession.update({
      where: { id: testSession.id },
      data: { overallScore },
    })

    // Generate recommendations after upload
    // This will be called asynchronously or can be triggered separately
    // For now, we'll trigger it here
    try {
      await generateRecommendations(userId)
    } catch (recError) {
      console.error('Error generating recommendations:', recError)
      // Don't fail the upload if recommendations fail
    }

    res.json({
      success: true,
      error: null,
      data: {
        testSessionId: testSession.id,
        attemptsCreated: result.count,
        totalRows: rows.length,
        validationErrors: validationErrors.length > 0 ? validationErrors : undefined,
        overallScore: Math.round(overallScore * 10) / 10,
      },
    })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to upload and process CSV',
      data: null,
    })
  }
})

/**
 * Generate recommendations based on user's attempt data
 * This is a rule-based, explainable recommendation engine
 */
async function generateRecommendations(userId) {
  // Get all attempts for the user
  const attempts = await prisma.questionAttempt.findMany({
    where: { userId },
    orderBy: { attemptedAt: 'desc' },
  })

  if (attempts.length === 0) {
    return []
  }

  // Delete old active recommendations
  await prisma.recommendation.deleteMany({
    where: {
      userId,
      followed: false,
    },
  })

  const recommendations = []

  // Group attempts by topic
  const topicMap = new Map()
  attempts.forEach(attempt => {
    const topic = attempt.questionMetadata?.topic || 'Unknown'
    if (!topicMap.has(topic)) {
      topicMap.set(topic, [])
    }
    topicMap.get(topic).push(attempt)
  })

  // Rule 1: Low accuracy with high attempt count → recommend concept revision
  for (const [topic, topicAttempts] of topicMap.entries()) {
    if (topicAttempts.length >= 8) {
      const correctCount = topicAttempts.filter(a => a.correctness).length
      const accuracy = correctCount / topicAttempts.length

      if (accuracy < 0.5) {
        const recentIncorrect = topicAttempts
          .filter(a => !a.correctness)
          .slice(0, 6)
          .map(a => a.questionMetadata?.question_id || 'unknown')

        recommendations.push({
          userId,
          focusArea: topic,
          priority: 'high',
          reasoning: `${Math.round((1 - accuracy) * 100)}% incorrect in last ${topicAttempts.length} attempts`,
          evidence: {
            accuracy,
            totalAttempts: topicAttempts.length,
            incorrectCount: topicAttempts.length - correctCount,
            recentIncorrectQuestions: recentIncorrect,
          },
          actionSteps: [
            'Review core concepts and formulas',
            'Practice similar problems with step-by-step solutions',
            'Focus on understanding the underlying principles',
          ],
          confidenceScore: Math.min(90, 50 + topicAttempts.length * 5),
          dataPointCount: topicAttempts.length,
        })
      }
    }
  }

  // Rule 2: High time but decent accuracy → recommend timed drills
  for (const [topic, topicAttempts] of topicMap.entries()) {
    if (topicAttempts.length >= 5) {
      const correctCount = topicAttempts.filter(a => a.correctness).length
      const accuracy = correctCount / topicAttempts.length
      const avgTime = topicAttempts.reduce((sum, a) => sum + a.timeTakenSeconds, 0) / topicAttempts.length

      // If accuracy is decent (>60%) but time is high (>90 seconds average)
      if (accuracy >= 0.6 && avgTime > 90) {
        recommendations.push({
          userId,
          focusArea: topic,
          priority: 'medium',
          reasoning: `Good accuracy (${Math.round(accuracy * 100)}%) but slow average time (${Math.round(avgTime)}s)`,
          evidence: {
            accuracy,
            avgTime: Math.round(avgTime),
            totalAttempts: topicAttempts.length,
          },
          actionSteps: [
            'Practice timed problem sets',
            'Focus on speed while maintaining accuracy',
            'Use time management strategies',
          ],
          confidenceScore: 70,
          dataPointCount: topicAttempts.length,
        })
      }
    }
  }

  // Rule 3: High confidence but low accuracy → flag misconception
  for (const [topic, topicAttempts] of topicMap.entries()) {
    if (topicAttempts.length >= 5) {
      const incorrectAttempts = topicAttempts.filter(a => !a.correctness)
      const highConfidenceIncorrect = incorrectAttempts.filter(a => a.confidenceRating >= 4)

      if (highConfidenceIncorrect.length >= 3) {
        const accuracy = topicAttempts.filter(a => a.correctness).length / topicAttempts.length
        const confidenceGap = highConfidenceIncorrect.length / incorrectAttempts.length

        recommendations.push({
          userId,
          focusArea: topic,
          priority: 'high',
          reasoning: `High confidence (4-5) when wrong in ${highConfidenceIncorrect.length} of ${incorrectAttempts.length} incorrect attempts`,
          evidence: {
            accuracy,
            confidenceGap,
            highConfidenceIncorrectCount: highConfidenceIncorrect.length,
            totalAttempts: topicAttempts.length,
          },
          actionSteps: [
            'Review fundamental concepts - you may have misconceptions',
            'Double-check your reasoning process',
            'Practice problems with detailed explanations',
          ],
          confidenceScore: 85,
          dataPointCount: topicAttempts.length,
        })
      }
    }
  }

  // Rule 4: Improving performance → recommend maintenance practice
  for (const [topic, topicAttempts] of topicMap.entries()) {
    if (topicAttempts.length >= 10) {
      const recent10 = topicAttempts.slice(0, 10)
      const previous10 = topicAttempts.slice(10, 20)

      if (previous10.length >= 5) {
        const recentAccuracy = recent10.filter(a => a.correctness).length / recent10.length
        const previousAccuracy = previous10.filter(a => a.correctness).length / previous10.length

        if (recentAccuracy > previousAccuracy + 0.1) {
          recommendations.push({
            userId,
            focusArea: topic,
            priority: 'low',
            reasoning: `Performance improving: ${Math.round(previousAccuracy * 100)}% → ${Math.round(recentAccuracy * 100)}%`,
            evidence: {
              recentAccuracy,
              previousAccuracy,
              improvement: recentAccuracy - previousAccuracy,
              totalAttempts: topicAttempts.length,
            },
            actionSteps: [
              'Continue regular practice to maintain improvement',
              'Focus on consistency',
              'Gradually increase difficulty',
            ],
            confidenceScore: 75,
            dataPointCount: topicAttempts.length,
          })
        }
      }
    }
  }

  // Store recommendations
  if (recommendations.length > 0) {
    await prisma.recommendation.createMany({
      data: recommendations,
    })
  }

  return recommendations
}

export default router
