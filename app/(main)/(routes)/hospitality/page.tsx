import Experiences from "@/components/sectors/hospitality/Experiences"
import HospitalityHero from "@/components/sectors/hospitality/Hero"
import OfferingsGrid from "@/components/sectors/hospitality/OfferingGrid"
import { Button } from "@/components/ui/button"
import { CalendarDays, UtensilsCrossed } from "lucide-react"

export default function HospitalityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <HospitalityHero />

      {/* 2. CORE OFFERINGS OVERVIEW */}
      <section className="container mx-auto py-24 px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-8 bg-amber-500" />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-900">
              World-Class Hospitality
            </h2>
            <div className="h-0.5 w-8 bg-amber-500" />
          </div>

          <h3 className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl leading-[0.9]">
            Where Luxury Meets <br />
            <span className="text-amber-500">Global Standards</span>
          </h3>

          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            From serene resorts to vibrant urban lounges, we manage a portfolio
            of spaces designed for unforgettable moments and operational
            excellence.
          </p>
        </div>

        {/* OfferingsGrid component handles its own industrial border styling */}
        <OfferingsGrid />
      </section>

      {/* 3. EXPERIENCES SECTION (Full-width Split Layout) */}
      <Experiences />

      {/* 4. RESERVATION CTA (High-Impact Brand Anchor) */}
      <section className="relative py-24 overflow-hidden bg-blue-900">
        {/* Subtle Branding Watermark */}
        <div className="absolute top-0 right-0 opacity-5 translate-x-1/4 -translate-y-1/4">
          <UtensilsCrossed size={500} className="text-white" />
        </div>

        <div className="container mx-auto text-center relative z-10 px-4 space-y-10">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md mb-2">
            <CalendarDays className="h-10 w-10 text-amber-500" />
          </div>

          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Plan Your Next <br />
            <span className="text-amber-500">Experience</span>
          </h2>

          <p className="max-w-xl mx-auto text-blue-100 text-lg font-medium uppercase tracking-widest leading-relaxed">
            Whether it&apos;s a corporate retreat, a luxury stay, or a private
            event, our hospitality team is ready to curate your perfect
            itinerary.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Button
              size="lg"
              variant="amber"
              className="h-16 px-12 rounded-none font-bold uppercase tracking-[0.2em] text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Book a Stay
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-16 px-12 rounded-none border-2  border-white text-white hover:bg-white hover:text-blue-900 bg-transparent   font-bold uppercase tracking-[0.2em] text-lg transition-all"
            >
              Inquire for Events
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-12 pt-12 border-t border-white/10 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-white font-black text-xl tracking-tighter uppercase">
                5-Star
              </p>
              <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">
                Service
              </p>
            </div>
            <div className="text-center">
              <p className="text-white font-black text-xl tracking-tighter uppercase">
                Verified
              </p>
              <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">
                Security
              </p>
            </div>
            <div className="text-center">
              <p className="text-white font-black text-xl tracking-tighter uppercase">
                Global
              </p>
              <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">
                Cuisine
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
