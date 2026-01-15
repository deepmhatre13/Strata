export function AppHeader() {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold tracking-[0.16em] text-[#E17B5F] uppercase">
        dashboard
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2D3436]">
          Your exam performance at a glance
        </h1>
        <p className="text-xs text-[#8D8A86]">
          Using demo data — connect real attempts next.
        </p>
      </div>
    </div>
  )
}

