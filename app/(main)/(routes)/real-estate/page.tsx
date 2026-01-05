import HeroSection from "@/components/sectors/real-estate/Hero"
import { PropertyTypes } from "@/components/sectors/real-estate/PropertyTypes"
import ServiceGrid from "@/components/sectors/real-estate/ServiceGrid"
import { Button } from "@/components/ui/button"
import {  Hammer } from "lucide-react"

export default function RealEstatePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. INTEGRATED SOLUTIONS (Light Mode) */}
      <section className="container mx-auto py-24 px-4">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
              Total Asset Ecosystem
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl leading-tight">
            Integrated <br />
            <span className="text-amber-500">Property Solutions</span>
          </h2>

          <p className="mt-6 text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            From land acquisition to architectural development and long-term
            asset management, we provide a seamless ecosystem for real estate
            investors and homeowners.
          </p>
        </div>

        {/* The Service Grid component handles its own industrial styling */}
        <ServiceGrid />
      </section>

      {/* 3. PROPERTY TYPES (Tabs Section) */}
      <PropertyTypes />

      {/* 4. FINAL CONSULTANCY CTA (Branded Blue & Amber) */}
      <section className="relative bg-blue-900 py-24 overflow-hidden">
        {/* Subtle Decorative Background Element */}
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Hammer size={400} className="text-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 flex flex-col items-center">
          <h2 className="text-4xl font-black md:text-6xl text-white uppercase tracking-tighter leading-none">
            Need a Professional <br />
            <span className="text-amber-500">Valuation?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-blue-100 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-wide">
            Our consultancy team provides expert valuation and advisory services
            for landed properties and estate portfolios.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              variant="amber"
              className="h-16 px-12 rounded-none font-bold uppercase tracking-[0.2em] text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Book a Consultancy Session

            </Button>
          </div>

          <div className="flex gap-8 pt-8">
            <div className="text-center">
              <p className="text-amber-500 text-2xl font-black">24h</p>
              <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">
                Turnaround
              </p>
            </div>
            <div className="w-px h-10 bg-blue-800" />
            <div className="text-center">
              <p className="text-amber-500 text-2xl font-black">100%</p>
              <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">
                Verified
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
