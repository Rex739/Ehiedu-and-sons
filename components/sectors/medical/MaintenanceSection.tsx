import {
  CheckCircle2,
  Settings,
  ShieldCheck,
  Clock,
  PenTool,
} from "lucide-react"

export function MaintenanceSection() {
  const maintenanceFeatures = [
    "Regular Preventive Maintenance (PM)",
    "Emergency On-call Technical Support",
    "Spare Parts Sourcing & Replacement",
    "User Training & Safety Workshops",
    "Equipment Calibration & Certification",
  ]

  return (
    <section className="relative py-24 bg-blue-900 overflow-hidden">
      {/* Subtle Technical Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Side: Service Description */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-amber-500" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100">
                  Operational Continuity
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                Equipment <br />
                <span className="text-amber-500">Lifecycle Management</span>
              </h2>
            </div>

            <p className="text-blue-100 text-xl font-medium leading-relaxed max-w-xl">
              De Ehiedu&apos;s doesn&apos;t just supply; we ensure your clinical equipment
              performs at peak accuracy for years. Our technical contracts are
              engineered to eliminate downtime.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {maintenanceFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold uppercase tracking-wide text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: High-Impact Stat Blocks */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500 transition-colors duration-500">
              <ShieldCheck className="h-8 w-8 text-amber-500 mb-4 group-hover:text-blue-900" />
              <span className="text-4xl font-black text-white group-hover:text-blue-900 tracking-tighter">
                99.9%
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mt-2 group-hover:text-blue-900">
                Uptime Guarantee
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500 transition-colors duration-500">
              <Clock className="h-8 w-8 text-amber-500 mb-4 group-hover:text-blue-900" />
              <span className="text-4xl font-black text-white group-hover:text-blue-900 tracking-tighter">
                24/7
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mt-2 group-hover:text-blue-900">
                Technical Support
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500 transition-colors duration-500">
              <Settings className="h-8 w-8 text-amber-500 mb-4 group-hover:text-blue-900" />
              <span className="text-4xl font-black text-white group-hover:text-blue-900 tracking-tighter">
                ISO
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mt-2 group-hover:text-blue-900">
                Calibration Standards
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500 transition-colors duration-500">
              <PenTool className="h-8 w-8 text-amber-500 mb-4 group-hover:text-blue-900" />
              <span className="text-4xl font-black text-white group-hover:text-blue-900 tracking-tighter">
                100%
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mt-2 group-hover:text-blue-900">
                OEM Spare Parts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
