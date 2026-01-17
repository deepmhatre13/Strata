import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { ArrowLeft, User, Mail, Lock, Eye, EyeOff, Moon } from 'lucide-react'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:6969'

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signup } = useAuth()

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signup(email, password, fullName)
      if (result.success) {
        navigate('/dashboard')
      } else {
        setError(result.error || 'Sign up failed')
      }
    } catch (err) {
      setError('Sign up failed')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/api/v1/auth/google`
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl border border-[#F2D5C8] bg-white p-8 shadow-sm">
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-5">
            <Link
              to="/"
              className="text-sm hover:text-[#C17B5F] flex justify-center items-center gap-1 cursor-pointer transition-colors text-[#57534E]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <button
              type="button"
              className="text-[#57534E] hover:text-[#2D3436] transition-colors"
              aria-label="Toggle dark mode"
            >
              <Moon className="h-5 w-5" />
            </button>
          </div>

          {/* Header */}
          <h2 className="text-2xl font-semibold mb-2 flex justify-center items-center text-[#2D3436]">
            Create Account
          </h2>
          <p className="text-sm mb-6 flex justify-center items-center text-[#78716C]">
            Join Strata and start your exam analytics journey
          </p>

          {/* Form Container */}
          <div className="rounded-xl border border-[#F2D5C8] bg-white p-8 shadow-sm">
            {/* Google Sign Up Button */}
            <div className="flex flex-col mb-6">
              <button
                className="flex justify-center items-center gap-4 py-3 rounded-xl w-full border border-[#E7E5E4] bg-white text-[#57534E] hover:bg-[#F5F5F4] transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-md"
                onClick={handleGoogleLogin}
                type="button"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="grow border-[#E7E5E4]" />
              <span className="text-xs mx-3 text-[#78716C] uppercase">OR CONTINUE WITH EMAIL</span>
              <hr className="grow border-[#E7E5E4]" />
            </div>

            {/* Email/Password Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSignup}>
              {/* Full Name Field */}
              <div>
                <label className="flex text-sm mb-1 font-medium text-[#57534E]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#78716C]" />
                  <input
                    className="w-full px-3 py-3 pl-10 placeholder:text-sm rounded-xl transition-all duration-200 focus:ring-2 focus:ring-[#C17B5F]/20 focus:border-[#C17B5F] border border-[#E7E5E4] bg-white placeholder:text-[#A8A29E] text-[#2D3436]"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="flex text-sm mb-1 font-medium text-[#57534E]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#78716C]" />
                  <input
                    className="w-full px-3 py-3 pl-10 placeholder:text-sm rounded-xl transition-all duration-200 focus:ring-2 focus:ring-[#C17B5F]/20 focus:border-[#C17B5F] border border-[#E7E5E4] bg-white placeholder:text-[#A8A29E] text-[#2D3436]"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="flex text-sm mb-1 font-medium text-[#57534E]">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#78716C]" />
                  <input
                    className="w-full px-3 py-3 pl-10 pr-10 placeholder:text-sm rounded-xl transition-all duration-200 focus:ring-2 focus:ring-[#C17B5F]/20 focus:border-[#C17B5F] border border-[#E7E5E4] bg-white placeholder:text-[#A8A29E] text-[#2D3436]"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors cursor-pointer text-[#78716C] hover:text-[#57534E]"
                    onClick={() => setShowPassword((v) => !v)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <span className="text-xs text-[#78716C]">Must be at least 8 characters long</span>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-600 text-sm p-3 rounded-lg border bg-red-50 border-red-200">
                  {error}
                </div>
              )}

              {/* Sign Up Button */}
              <button
                className="bg-[#C17B5F] hover:bg-[#B06A4E] hover:scale-[1.02] hover:shadow-lg transition-all duration-200 text-white rounded-xl py-3 font-semibold w-full mt-2 cursor-pointer"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Create account'}
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center mt-8 text-[#78716C]">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="text-[#C17B5F] hover:text-[#B06A4E] hover:underline font-medium cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
