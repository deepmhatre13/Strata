import { useNavigate } from 'react-router-dom'
import { Reveal } from './Reveal'

export function DemoSection() {
  const navigate = useNavigate()

  return (
    <section id="demo" className="py-20 bg-[#FFF5F0]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-[36px] font-semibold text-[#2D3436] mb-12 tracking-tight">Interactive Demo</h2>
        </Reveal>
        <Reveal className="delay-100 relative mx-auto max-w-[1000px]">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-[#E5E5E5] bg-[#FAF8F5] text-left">
            <div className="bg-white border-b border-[#E5E5E5] px-4 py-3 flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-[#FAF8F5] rounded px-3 py-1.5 text-xs text-[#636E72] text-left border border-[#E5E5E5]">
                https://app.examai.com/demo
              </div>
            </div>
            <div className="p-6 bg-[#FAF8F5] h-[400px] overflow-hidden relative">
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E5E5E5]">
                  <div className="text-[10px] uppercase text-[#636E72] mb-1">Total Tests</div>
                  <div className="text-xl font-semibold text-[#2D3436]">24</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E5E5E5]">
                  <div className="text-[10px] uppercase text-[#636E72] mb-1">Accuracy</div>
                  <div className="text-xl font-semibold text-[#2D3436]">68%</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E5E5E5]">
                  <div className="text-[10px] uppercase text-[#636E72] mb-1">Study Time</div>
                  <div className="text-xl font-semibold text-[#2D3436]">12h</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E5E5E5]">
                  <div className="text-[10px] uppercase text-[#636E72] mb-1">Rank</div>
                  <div className="text-xl font-semibold text-[#E17B5F]">Top 10%</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-white p-5 rounded-lg shadow-sm border border-[#E5E5E5]">
                  <h4 className="text-xs font-semibold text-[#2D3436] mb-4">Performance Trend (Last 30 Days)</h4>
                  <div className="flex items-end justify-between h-32 gap-2 px-2">
                    <div className="w-full bg-[#FFE5D9] rounded-t h-[40%]" />
                    <div className="w-full bg-[#FFE5D9] rounded-t h-[55%]" />
                    <div className="w-full bg-[#FFE5D9] rounded-t h-[45%]" />
                    <div className="w-full bg-[#FFE5D9] rounded-t h-[60%]" />
                    <div className="w-full bg-[#FFE5D9] rounded-t h-[75%]" />
                    <div className="w-full bg-[#E17B5F] rounded-t h-[85%]" />
                  </div>
                </div>
                <div className="col-span-1 space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#F2B872]">
                    <div className="text-[10px] text-[#F2B872] font-bold uppercase mb-1">Focus Area</div>
                    <div className="text-xs font-medium text-[#2D3436]">Geometry Proofs</div>
                    <div className="text-[10px] text-[#636E72] mt-1">Accuracy: 32%</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="bg-[#E17B5F] hover:bg-[#D06A4E] text-white px-8 py-3 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  Try Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

