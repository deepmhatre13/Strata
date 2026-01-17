import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth()
  
  // Also check localStorage directly as a fallback
  const hasToken = localStorage.getItem('token') || localStorage.getItem('auth_token')

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#C17B5F]"></div>
      </div>
    )
  }

  if (!isAuthenticated && !hasToken) {
    return <Navigate to="/signin" replace />
  }

  return children
}
