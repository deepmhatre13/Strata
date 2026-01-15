import { Reveal } from './Reveal'

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 space-y-32">
        <Reveal className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#E5E5E5]">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-semibold text-[#E17B5F]">Topic Mastery Heatmap</h4>
                <div className="flex items-center gap-1 text-[10px] text-[#636E72]">
                  <span>Needs Work</span>
                  <div className="w-3 h-3 bg-[#FFE5D9] rounded ml-1" />
                  <div className="w-3 h-3 bg-[#E8F4E8] rounded" />
                  <div className="w-3 h-3 bg-[#8BA888] rounded" />
                  <span className="ml-1">Mastered</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-4 gap-2 items-center">
                  <div className="text-xs font-medium pl-2">Algebra</div>
                  <div className="h-8 rounded bg-[#FFE5D9] flex items-center justify-center text-[10px] text-[#E17B5F]">
                    42%
                  </div>
                  <div className="h-8 rounded bg-[#E8F4E8] flex items-center justify-center text-[10px] text-[#2D3436]">
                    65%
                  </div>
                  <div className="h-8 rounded bg-[#8BA888] flex items-center justify-center text-[10px] text-white">
                    88%
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 items-center">
                  <div className="text-xs font-medium pl-2">Geometry</div>
                  <div className="h-8 rounded bg-[#FFE5D9] flex items-center justify-center text-[10px] text-[#E17B5F]">
                    30%
                  </div>
                  <div className="h-8 rounded bg-[#FFE5D9] flex items-center justify-center text-[10px] text-[#E17B5F]">
                    35%
                  </div>
                  <div className="h-8 rounded bg-[#E8F4E8] flex items-center justify-center text-[10px] text-[#2D3436]">
                    55%
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 items-center">
                  <div className="text-xs font-medium pl-2">Prob.</div>
                  <div className="h-8 rounded bg-[#8BA888] flex items-center justify-center text-[10px] text-white">
                    82%
                  </div>
                  <div className="h-8 rounded bg-[#8BA888] flex items-center justify-center text-[10px] text-white">
                    85%
                  </div>
                  <div className="h-8 rounded bg-[#8BA888] flex items-center justify-center text-[10px] text-white">
                    91%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <span className="text-[#E17B5F] font-semibold text-xs uppercase tracking-[2px] mb-2 block">
              Mastery Tracking
            </span>
            <h3 className="text-[28px] font-bold text-[#2D3436] mb-5 leading-tight">Visual Topic Mastery</h3>
            <p className="text-[#636E72] text-[16px] leading-[1.6] mb-6">
              Identify weak spots instantly. Our heatmap visualizes your performance over time, adjusting for recency
              so you know exactly what needs revision today.
            </p>
          </div>
        </Reveal>

        <Reveal className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-[#F2B872]/20 relative">
              <div className="absolute -top-3 -right-3 bg-[#E17B5F] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                78% Confident
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="iconify text-[#E17B5F]" data-icon="lucide:crosshair" data-width="20" />
                <span className="text-xs font-bold text-[#E17B5F] uppercase tracking-wide">High Priority</span>
              </div>
              <h3 className="text-xl font-semibold text-[#E17B5F] mb-4">Master Conditional Probability</h3>

              <div className="bg-[#FAF8F5] p-4 rounded-lg mb-6 border border-[#E5E5E5]">
                <h5 className="text-xs font-semibold text-[#636E72] mb-2 uppercase">Reasoning</h5>
                <p className="text-sm text-[#2D3436] leading-relaxed">
                  You&apos;ve attempted 12 questions with only{' '}
                  <span className="font-semibold text-[#E17B5F]">25% accuracy</span>. 75% of your errors are conceptual.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <span className="text-[#E17B5F] font-semibold text-xs uppercase tracking-[2px] mb-2 block">
              AI-Powered Guidance
            </span>
            <h3 className="text-[28px] font-bold text-[#2D3436] mb-5 leading-tight">
              Recommendations That Explain Themselves
            </h3>
            <p className="text-[#636E72] text-[16px] leading-[1.6] mb-6">
              Don&apos;t just take our word for it. Every recommendation comes with deep reasoning based on your actual
              data points and confidence metrics.
            </p>
          </div>
        </Reveal>

        <Reveal className="flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-[540px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-10 h-auto lg:h-[420px] mx-auto border border-[#E5E5E5]/50 flex flex-col">
            <h4 className="text-[20px] font-semibold text-[#2D3436] mb-8">Mistake Pattern Distribution</h4>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 flex-1">
              <div
                className="w-[240px] h-[240px] rounded-full relative flex-shrink-0"
                style={{
                  background:
                    'conic-gradient(#E17B5F 0% 45%, transparent 45% 46%, #8BA888 46% 76%, transparent 76% 77%, #F2B872 77% 92%, transparent 92% 93%, #7B8FA3 93% 100%)',
                }}
              >
                <div className="absolute inset-8 bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-[42px] font-bold text-[#2D3436] tracking-tight leading-none">47</span>
                  <span className="text-[13px] text-[#636E72] mt-1">Total Errors</span>
                </div>
                <div className="absolute top-[18%] right-[8%] text-sm font-bold text-[#E17B5F] bg-white/80 px-1 rounded shadow-sm">
                  45%
                </div>
                <div className="absolute bottom-[22%] left-[18%] text-sm font-bold text-[#8BA888] bg-white/80 px-1 rounded shadow-sm">
                  30%
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full max-w-[240px]">
                <div className="bg-[#E17B5F]/5 border-l-[3px] border-[#E17B5F] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#E17B5F]" />
                    <span className="text-[13px] font-medium text-[#2D3436]">Conceptual</span>
                  </div>
                  <div className="text-[24px] font-bold text-[#E17B5F] leading-none mb-1">45%</div>
                  <div className="text-[10px] text-[#636E72]">21 questions</div>
                </div>
                <div className="bg-[#8BA888]/5 border-l-[3px] border-[#8BA888] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#8BA888]" />
                    <span className="text-[13px] font-medium text-[#2D3436]">Calc.</span>
                  </div>
                  <div className="text-[24px] font-bold text-[#8BA888] leading-none mb-1">30%</div>
                  <div className="text-[10px] text-[#636E72]">14 questions</div>
                </div>
                <div className="bg-[#F2B872]/5 border-l-[3px] border-[#F2B872] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#F2B872]" />
                    <span className="text-[13px] font-medium text-[#2D3436]">Misread</span>
                  </div>
                  <div className="text-[24px] font-bold text-[#F2B872] leading-none mb-1">15%</div>
                  <div className="text-[10px] text-[#636E72]">7 questions</div>
                </div>
                <div className="bg-[#7B8FA3]/5 border-l-[3px] border-[#7B8FA3] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#7B8FA3]" />
                    <span className="text-[13px] font-medium text-[#2D3436]">Guess</span>
                  </div>
                  <div className="text-[24px] font-bold text-[#7B8FA3] leading-none mb-1">10%</div>
                  <div className="text-[10px] text-[#636E72]">5 questions</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-[#636E72]">
              <span className="iconify text-[#E17B5F]" data-icon="lucide:lightbulb" data-width="14" />
              <span>
                Highest in: <span className="font-medium">Probability (8)</span> •{' '}
                <span className="font-medium">Algebra (6)</span>
              </span>
            </div>
          </div>

          <div className="w-full lg:w-2/5 pt-4">
            <span className="inline-block bg-[#E17B5F] text-white text-[11px] uppercase tracking-[1px] font-semibold px-3 py-1 rounded-md mb-4">
              Pattern Recognition
            </span>
            <h3 className="text-[28px] font-bold text-[#E17B5F] mb-5 leading-tight">Understand Your Mistake Types</h3>
            <p className="text-[16px] text-[#636E72] leading-[1.6] mb-7 max-w-[420px]">
              Our AI automatically classifies every mistake into four categories. Identify whether you need conceptual
              review, calculation practice, careful reading, or confidence building.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="iconify text-[#E17B5F]" data-icon="lucide:check" data-width="16" />
                <span className="text-[15px] text-[#636E72]">Automatic error classification</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="iconify text-[#E17B5F]" data-icon="lucide:check" data-width="16" />
                <span className="text-[15px] text-[#636E72]">Track patterns over time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="iconify text-[#E17B5F]" data-icon="lucide:check" data-width="16" />
                <span className="text-[15px] text-[#636E72]">Targeted recommendations</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-3/5">
            <div className="relative py-8">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-[#E5E5E5] -z-10 transform -translate-y-1/2" />
              <div className="flex justify-between items-center px-4">
                <div className="relative group">
                  <div className="w-4 h-4 rounded-full bg-[#E17B5F] border-4 border-white shadow-sm mb-4 mx-auto relative z-10" />
                  <div className="bg-white p-3 rounded-lg shadow-md border border-[#E5E5E5] w-32 text-center transform transition-transform group-hover:-translate-y-2">
                    <div className="text-[10px] text-[#636E72] mb-1">Jan 1</div>
                    <div className="text-xs font-medium text-[#2D3436]">Broad Probability</div>
                  </div>
                </div>
                <span className="iconify text-[#E5E5E5]" data-icon="lucide:arrow-right" data-width="20" />
                <div className="relative group">
                  <div className="w-4 h-4 rounded-full bg-[#8BA888] border-4 border-white shadow-sm mb-4 mx-auto relative z-10" />
                  <div className="bg-white p-3 rounded-lg shadow-md border border-[#8BA888]/30 w-36 text-center transform transition-transform group-hover:-translate-y-2">
                    <div className="text-[10px] text-[#636E72] mb-1">Jan 5</div>
                    <div className="text-xs font-medium text-[#2D3436]">Bayes Theorem</div>
                  </div>
                </div>
                <span className="iconify text-[#E5E5E5]" data-icon="lucide:arrow-right" data-width="20" />
                <div className="relative group">
                  <div className="w-4 h-4 rounded-full bg-[#F2B872] border-4 border-white shadow-sm mb-4 mx-auto relative z-10" />
                  <div className="bg-white p-3 rounded-lg shadow-md border border-[#F2B872]/30 w-36 text-center transform transition-transform group-hover:-translate-y-2">
                    <div className="text-[10px] text-[#636E72] mb-1">Jan 10</div>
                    <div className="text-xs font-medium text-[#2D3436]">Permutations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <span className="text-[#E17B5F] font-semibold text-xs uppercase tracking-[2px] mb-2 block">
              Evolving Intelligence
            </span>
            <h3 className="text-[28px] font-bold text-[#2D3436] mb-5 leading-tight">Watch Your Guidance Improve</h3>
            <p className="text-[#636E72] text-[16px] leading-[1.6] mb-6">
              The more data you provide, the sharper the insights. Watch as the system moves from broad topics to
              specific sub-concepts as it learns your patterns.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

