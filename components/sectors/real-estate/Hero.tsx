import { Button } from "@/components/ui/button"
import { Home, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] min-h-150 flex items-center overflow-hidden bg-slate-100">
      {/* 1. Background Image & Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
          alt="Modern luxury real estate architecture"
          className="h-full w-full object-cover"
          loading="eager"
          fill
        />
        {/* White Gradient Overlay: Ensures dark blue text is sharp on the left */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl space-y-8">
          {/* Industrial Badge */}
          <div className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-blue-900 shadow-sm">
            <Home className="mr-2 h-4 w-4 text-amber-500" />
            De Ehiedu&apos;s Real Estate Division
          </div>

          {/* Headline - Industrial Black Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-blue-900 uppercase leading-[0.9]">
            Redefining <br />
            <span className="text-amber-500">Modern Living</span>
          </h1>

          {/* Description with Vertical Accent */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed border-l-2 border-blue-200 pl-6 font-medium">
            Strategic Development, Professional Management, and Acquisition of
            Prime Landed Properties across Global Markets.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="amber"
              size="lg"
              asChild
              className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-lg"
            >
              <Link href="/listings">
                View Listings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
            >
              Our Developments
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-500" />
    </section>
  )
}
