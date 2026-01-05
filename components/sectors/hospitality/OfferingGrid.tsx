import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Bed, Martini, PartyPopper, Plus } from "lucide-react"

const offerings = [
  {
    title: "Luxury Hotels & Resorts",
    desc: "Premium accommodations designed for ultimate comfort and cultural immersion.",
    icon: Bed,
  },
  {
    title: "Event Centers",
    desc: "State-of-the-art facilities for conferences, weddings, and high-profile corporate galas.",
    icon: PartyPopper,
  },
  {
    title: "Gourmet Restaurants",
    desc: "A refined fusion of local flavors and international culinary excellence.",
    icon: Utensils,
  },
  {
    title: "Exclusive Lounges",
    desc: "Sophisticated social spaces engineered for elite networking and relaxation.",
    icon: Martini,
  },
]

export default function OfferingsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-200 shadow-2xl">
      {offerings.map((item) => (
        <Card
          key={item.title}
          className="rounded-none border-none border-r border-b border-slate-200 bg-white transition-all duration-500 group relative overflow-hidden"
        >
          {/* Subtle Background Icon Accent */}
          <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-12">
            <item.icon size={120} className="text-blue-900" />
          </div>

          <CardContent className="pt-12 pb-16 px-8 text-center space-y-6 relative z-10">
            {/* Industrial Icon Box */}
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-900 shadow-lg group-hover:bg-amber-500 transition-colors duration-500">
              <item.icon className="h-7 w-7 text-amber-500 group-hover:text-white transition-colors duration-500" />
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-black uppercase tracking-tighter text-blue-900 leading-tight">
                {item.title}
              </h4>
              <div className="h-1 w-8 bg-amber-500 mx-auto transition-all duration-500 group-hover:w-16" />
            </div>

            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-50 mx-auto">
              {item.desc}
            </p>

            {/* Subtle Interactive Element */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <Plus className="text-amber-500 h-5 w-5" />
            </div>
          </CardContent>

          {/* Hover Border Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Card>
      ))}
    </div>
  )
}
