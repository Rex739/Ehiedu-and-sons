export function ProcurementHero() {
  return (
    <section className="relative h-[60vh] flex items-center bg-slate-900 overflow-hidden">
      {/* Dark overlay with industrial image */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/images/logistics-hero.jpg')] bg-cover bg-center" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest border border-primary/30">
            Supply Chain & General Contracts
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Reliable Procurement, <br />
            <span className="text-primary">Without Boundaries.</span>
          </h1>
          <p className="text-xl text-slate-300">
            Acting as importers, exporters, and merchants of goods permissible
            by law. We simplify complex supply chains for you.
          </p>
        </div>
      </div>
    </section>
  )
}
