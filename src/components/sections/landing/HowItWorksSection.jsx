import { Reveal } from './Reveal'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-[140px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-[#FFE5D9] via-[#E17B5F] to-[#FFE5D9] z-0" />

          <Reveal className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-10 h-10 rounded-full bg-[#E17B5F] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-md">
              01
            </div>
            <div className="w-full aspect-[4/3] bg-[#FAF8F5] rounded-xl border border-[#E5E5E5] mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
              <div className="bg-white p-4 rounded shadow border border-[#E5E5E5] w-32 flex flex-col items-center">
                <span className="iconify text-[#636E72] mb-2" data-icon="lucide:file-spreadsheet" data-width="24" />
                <span className="text-[10px] font-mono text-[#2D3436] bg-[#F1F5F9] px-2 py-0.5 rounded">
                  results.csv
                </span>
              </div>
            </div>
            <h3 className="text-[19px] font-semibold text-[#2D3436] mb-2">Upload Your Tests</h3>
            <p className="text-[#636E72] text-[15px] leading-relaxed px-4">
              Simply export your test results from any major platform as CSV and drag them here.
            </p>
          </Reveal>

          <Reveal className="relative z-10 flex flex-col items-center text-center group delay-100">
            <div className="w-10 h-10 rounded-full bg-[#E17B5F] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-md">
              02
            </div>
            <div className="w-full aspect-[4/3] bg-[#FAF8F5] rounded-xl border border-[#E5E5E5] mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center shadow-sm z-10">
                <span className="iconify text-[#E17B5F]" data-icon="lucide:brain-circuit" data-width="32" />
              </div>
            </div>
            <h3 className="text-[19px] font-semibold text-[#2D3436] mb-2">AI Analyzes Patterns</h3>
            <p className="text-[#636E72] text-[15px] leading-relaxed px-4">
              Our engine cross-references your errors against thousands of data points.
            </p>
          </Reveal>

          <Reveal className="relative z-10 flex flex-col items-center text-center group delay-200">
            <div className="w-10 h-10 rounded-full bg-[#E17B5F] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-md">
              03
            </div>
            <div className="w-full aspect-[4/3] bg-[#FAF8F5] rounded-xl border border-[#E5E5E5] mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
              <div className="bg-white p-3 rounded shadow-sm border border-[#E5E5E5] w-40">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#8BA888]" />
                  <div className="h-1 w-16 bg-[#E5E5E5] rounded" />
                </div>
                <div className="h-1 w-full bg-[#E5E5E5] rounded mb-1" />
                <div className="h-1 w-2/3 bg-[#E5E5E5] rounded" />
              </div>
            </div>
            <h3 className="text-[19px] font-semibold text-[#2D3436] mb-2">Get Recommendations</h3>
            <p className="text-[#636E72] text-[15px] leading-relaxed px-4">
              Receive a tailored study plan focusing on high-impact areas.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

