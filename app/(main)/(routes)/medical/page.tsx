import { MedicalHero } from "@/components/sectors/medical/Hero"
import { MaintenanceSection } from "@/components/sectors/medical/MaintenanceSection"
import { SpecializedServices } from "@/components/sectors/medical/SpecializedServices"
import { Button } from "@/components/ui/button"
import {
  Activity,
  ShieldPlus,
  Truck,
  ClipboardCheck,
} from "lucide-react"

export default function MedicalLogisticsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <MedicalHero />

      {/* 2. SCOPE OVERVIEW (Industrial Light Style) */}
      <section className="container mx-auto py-24 px-4 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content Hierarchy */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-amber-500" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
                  Medical Infrastructure
                </span>
              </div>
              <h2 className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl leading-[0.9]">
                Precision Logistics for <br />
                <span className="text-amber-500">Modern Healthcare</span>
              </h2>
            </div>

            <p className="text-xl text-slate-500 font-medium leading-relaxed border-l-2 border-blue-100 pl-6">
              We bridge the gap between healthcare needs and technical
              excellence. Our team provides end-to-end support for medical
              facilities, from furnishing and state-of-the-art equipment supply
              to specialized waste management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: Truck,
                  title: "Supply & Distribution",
                  desc: "Strategic procurement of medical consumables and specialized hardware.",
                },
                {
                  icon: ShieldPlus,
                  title: "Clinical Compliance",
                  desc: "Strict adherence to WHO and international medical safety standards.",
                },
              ].map((item, i) => (
                <div key={i} className="group space-y-4">
                  <div className="bg-blue-900 w-12 h-12 flex items-center justify-center shadow-lg group-hover:bg-amber-500 transition-colors duration-500">
                    <item.icon className="h-6 w-6 text-amber-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-blue-900 uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Technical Visualization Overlay */}
          <div className="relative aspect-video lg:aspect-square flex items-center justify-center overflow-hidden border border-slate-200 bg-slate-50 shadow-2xl">
            {/* Subtle Industrial Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />

            <div className="text-center space-y-6 relative z-10">
              <div className="relative">
                <Activity className="h-24 w-24 text-blue-900 mx-auto animate-pulse opacity-20" />
                <ClipboardCheck className="h-12 w-12 text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-black text-blue-900 uppercase tracking-[0.4em]">
                  Diagnostic Systems Interface
                </p>
                <div className="h-1 w-12 bg-amber-500 mx-auto" />
              </div>
            </div>

            {/* Corner Badges */}
            <div className="absolute top-6 right-6 px-3 py-1 bg-white border border-slate-200 text-[10px] font-bold text-blue-900 uppercase tracking-widest">
              ISO 13485 Compliant
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPECIALIZED SERVICES & MAINTENANCE SECTIONS */}
      <SpecializedServices />
      <MaintenanceSection />

      {/* 4. PARTNER CTA (Navy/Amber Heavy Bar) */}
      <section className="container mx-auto py-24 px-4">
        <div className="bg-blue-900 rounded-none p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden border-l-8 border-amber-500 shadow-2xl">
          <div className="max-w-xl space-y-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Equip Your <br />{" "}
              <span className="text-amber-500">Facility Today</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium uppercase tracking-wide leading-relaxed">
              Contact our logistics team for a comprehensive audit of your
              hospital design or equipment maintenance needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Button
              size="lg"
              variant="amber"
              className="h-16 px-10 rounded-none font-bold uppercase tracking-[0.2em] text-lg shadow-xl"
            >
              Request Audit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-16 px-10 rounded-none border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent  font-bold uppercase tracking-[0.2em] text-lg transition-all"
            >
              Consultancy
            </Button>
          </div>

          {/* Subtle Watermark */}
          <ShieldPlus
            size={300}
            className="absolute -bottom-20 -right-20 text-white opacity-5 pointer-events-none"
          />
        </div>
      </section>
    </main>
  )
}
