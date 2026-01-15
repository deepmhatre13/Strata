import { useNavigate } from 'react-router-dom'
import { Reveal } from './Reveal'

export function HeroSection() {
  const navigate = useNavigate()

  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="text-[#E17B5F] text-xs font-bold uppercase tracking-widest mb-4 block">
            AI-Powered Exam Analytics
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.2] text-[#2D3436] mb-6 tracking-tight">
            Master Competitive Exams with <span className="text-[#E17B5F]">Intelligent</span> Insights
          </h1>
          <p className="text-lg text-[#636E72] leading-relaxed mb-8 max-w-lg">
            Upload your test results and get personalized, adaptive recommendations powered by AI. Track mastery,
            identify patterns, and improve strategically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="bg-[#E17B5F] hover:bg-[#D06A4E] text-white px-8 py-3.5 rounded-lg text-[16px] font-medium transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Try Live Demo
            </button>
            <button className="bg-white border border-[#E5E5E5] hover:border-[#2D3436] text-[#2D3436] px-8 py-3.5 rounded-lg text-[16px] font-medium transition-all flex items-center justify-center gap-2 group">
              <span
                className="iconify group-hover:text-[#E17B5F] transition-colors"
                data-icon="lucide:play-circle"
                data-width="20"
              />
              Watch Video
            </button>
          </div>
        </Reveal>

        <Reveal className="delay-100 relative lg:pl-10">
          <div className="relative bg-white rounded-xl shadow-2xl border border-[#E5E5E5]/60 p-1 transition-all duration-700 ease-out origin-center">
            <div className="bg-[#FAF8F5] border-b border-[#E5E5E5] px-4 py-3 rounded-t-lg flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E17B5F]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F2B872]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#8BA888]/40" />
              </div>
              <div className="ml-4 bg-white border border-[#E5E5E5] rounded text-xs text-[#636E72] px-3 py-1 flex-1 text-center font-mono">
                app.examai.com/dashboard
              </div>
            </div>
            <div className="p-6 bg-white rounded-b-lg">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="col-span-1 bg-[#FAF8F5] p-4 rounded-lg border border-[#E5E5E5]/50">
                  <h4 className="text-xs font-semibold text-[#636E72] uppercase mb-3">Subject Performance</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium">Mathematics</span>
                        <span className="text-[#E17B5F]">67%</span>
                      </div>
                      <div className="h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
                        <div className="h-full bg-[#E17B5F] rounded-full" style={{ width: '67%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium">Physics</span>
                        <span className="text-[#8BA888]">82%</span>
                      </div>
                      <div className="h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
                        <div className="h-full bg-[#8BA888] rounded-full" style={{ width: '82%' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-[#FAF8F5] p-4 rounded-lg border border-[#E5E5E5]/50 flex flex-col justify-center">
                  <span className="text-xs text-[#636E72] mb-1">Est. Rank Percentile</span>
                  <span className="text-3xl font-semibold text-[#2D3436] tracking-tight">
                    94.2<span className="text-base text-[#8BA888] ml-1">↑</span>
                  </span>
                  <span className="text-[10px] text-[#8BA888] mt-2">+2.4% from last week</span>
                </div>
              </div>
              <div className="bg-white border border-[#F2B872]/30 p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#FFE5D9] flex items-center justify-center text-[#E17B5F] flex-shrink-0">
                    <span className="iconify" data-icon="lucide:target" data-width="16" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#2D3436]">Focus on Probability</h3>
                    <p className="text-xs text-[#636E72] mt-1 leading-relaxed">
                      You&apos;ve attempted 12 questions with 25% accuracy. Most errors are conceptual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

