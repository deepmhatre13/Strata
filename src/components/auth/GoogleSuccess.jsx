import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export function GoogleSuccess() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { loginWithGoogle } = useAuth()

  useEffect(() => {
    const token = searchParams.get('token')
    const error = searchParams.get('error')
    
    if (error) {
      console.error('Google OAuth error:', error)
      navigate('/signin?error=google_auth_failed')
      return
    }

    if (token) {
      // Store token and verify with backend
      localStorage.setItem('token', token)
      localStorage.setItem('auth_token', token)
      
      // Verify token with backend and get user data
      loginWithGoogle(token)
        .then((result) => {
          if (result.success) {
            navigate('/dashboard')
          } else {
            navigate('/signin?error=auth_failed')
          }
        })
        .catch(() => {
          navigate('/signin?error=auth_failed')
        })
    } else {
      // No token in URL, redirect to sign in
      navigate('/signin')
    }
  }, [searchParams, navigate, loginWithGoogle])

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C17B5F] mb-6"></div>
        <div className="text-[#2D3436] text-lg font-semibold">Completing sign in...</div>
      </div>
    </div>
  )
}
