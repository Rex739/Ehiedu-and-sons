
import { Experiences } from "@/components/sectors/hospitality/Experiences"
import HospitalityHero from "@/components/sectors/hospitality/Hero"
import OfferingsGrid from "@/components/sectors/hospitality/OfferingGrid"
import { Button } from "@/components/ui/button"

export default function HospitalityPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HospitalityHero />

      <section className="container mx-auto py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            World-Class Hospitality
          </h2>
          <h3 className="text-4xl font-light tracking-tight sm:text-5xl">
            Where Luxury Meets Tradition
          </h3>
          <p className="text-lg text-muted-foreground pt-4">
            From serene resorts to vibrant urban lounges, we manage a portfolio
            of spaces designed for unforgettable moments and professional
            excellence.
          </p>
        </div>

        <OfferingsGrid />
      </section>

      <Experiences />

      {/* Reservation CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -z-10" />
        <div className="container mx-auto text-center text-white space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif italic">
            Plan Your Next Experience
          </h2>
          <p className="max-w-xl mx-auto text-slate-400">
            Whether it's a corporate retreat, a luxury stay, or a private event,
            our hospitality team is ready to curate your perfect itinerary.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 rounded-full px-8"
            >
              Book a Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8"
            >
              Inquire for Events
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
