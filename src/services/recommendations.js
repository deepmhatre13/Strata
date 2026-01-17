import { api } from '../lib/apiClient'

export async function fetchRecommendations({ activeOnly = true } = {}) {
  return await api.get('/api/recommendations', {
    active_only: activeOnly.toString(),
  })
}

export async function markRecommendationFollowed(id) {
  if (!id) return { success: false, error: 'Missing id', data: null }

  return await api.patch(`/api/recommendations/${id}/follow`)
}

