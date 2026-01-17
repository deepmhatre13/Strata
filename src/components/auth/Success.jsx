import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export function Success({ message = 'Account created successfully!' }) {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to dashboard after 2 seconds
    const timer = setTimeout(() => {
      navigate('/dashboard')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl border border-[#F2D5C8] bg-white p-8 shadow-sm text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-emerald-100 p-3">
              <CheckCircle2 className="h-12 w-12 text-emerald-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-xl font-semibold text-[#2D3436] mb-2">Success!</h1>
          <p className="text-sm text-[#78716C] mb-6">{message}</p>

          {/* Loading indicator */}
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#16A34A]"></div>
          </div>
          <p className="text-xs text-[#A8A29E] mt-4">Redirecting to dashboard...</p>
        </div>
      </div>
    </div>
  )
}
