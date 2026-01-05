import { Button } from "@/components/ui/button"
import { Microscope, ArrowRight, ShieldCheck } from "lucide-react"
import Image from "next/image"

export function MedicalHero() {
  // A clean, high-tech laboratory or clinical environment image
  const medicalBg =
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"

  return (
    <section className="relative h-[75vh] min-h-150 flex items-center overflow-hidden bg-white">
      {/* 1. Background Image & Clinical Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={medicalBg}
          alt="Advanced Healthcare Infrastructure"
          className="h-full w-full object-cover"
          loading="eager"
          fill
        />
        {/* White gradient for text clarity and a "sterile" professional feel */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl space-y-8">
          {/* Industrial Badge - Hard Edged */}
          <div className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white shadow-sm px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-900">
            <Microscope className="mr-2 h-4 w-4 text-amber-500" />
            Healthcare Support & Logistics
          </div>

          {/* Headline - Bold Industrial Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-blue-900 uppercase leading-[0.9]">
            Advanced <br />
            <span className="text-amber-500">Logistics</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed border-l-2 border-blue-200 pl-6 font-medium">
            Expert supply, installation, and maintenance of medical equipment,
            facility design, and specialized medical waste management.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="amber"
              size="lg"
              className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-lg"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
            >
              Technical Profile
            </Button>
          </div>

          {/* Compliance Indicators */}
          <div className="flex items-center gap-6 pt-4 text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-900" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                WHO Compliant
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-900" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                ISO Certified Logistics
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Brand Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-500" />
    </section>
  )
}
