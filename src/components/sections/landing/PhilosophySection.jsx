import { Reveal } from './Reveal'

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-[#FFF5F0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="mb-12">
          <span className="text-[#E17B5F] text-xs font-bold uppercase tracking-[2px] block mb-3">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-[36px] font-bold text-[#2D3436] leading-tight mb-4">From Foundation to Strata</h2>
          <p className="text-[16px] text-[#636E72] leading-[1.6]">
            Layer by layer learning that builds from basics to mastery, inspired by Earth&apos;s stratosphere.
          </p>
        </Reveal>

        <Reveal className="delay-100 overflow-x-auto pb-8 no-scrollbar">
          <div className="flex gap-5 min-w-max">
            <div className="w-[210px] h-[300px] rounded-2xl p-6 flex flex-col items-center justify-between text-center bg-gradient-to-br from-[#D4A574] to-[#E0BB8E] shadow-[0_2px_12px_rgba(0,0,0,0.06)] relative group transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 rounded-full bg-white/90 text-[#D4A574] font-bold text-sm flex items-center justify-center shadow-sm">
                01
              </div>
              <div className="text-white/90">
                <span className="iconify w-14 h-14" data-icon="lucide:file-spreadsheet" data-stroke-width="1.5" />
              </div>
              <div className="text-white">
                <h3 className="text-[19px] font-bold mb-1">Foundation</h3>
                <div className="text-[11px] uppercase tracking-wider opacity-75 mb-4">Data Collection</div>
                <p className="text-[13px] opacity-90 leading-tight">Upload test history to set baseline</p>
              </div>
            </div>

            <div className="w-[210px] h-[300px] rounded-2xl p-6 flex flex-col items-center justify-between text-center bg-gradient-to-br from-[#A7C4A0] to-[#B8D4B5] shadow-[0_2px_12px_rgba(0,0,0,0.06)] relative group transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 rounded-full bg-white/90 text-[#8BA888] font-bold text-sm flex items-center justify-center shadow-sm">
                02
              </div>
              <div className="text-white/90">
                <span className="iconify w-14 h-14" data-icon="lucide:brain-circuit" data-stroke-width="1.5" />
              </div>
              <div className="text-white">
                <h3 className="text-[19px] font-bold mb-1">Analysis</h3>
                <div className="text-[11px] uppercase tracking-wider opacity-75 mb-4">Pattern Recog.</div>
                <p className="text-[13px] opacity-90 leading-tight">AI identifies weak areas &amp; patterns</p>
              </div>
            </div>

            <div className="w-[210px] h-[300px] rounded-2xl p-6 flex flex-col items-center justify-between text-center bg-gradient-to-br from-[#F2B872] to-[#F7C98A] shadow-[0_2px_12px_rgba(0,0,0,0.06)] relative group transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 rounded-full bg-white/90 text-[#F2B872] font-bold text-sm flex items-center justify-center shadow-sm">
                03
              </div>
              <div className="text-white/90">
                <span className="iconify w-14 h-14" data-icon="lucide:lightbulb" data-stroke-width="1.5" />
              </div>
              <div className="text-white">
                <h3 className="text-[19px] font-bold mb-1">Insight</h3>
                <div className="text-[11px] uppercase tracking-wider opacity-75 mb-4">Guidance</div>
                <p className="text-[13px] opacity-90 leading-tight">Personalized adaptive plans</p>
              </div>
            </div>

            <div className="w-[210px] h-[300px] rounded-2xl p-6 flex flex-col items-center justify-between text-center bg-gradient-to-br from-[#E17B5F] to-[#ED9176] shadow-[0_2px_12px_rgba(0,0,0,0.06)] relative group transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 rounded-full bg-white/90 text-[#E17B5F] font-bold text-sm flex items-center justify-center shadow-sm">
                04
              </div>
              <div className="text-white/90">
                <span className="iconify w-14 h-14" data-icon="lucide:trending-up" data-stroke-width="1.5" />
              </div>
              <div className="text-white">
                <h3 className="text-[19px] font-bold mb-1">Growth</h3>
                <div className="text-[11px] uppercase tracking-wider opacity-75 mb-4">Improvement</div>
                <p className="text-[13px] opacity-90 leading-tight">Track progress and refine strategy</p>
              </div>
            </div>

            <div className="w-[210px] h-[300px] rounded-2xl p-6 flex flex-col items-center justify-between text-center bg-gradient-to-br from-[#E17B5F] via-[#F4A261] to-[#FFD700] shadow-[0_2px_12px_rgba(0,0,0,0.06)] relative group transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 rounded-full bg-white/90 text-[#E17B5F] font-bold text-sm flex items-center justify-center shadow-sm">
                05
              </div>
              <div className="text-white/90">
                <span className="iconify w-14 h-14" data-icon="lucide:star" data-stroke-width="1.5" />
              </div>
              <div className="text-white">
                <h3 className="text-[19px] font-bold mb-1">Strata</h3>
                <div className="text-[11px] uppercase tracking-wider opacity-75 mb-4">Peak</div>
                <p className="text-[13px] opacity-90 leading-tight">Maximum performance achieved</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="delay-200 flex flex-wrap justify-center gap-12 sm:gap-16 mt-10 border-t border-[#E17B5F]/10 pt-8">
          <div className="flex items-center gap-3">
            <span className="iconify text-[#E17B5F]" data-icon="lucide:layers" data-width="24" />
            <span className="text-[16px] font-medium text-[#2D3436]">5 Learning Strata</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="iconify text-[#E17B5F]" data-icon="lucide:refresh-ccw" data-width="24" />
            <span className="text-[16px] font-medium text-[#2D3436]">Continuous Adaptation</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="iconify text-[#E17B5F]" data-icon="lucide:gauge" data-width="24" />
            <span className="text-[16px] font-medium text-[#2D3436]">Your Pace</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

