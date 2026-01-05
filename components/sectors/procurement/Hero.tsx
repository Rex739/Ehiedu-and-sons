import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowRight } from "lucide-react"
import Image from "next/image"

export function ProcurementHero() {
  // A high-quality image of global maritime/shipping logistics
  const procurementBg =
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"

  return (
    <section className="relative h-[75vh] min-h-150 flex items-center overflow-hidden bg-slate-100">
      {/* 1. Background Image & Light Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={procurementBg}
          alt="Global Procurement Logistics"
          className="h-full w-full object-cover"
          loading="eager"
          fill
        />
        {/* High-contrast white gradient to keep text sharp */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl space-y-8">
          {/* Industrial Badge - Hard Edged */}
          <div className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white shadow-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-blue-900">
            <ShoppingCart className="mr-2 h-4 w-4 text-amber-500" />
            Supply Chain & General Contracts
          </div>

          {/* Headline - Bold Industrial Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-blue-900 uppercase leading-[0.9]">
            Reliable <br />
            <span className="text-amber-500">Procurement</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed border-l-2 border-blue-200 pl-6 font-medium">
            Importers, exporters, and merchants of law-permissible goods. We
            bridge the gap between global manufacturers and your local
            requirements.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="amber"
              size="lg"
              className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
            >
              Partner Brands
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Brand Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-500" />
    </section>
  )
}
