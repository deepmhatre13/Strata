#!/usr/bin/env node
/**
 * CLI script to generate demo test data
 * Usage: node scripts/generate-demo-test.js [userId] [questionCount]
 */

import 'dotenv/config'

const API_URL = process.env.VITE_API_URL || 'http://localhost:3001'
const userId = process.argv[2] || 'demo-user-1'
const questionCount = parseInt(process.argv[3]) || 30

async function generateTest() {
  try {
    console.log(`🚀 Generating ${questionCount} question test for user: ${userId}...`)
    
    const response = await fetch(`${API_URL}/api/demo/generate-test`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
        questions: questionCount,
      }),
    })

    const result = await response.json()

    if (result.success) {
      console.log('✅ Test generated successfully!')
      console.log(`   Session ID: ${result.data.sessionId}`)
      console.log(`   Score: ${result.data.overallScore}%`)
      console.log(`   Correct: ${result.data.correctCount}/${result.data.totalQuestions}`)
      console.log(`   Time: ${Math.round(result.data.totalTime / 60)} minutes`)
    } else {
      console.error('❌ Error:', result.error)
      process.exit(1)
    }
  } catch (error) {
    console.error('❌ Failed to generate test:', error.message)
    process.exit(1)
  }
}

generateTest()
