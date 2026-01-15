export function LandingFooter() {
  return (
    <footer className="bg-[#F1F3F5] pt-10 pb-6 border-t border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#E17B5F] flex items-center justify-center text-white">
                <span className="iconify" data-icon="lucide:brain-circuit" data-width="16" />
              </div>
              <span className="font-semibold text-[#2D3436]">Strata</span>
            </div>
            <p className="text-sm text-[#636E72] max-w-xs">
              Layered exam analytics that move you from broad foundations to sharp, exam‑ready mastery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 text-sm">
            <div className="flex gap-6">
              <a href="#" className="text-[#636E72] hover:text-[#2D3436]">
                Product
              </a>
              <a href="#" className="text-[#636E72] hover:text-[#2D3436]">
                Features
              </a>
              <a href="#demo" className="text-[#636E72] hover:text-[#2D3436]">
                Demo
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-[#636E72] hover:text-[#2D3436]">
                Pricing
              </a>
              <a href="#" className="text-[#636E72] hover:text-[#2D3436]">
                Docs
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-4 text-[#636E72]">
              <a href="#" className="hover:text-[#2D3436]">
                <span className="iconify" data-icon="lucide:twitter" data-width="18" />
              </a>
              <a href="#" className="hover:text-[#2D3436]">
                <span className="iconify" data-icon="lucide:linkedin" data-width="18" />
              </a>
            </div>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#78716C] border border-[#E5E5E5]">
              Built for competitive exam learners · 2026
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-[#E5E5E5] pt-4 mt-2 text-[11px] text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} Strata Analytics. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#6B7280]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#6B7280]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

