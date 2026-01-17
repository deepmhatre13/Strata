import { useNavigate } from 'react-router-dom'

export function LandingNav() {
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-[#E5E5E5] z-50 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#E17B5F] flex items-center justify-center text-white">
            <img src="./logo.png" className="orange"></img>
          </div>
          <span className="text-xl font-semibold tracking-tight text-[#2D3436]">Strata</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#philosophy"
            className="text-[15px] font-medium text-[#636E72] hover:text-[#E17B5F] transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#how-it-works"
            className="text-[15px] font-medium text-[#636E72] hover:text-[#E17B5F] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-[15px] font-medium text-[#636E72] hover:text-[#E17B5F] transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-[15px] font-medium text-[#636E72] hover:text-[#E17B5F] transition-colors"
          >
            Demo
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="bg-[#C17B5F] hover:bg-[#B06A4E] text-white px-5 py-2 rounded-full text-[15px] font-medium transition-transform hover:scale-105 shadow-sm"
            type="button"
            onClick={() => navigate('/signin')}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

