export default function HospitalityHero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('/images/hospitality-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-6">
          ELITE <span className="italic">STAYS</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 mb-8">
          Hotels, Resorts, and Event Centers curated for the discerning
          traveler.
        </p>
        <div className="flex justify-center">
          <div className="w-px h-24 bg-linear-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  )
}
