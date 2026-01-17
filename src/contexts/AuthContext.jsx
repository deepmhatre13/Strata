import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../lib/apiClient'

const AuthContext = createContext(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || localStorage.getItem('auth_token'))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if token exists and validate it
    if (token) {
      validateToken(token)
    } else {
      setIsLoading(false)
    }
  }, [])

  const validateToken = async (authToken) => {
    try {
      // Verify token with backend
      const response = await api.get('/api/v1/auth/verify', {}, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      
      if (response.success && response.data) {
        setUser(response.data.user)
        setToken(authToken)
        localStorage.setItem('auth_token', authToken)
      } else {
        // Token invalid, clear it
        logout()
      }
    } catch (error) {
      console.error('Token validation error:', error)
      logout()
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post('/api/v1/auth/signin', { email, password })
      
      if (response.data && response.data.token) {
        const { token: authToken, user: userData } = response.data
        setToken(authToken)
        setUser(userData || { email })
        localStorage.setItem('token', authToken)
        localStorage.setItem('auth_token', authToken)
        if (userData) {
          localStorage.setItem('user', JSON.stringify(userData))
        }
        return { success: true }
      } else {
        return { success: false, error: response.error || response.data?.error || 'Login failed' }
      }
    } catch (error) {
      return { success: false, error: error.message || 'Network error' }
    }
  }

  const loginWithGoogle = async (googleToken) => {
    try {
      // If token is provided directly (from callback), use it
      if (googleToken) {
        // Verify the token with backend
        const response = await api.get('/api/v1/auth/verify', {}, {
          headers: {
            Authorization: `Bearer ${googleToken}`,
          },
        })
        
        if (response.success && response.data) {
          setToken(googleToken)
          setUser(response.data.user)
          localStorage.setItem('token', googleToken)
          localStorage.setItem('auth_token', googleToken)
          if (response.data.user) {
            localStorage.setItem('user', JSON.stringify(response.data.user))
          }
          return { success: true }
        } else {
          return { success: false, error: response.error || 'Token verification failed' }
        }
      }
      
      // Otherwise, redirect to Google OAuth (handled by backend)
      return { success: false, error: 'No token provided' }
    } catch (error) {
      return { success: false, error: error.message || 'Network error' }
    }
  }

  const signup = async (email, password, name) => {
    try {
      const response = await api.post('/api/v1/auth/signup', { email, password, fullName: name })
      
      if (response.data && response.data.token) {
        const { token: authToken, user: userData } = response.data
        setToken(authToken)
        setUser(userData || { email, name })
        localStorage.setItem('token', authToken)
        localStorage.setItem('auth_token', authToken)
        if (userData) {
          localStorage.setItem('user', JSON.stringify(userData))
        }
        return { success: true }
      } else {
        return { success: false, error: response.error || response.data?.error || 'Signup failed' }
      }
    } catch (error) {
      return { success: false, error: error.message || 'Network error' }
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('auth_token')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    isLoading,
    login,
    loginWithGoogle,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
