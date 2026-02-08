"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Building2, Home, Map, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function PropertyTypes() {
  const propertyContent = [
    {
      value: "residential",
      icon: <Home className="w-4 h-4 mr-2" />,
      title: "Luxury Homes & Apartments",
      description:
        "De Ehiedu's develops high-end residential estates that prioritize security, sustainability, and modern aesthetics for families and urban professionals.",
      image:
        "https://res.cloudinary.com/dcxghlgre/image/upload/v1770536643/DeEhiedu%27s/106144c2-1dc6-499f-afd5-9a0172e8829a.png",
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
        "https://res.cloudinary.com/dcxghlgre/image/upload/v1770536589/DeEhiedu%27s/cbcda69e-f6b7-4ea1-8f1f-57e4da56c6de.png",
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
        "https://res.cloudinary.com/dcxghlgre/image/upload/v1770536667/DeEhiedu%27s/1f01f2c3-6bb8-463b-a8b7-3935f0837b8c.png",
      features: ["Verified Titles", "Topographic Surveys", "Fast Appreciation"],
    },
  ]

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-5xl mb-4">
            Our Portfolio <span className="text-amber-500">Scope</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mb-6" />
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Discover our diverse range of real estate solutions tailored to the
            needs of the modern investor.
          </p>
        </motion.div>

        <Tabs defaultValue="residential" className="w-full">
          <TabsList className="flex h-auto w-full max-w-2xl bg-slate-50 p-1 rounded-none border border-slate-200 mb-8">
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

          {/* Animated Tab Content */}
          <div className="min-h-100">
            {propertyContent.map((item) => (
              <TabsContent key={item.value} value={item.value} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white border border-slate-200 rounded-none shadow-xl ring-0"
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
                        {item.features.map((feature, i) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="text-amber-500 h-5 w-5" />
                            <span className="font-bold uppercase tracking-wide text-xs text-blue-900">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
