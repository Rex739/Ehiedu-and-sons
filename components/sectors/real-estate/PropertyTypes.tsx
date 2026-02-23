"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Building2, Home, Map, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function PropertyTypes() {
  const [activeTab, setActiveTab] = useState("residential")

  const propertyContent = [
    {
      value: "residential",
      icon: <Home className="w-4 h-4 mr-2" aria-hidden="true" />,
      title: "Luxury Homes & Apartments",
      description:
        "De Ehiedu's develops high-end residential estates that prioritize security, sustainability, and modern aesthetics.",
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
      icon: <Building2 className="w-4 h-4 mr-2" aria-hidden="true" />,
      title: "Commercial & Office Spaces",
      description:
        "Strategically located commercial hubs designed for maximum operational efficiency.",
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
      icon: <Map className="w-4 h-4 mr-2" aria-hidden="true" />,
      title: "Site Acquisition & Development",
      description:
        "We facilitate the acquisition of verified landed properties with clear titles.",
      image:
        "https://res.cloudinary.com/dcxghlgre/image/upload/v1770536667/DeEhiedu%27s/1f01f2c3-6bb8-463b-a8b7-3935f0837b8c.png",
      features: ["Verified Titles", "Topographic Surveys", "Fast Appreciation"],
    },
  ]

  const activeItem = propertyContent.find((item) => item.value === activeTab)

  return (
    <section
      className="bg-white py-24 border-t border-slate-100"
      aria-labelledby="portfolio-title"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <h2
            id="portfolio-title"
            className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-5xl mb-4"
          >
            Our Portfolio <span className="text-amber-500">Scope</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mb-6" aria-hidden="true" />
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 h-auto w-full max-w-2xl bg-slate-50 p-1 rounded-none border border-slate-200 mb-8">
            {propertyContent.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="py-4 text-xs font-bold uppercase tracking-widest data-[state=active]:bg-blue-900 data-[state=active]:text-white focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {item.icon} {item.value}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-125 relative">
            <AnimatePresence mode="wait">
              {activeItem && (
                <TabsContent
                  key={activeItem.value}
                  value={activeItem.value}
                  forceMount
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <article className="bg-white border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative h-72 lg:h-112.5">
                        <Image
                          src={activeItem.image}
                          alt={activeItem.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl font-black uppercase text-blue-900 mb-4">
                          {activeItem.title}
                        </h3>
                        <p className="text-lg text-slate-600 font-medium mb-6">
                          {activeItem.description}
                        </p>
                        <ul className="space-y-3">
                          {activeItem.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle2
                                className="text-amber-500 h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="font-bold uppercase tracking-wide text-xs text-blue-900">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </motion.div>
                </TabsContent>
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
