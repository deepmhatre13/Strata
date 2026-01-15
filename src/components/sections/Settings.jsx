export function Settings() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-base font-semibold text-[#E17B5F]">Settings</h2>
        <p className="text-xs text-[#8D8A86]">
          These controls are local only for now. Wire them to real data later.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="rounded-xl border border-[#F2D5C8] bg-white p-5 space-y-4 shadow-sm">
          <h3 className="text-sm font-semibold">Appearance</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Theme</p>
              <p className="text-xs text-[#8D8A86]">Light theme only in this demo.</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-[#F5F5F4] px-3 py-1 text-xs font-medium text-[#57534E]">
              Light
            </span>
          </div>
        </article>

        <article className="rounded-xl border border-[#F2D5C8] bg-white p-5 space-y-4 shadow-sm">
          <h3 className="text-sm font-semibold">Mock data</h3>
          <p className="text-xs text-[#8D8A86]">
            Replace this with real score imports or integrations later.
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-[#E17B5F] px-3 py-2 text-xs font-medium text-white hover:bg-[#D06A4E] transition-colors shadow-sm"
          >
            Reset demo data
          </button>
        </article>
      </section>
    </div>
  )
}

