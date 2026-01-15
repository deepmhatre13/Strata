import { useNavigate } from 'react-router-dom'
import { Reveal } from './Reveal'

export function CallToActionSection() {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-[#FFE5D9]">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl lg:text-[42px] font-semibold text-[#2D3436] mb-4 tracking-tight">
            Ready to Transform Your Exam Prep?
          </h2>
          <p className="text-lg text-[#636E72] mb-10 max-w-lg mx-auto">
            No credit card required. Start analyzing your past attempts in 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="bg-[#2D3436] hover:bg-black text-white px-8 py-4 rounded-lg text-[16px] font-medium transition-all shadow-md"
            >
              Get Started Now
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="text-[#2D3436] font-medium hover:underline"
            >
              View sample dashboard first
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#636E72]">
            <span className="flex items-center gap-2">
              <span className="iconify text-[#8BA888]" data-icon="lucide:check" data-width="16" />
              Free demo
            </span>
            <span className="flex items-center gap-2">
              <span className="iconify text-[#8BA888]" data-icon="lucide:check" data-width="16" />
              No signup
            </span>
            <span className="flex items-center gap-2">
              <span className="iconify text-[#8BA888]" data-icon="lucide:check" data-width="16" />
              Sample data included
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

