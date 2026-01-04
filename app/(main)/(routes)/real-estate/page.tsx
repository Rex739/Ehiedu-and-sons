import HeroSection from "@/components/sectors/real-estate/Hero"
import { PropertyTypes } from "@/components/sectors/real-estate/PropertyTypes"
import ServiceGrid from "@/components/sectors/real-estate/ServiceGrid"
import { Button } from "@/components/ui/button"
// import { ContactDialog } from "@/components/shared/ContactDialog" // Assuming you'll build this

export default function RealEstatePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="container mx-auto py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Integrated Property Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From land acquisition to architectural development and long-term
            asset management, we provide a seamless ecosystem for real estate
            investors and homeowners.
          </p>
        </div>

        <ServiceGrid />
      </section>

      <PropertyTypes />

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Need a Professional Valuation?</h2>
          <p className="max-w-xl mx-auto opacity-90 text-lg">
            Our consultancy team provides expert valuation and advisory services
            for landed properties and estate portfolios.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            Book a Consultancy Session
          </Button>
        </div>
      </section>
    </main>
  )
}
