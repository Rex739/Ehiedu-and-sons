import { Card, CardContent } from "@/components/ui/card"
import { Ship, Truck, Store, Landmark, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Import & Export",
    desc: "Seamless global movement of industrial and commercial goods across international borders with end-to-end customs clearance.",
    icon: Ship,
    id: "SC-01",
  },
  {
    title: "General Merchant",
    desc: "Comprehensive trading solutions, dealing in a diverse range of high-demand goods and services permissible by international law.",
    icon: Store,
    id: "SC-02",
  },
  {
    title: "Manufacturer Representation",
    desc: "Acting as authorized distributors and strategic representatives for leading local and international industrial brands.",
    icon: Landmark,
    id: "SC-03",
  },
  {
    title: "Wholesale Supply",
    desc: "Strategic high-volume procurement and rapid-response distribution networks for industrial and corporate clients.",
    icon: Truck,
    id: "SC-04",
  },
]

export function SupplyChainGrid() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
              Operational Competencies
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl">
            Supply Chain <span className="text-amber-500">Solutions</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group flex flex-col sm:flex-row rounded-none border border-slate-200 bg-white transition-all duration-300 hover:shadow-2xl hover:border-blue-900 overflow-hidden"
            >
              {/* Left: Icon Block (Industrial Navy) */}
              <div className="flex items-center justify-center bg-blue-900 sm:w-40 min-h-40 transition-colors duration-500 group-hover:bg-amber-500">
                <service.icon className="h-10 w-10 text-amber-500 transition-colors duration-500 group-hover:text-white" />
              </div>

              {/* Right: Content */}
              <CardContent className="p-8 flex-1 relative">
                {/* ID Tag */}
                <span className="absolute top-4 right-6 text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                  {service.id}
                </span>

                <h3 className="text-xl font-black uppercase tracking-tighter text-blue-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Industrial Action Link */}
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-900 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0">
                  Detailed Specifications{" "}
                  <ArrowRight size={14} className="text-amber-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
