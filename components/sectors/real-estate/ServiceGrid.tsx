import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building,
  Key,
  Landmark,
  Layout,
  SearchCheck,
  ArrowUpRight,
} from "lucide-react"

const reServices = [
  {
    title: "Property Development",
    desc: "End-to-end development of residential and commercial estates with a focus on modern structural integrity.",
    icon: Building,
    id: "01",
  },
  {
    title: "Asset Management",
    desc: "Professional management of properties to ensure maximum ROI and long-term facility maintenance.",
    icon: Key,
    id: "02",
  },
  {
    title: "Sales & Acquisitions",
    desc: "Expert guidance in buying, selling, and leasing landed properties with verified legal titles.",
    icon: Landmark,
    id: "03",
  },
  {
    title: "Valuation Services",
    desc: "Accurate market valuations for residential, commercial, and industrial assets using global standards.",
    icon: SearchCheck,
    id: "04",
  },
  {
    title: "Estate Consultancy",
    desc: "Strategic advisory for large-scale real estate investments and portfolio diversification.",
    icon: Layout,
    id: "05",
  },
]

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
      {reServices.map((s) => (
        <Card
          key={s.title}
          className="group relative rounded-none border-r border-b border-slate-200 bg-white p-4 transition-all duration-300 hover:bg-slate-50"
        >
          {/* Service ID - Subtle Amber Accent */}
          <div className="absolute top-6 right-8 text-4xl font-black text-slate-100 group-hover:text-amber-500/20 transition-colors">
            {s.id}
          </div>

          <CardHeader className="pt-8">
            {/* Icon Box: Navy Background with Amber Icon */}
            <div className="w-14 h-14 bg-blue-900 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <s.icon className="h-7 w-7 text-amber-500" />
            </div>

            <CardTitle className="text-xl font-black uppercase tracking-tight text-blue-900 group-hover:text-amber-600 transition-colors">
              {s.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="pb-12">
            <p className="text-slate-500 font-medium leading-relaxed mb-6">
              {s.desc}
            </p>

            {/* Industrial "Learn More" link style */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-900 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
              View Details <ArrowUpRight size={14} className="text-amber-500" />
            </div>
          </CardContent>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
        </Card>
      ))}

      {/* Empty CTA Card to fill the grid (Optional) */}
      <div className="flex flex-col items-center justify-center bg-blue-900 p-8 text-center border-r border-b border-slate-200">
        <h3 className="text-xl font-black uppercase text-white mb-4">
          Request a Consultation
        </h3>
        <p className="text-blue-200 text-sm mb-6 uppercase tracking-wider font-bold">
          Speak with our experts today
        </p>
        <Button  variant="amber" className="bg-amber-500 text-blue-900 font-black uppercase text-xs tracking-[0.2em] py-4 px-8 hover:bg-white transition-colors rounded-none">
          Contact Us
        </Button>
      </div>
    </div>
  )
}
