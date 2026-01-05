import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Building2, Home, Map, CheckCircle2 } from "lucide-react"

export function PropertyTypes() {
  const propertyContent = [
    {
      value: "residential",
      icon: <Home className="w-4 h-4 mr-2" />,
      title: "Luxury Homes & Apartments",
      description:
        "De Ehiedu's develops high-end residential estates that prioritize security, sustainability, and modern aesthetics for families and urban professionals.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Gated Communities",
        "Smart Home Integration",
        "24/7 Power Supply",
      ],
    },
    {
      value: "commercial",
      icon: <Building2 className="w-4 h-4 mr-2" />,
      title: "Commercial & Office Spaces",
      description:
        "Strategically located commercial hubs designed for maximum operational efficiency, featuring flexible layouts for retail and corporate headquarters.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Prime Business Locations",
        "Ample Parking",
        "Modern Elevators",
      ],
    },
    {
      value: "land",
      icon: <Map className="w-4 h-4 mr-2" />,
      title: "Site Acquisition & Development",
      description:
        "We facilitate the acquisition of verified landed properties with clear titles, offering strategic consultancy for long-term property investment.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
      features: ["Verified Titles", "Topographic Surveys", "Fast Appreciation"],
    },
  ]

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-5xl mb-4">
            Our Portfolio <span className="text-amber-500">Scope</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mb-6" />
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Discover our diverse range of real estate solutions tailored to the
            needs of the modern investor.
          </p>
        </div>

        <Tabs defaultValue="residential" className="w-full">
          {/* Customized Tab Selection Bar */}
          <TabsList className="flex h-auto w-full max-w-2xl bg-slate-50 p-1 rounded-none border border-slate-200">
            {propertyContent.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="flex-1 py-4 text-xs font-bold uppercase tracking-widest rounded-none transition-all
                  data-[state=active]:bg-blue-900 data-[state=active]:text-white data-[state=active]:shadow-lg
                  data-[state=inactive]:text-slate-500 hover:text-blue-900"
              >
                {item.icon}
                {item.value}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content Areas */}
          {propertyContent.map((item) => (
            <TabsContent
              key={item.value}
              value={item.value}
              className="mt-8 bg-white border border-slate-200 rounded-none shadow-xl ring-0 focus-visible:ring-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10" />
                </div>

                {/* Right: Text Content */}
                <div className="p-8 lg:p-12 space-y-6">
                  <h3 className="text-3xl font-black uppercase tracking-tight text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  <div className="space-y-3 pt-4">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="text-amber-500 h-5 w-5" />
                        <span className="font-bold uppercase tracking-wide text-xs text-blue-900">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
