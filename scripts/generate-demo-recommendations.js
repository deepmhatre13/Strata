#!/usr/bin/env node
/* eslint-disable no-undef */
/**
 * CLI script to generate demo recommendations
 * Usage: node scripts/generate-demo-recommendations.js [userId]
 */

import 'dotenv/config'

const API_URL = process.env.VITE_API_URL || 'http://localhost:3001'
const userId = process.argv[2] || 'demo-user-1'

async function generateRecommendations() {
  try {
    console.log(`🚀 Generating recommendations for user: ${userId}...`)
    
    const response = await fetch(`${API_URL}/api/demo/generate-recommendations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
      }),
    })

    const result = await response.json()

    if (result.success) {
      console.log('✅ Recommendations generated successfully!')
      console.log(`   Count: ${result.data.count}`)
      result.data.recommendations.forEach((rec, idx) => {
        console.log(`\n   ${idx + 1}. ${rec.focusArea} (${rec.priority} priority)`)
        console.log(`      Confidence: ${rec.confidenceScore}%`)
        console.log(`      Data points: ${rec.dataPointCount}`)
      })
    } else {
      console.error('❌ Error:', result.error)
      process.exit(1)
    }
  } catch (error) {
    console.error('❌ Failed to generate recommendations:', error.message)
    process.exit(1)
  }
}

generateRecommendations()
