"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  PenTool,
  Trash2,
  LayoutGrid,
  Thermometer,
  ArrowUpRight,
} from "lucide-react"
import { motion, Variants } from "framer-motion"

const services = [
  {
    title: "Hospital Design & Furnishing",
    desc: "Ergonomic and efficient facility planning to optimize patient flow and surgical precision.",
    icon: LayoutGrid,
    code: "MED-DSGN",
  },
  {
    title: "Equipment Installation",
    desc: "Precision setup and calibration of high-tier diagnostic, imaging, and surgical machinery.",
    icon: PenTool,
    code: "MED-INST",
  },
  {
    title: "Medical Waste Management",
    desc: "Safe, compliant disposal of hazardous biological materials and pharmaceutical waste.",
    icon: Trash2,
    code: "MED-WST",
  },
  {
    title: "Supply Chain Support",
    desc: "Strategic procurement and distribution of essential clinical consumables and hardware.",
    icon: Thermometer,
    code: "MED-SPLY",
  },
]

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export function SpecializedServices() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="h-1 w-12 bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
              Technical Scope
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl"
          >
            Specialized <span className="text-amber-500">Medical Services</span>
          </motion.h2>
        </div>

        {/* Technical Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-200"
        >
          {services.map((service, i) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <Card className="rounded-none border-none border-r border-b border-slate-200 bg-white transition-all duration-500 group relative overflow-hidden h-full shadow-none hover:shadow-xl hover:z-10">
                {/* Top Detail Bar */}
               <div className="absolute top-0 left-0 w-full h-1 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <CardHeader className="pt-12 pb-6 px-8 space-y-6">
                  {/* Industrial Icon Block */}
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-900 shadow-lg group-hover:bg-amber-500 transition-colors duration-500">
                    <service.icon className="h-6 w-6 text-amber-500 group-hover:text-white transition-colors duration-500" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                      {service.code}
                    </span>
                    <CardTitle className="text-xl font-black uppercase tracking-tighter text-blue-900 leading-tight group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-12">
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Action Indicator */}
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-900 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                    Service Specs{" "}
                    <ArrowUpRight size={14} className="text-amber-500" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
