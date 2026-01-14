import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

const topics = [
  'Algebra',
  'Geometry',
  'Number Theory',
  'Probability',
  'Statistics',
  'Trigonometry',
  'Calculus',
  'Reading Comprehension',
  'Grammar',
  'Vocabulary',
]

const subtopics = {
  Algebra: ['Linear Equations', 'Quadratic Equations', 'Polynomials', 'Inequalities'],
  Geometry: ['Triangles', 'Circles', 'Coordinate Geometry', '3D Shapes'],
  'Number Theory': ['Prime Numbers', 'Divisibility', 'Modular Arithmetic'],
  Probability: ['Basic Probability', 'Conditional Probability', 'Bayes Theorem'],
  Statistics: ['Mean/Median/Mode', 'Standard Deviation', 'Distributions'],
  Trigonometry: ['Sine/Cosine', 'Identities', 'Inverse Functions'],
  Calculus: ['Derivatives', 'Integrals', 'Limits'],
  'Reading Comprehension': ['Main Idea', 'Inference', 'Detail Questions'],
  Grammar: ['Tenses', 'Subject-Verb Agreement', 'Modifiers'],
  Vocabulary: ['Synonyms', 'Antonyms', 'Context Clues'],
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomFloat(min, max) {
  return Math.round((Math.random() * (max - min) + min) * 10) / 10
}

function generateQuestionMetadata(topic) {
  const subtopic = getRandomElement(subtopics[topic] || ['General'])
  const skills = []
  if (Math.random() > 0.5) skills.push('word_problem')
  if (Math.random() > 0.5) skills.push('multi_step')
  if (Math.random() > 0.5) skills.push('application')

  return {
    topic,
    subtopic,
    difficulty: getRandomInt(1, 5),
    skills_tags: skills.length > 0 ? skills : ['basic'],
  }
}

function generateAttempts(userId, testSessionId, count, baseDate) {
  const attempts = []
  const topicDistribution = topics.map(t => ({ topic: t, weight: Math.random() }))
  topicDistribution.sort((a, b) => b.weight - a.weight)

  for (let i = 0; i < count; i++) {
    const topic = topicDistribution[i % topicDistribution.length].topic
    const metadata = generateQuestionMetadata(topic)
    
    const topicIndex = topics.indexOf(topic)
    const baseAccuracy = 0.4 + (topicIndex % 3) * 0.2 + Math.random() * 0.2
    const isCorrect = Math.random() < baseAccuracy
    
    const confidenceRating = isCorrect ? getRandomInt(3, 5) : getRandomInt(1, 3)
    const timeTakenSeconds = getRandomInt(30, 300)
    
    let mistakeType = null
    if (!isCorrect) {
      const mistakeTypes = ['conceptual', 'calculation', 'misread', 'guess']
      mistakeType = getRandomElement(mistakeTypes)
    }

    const attemptedAt = new Date(baseDate)
    attemptedAt.setMinutes(attemptedAt.getMinutes() + i * 2)

    attempts.push({
      userId,
      testSessionId,
      questionMetadata: metadata,
      correctness: isCorrect,
      confidenceRating,
      timeTakenSeconds,
      mistakeType,
      attemptedAt,
    })
  }

  return attempts
}

// Generate new demo test session
router.post('/api/demo/generate-test', async (req, res) => {
  try {
    const { user_id: userId, questions = 30 } = req.body

    if (!userId) {
      return res.status(400).json({ success: false, error: 'Missing user_id', data: null })
    }

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found', data: null })
    }

    const testDate = new Date()
    const attempts = generateAttempts(userId, null, questions, testDate)

    // Calculate session stats
    const correctCount = attempts.filter(a => a.correctness).length
    const overallScore = (correctCount / questions) * 100
    const totalTime = attempts.reduce((sum, a) => sum + a.timeTakenSeconds, 0)

    // Create test session
    const session = await prisma.testSession.create({
      data: {
        userId,
        testName: `Demo Test ${new Date().toLocaleDateString()}`,
        testDate,
        overallScore: Math.round(overallScore * 10) / 10,
        totalQuestions: questions,
        totalTime,
      },
    })

    // Create attempts with session ID
    await prisma.questionAttempt.createMany({
      data: attempts.map(a => ({ ...a, testSessionId: session.id })),
    })

    res.json({
      success: true,
      error: null,
      data: {
        sessionId: session.id,
        overallScore: session.overallScore,
        totalQuestions: session.totalQuestions,
        correctCount,
        totalTime: session.totalTime,
        message: `Generated ${questions} question attempts for test session`,
      },
    })
  } catch (error) {
    console.error('Error generating demo test:', error)
    res.status(500).json({ success: false, error: error.message, data: null })
  }
})

