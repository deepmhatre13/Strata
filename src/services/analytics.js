import { api } from '../lib/apiClient'

export async function fetchSummary() {
  return await api.get('/api/analytics/summary')
}

export async function fetchTopicMastery() {
  return await api.get('/api/analytics/topic-mastery')
}

