export default function HospitalityHero() {
  // A high-end, luxury resort image with clean lines and warm lighting
  const hospitalityBg =
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${hospitalityBg})` }}
        >
          {/* Overlay: Using a Blue-tinted dark overlay at low opacity 
            keeps it looking "light" but makes white text pop.
          */}
          <div className="absolute inset-0 bg-blue-900/30 backdrop-brightness-75" />
        </div>
      </div>

      <div className="container mx-auto relative z-10 text-center text-white px-4">
        {/* Elite Branding with Amber Accent */}
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.3em] mb-6">
          ELITE <span className="italic text-amber-400">STAYS</span>
        </h1>

        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed tracking-wide">
          Hotels, Resorts, and Event Centers curated for the discerning
          traveler.
        </p>

        {/* The decorative line - Updated to fade into Amber */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-linear-to-b from-amber-500 via-white to-transparent" />
        </div>
      </div>
    </section>
  )
}
