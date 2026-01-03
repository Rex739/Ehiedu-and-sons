import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/real-estate-hero.jpg')" }} // Place a nice building image here
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 text-center text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Redefining Modern Living
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Development, Management, and Acquisition of Prime Landed Properties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            View Listings
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Our Developments
          </Button>
        </div>
      </div>
    </section>
  )
}