// Generate recommendations for a user
router.post('/api/demo/generate-recommendations', async (req, res) => {
  try {
    const { user_id: userId } = req.body

    if (!userId) {
      return res.status(400).json({ success: false, error: 'Missing user_id', data: null })
    }

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found', data: null })
    }

    const allAttempts = await prisma.questionAttempt.findMany({
      where: { userId },
    })

    if (allAttempts.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No attempts found. Generate test data first.',
        data: null,
      })
    }

    // Analyze topic performance
    const topicStats = {}
    allAttempts.forEach(attempt => {
      const topic = attempt.questionMetadata.topic
      if (!topicStats[topic]) {
        topicStats[topic] = { total: 0, correct: 0 }
      }
      topicStats[topic].total++
      if (attempt.correctness) topicStats[topic].correct++
    })

    // Find weakest topics
    const topicAccuracies = Object.entries(topicStats).map(([topic, stats]) => ({
      topic,
      accuracy: stats.total > 0 ? (stats.correct / stats.total) * 100 : 0,
      attempts: stats.total,
    }))

    topicAccuracies.sort((a, b) => a.accuracy - b.accuracy)

    const recommendationTemplates = [
      {
        focusArea: `${topicAccuracies[0]?.topic || 'Weak Area'} Fundamentals`,
        reasoning: `You've attempted ${topicAccuracies[0]?.attempts || 0} questions in ${topicAccuracies[0]?.topic || 'this area'} with ${Math.round(topicAccuracies[0]?.accuracy || 0)}% accuracy. Focus on building foundational understanding.`,
        actionSteps: [
          'Review core concepts and definitions',
          'Practice 10 basic problems',
          'Take a focused quiz on fundamentals',
        ],
      },
      {
        focusArea: `${topicAccuracies[1]?.topic || 'Problem Area'} Practice`,
        reasoning: `Your performance in ${topicAccuracies[1]?.topic || 'this area'} shows room for improvement. Consistent practice will help build confidence.`,
        actionSteps: [
          'Identify common mistake patterns',
          'Work through 15 practice problems',
          'Review solutions and explanations',
        ],
      },
    ]

    const recommendations = []
    for (let i = 0; i < Math.min(2, topicAccuracies.length); i++) {
      const template = recommendationTemplates[i]
      const topic = topicAccuracies[i]

      const rec = await prisma.recommendation.create({
        data: {
          userId,
          generatedAt: new Date(),
          focusArea: template.focusArea,
          priority: i === 0 ? 'high' : 'medium',
          reasoning: template.reasoning,
          evidence: {
            recent_attempts: topic.attempts,
            accuracy: topic.accuracy / 100,
            avg_confidence: getRandomFloat(2.5, 4.0),
            avg_time_seconds: getRandomInt(120, 300),
            mistake_breakdown: {
              conceptual: getRandomInt(3, 8),
              calculation: getRandomInt(1, 4),
              guess: getRandomInt(0, 2),
            },
            trend: 'stable',
          },
          actionSteps: template.actionSteps,
          confidenceScore: getRandomInt(70, 90),
          dataPointCount: topic.attempts,
          followed: false,
        },
      })

      recommendations.push(rec)
    }

    res.json({
      success: true,
      error: null,
      data: {
        count: recommendations.length,
        recommendations,
        message: `Generated ${recommendations.length} recommendations based on performance data`,
      },
    })
  } catch (error) {
    console.error('Error generating recommendations:', error)
    res.status(500).json({ success: false, error: error.message, data: null })
  }
})

export default router
