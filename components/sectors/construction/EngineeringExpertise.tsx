"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Factory,
  Construction,
  Waves,
  ArrowUpRight,
} from "lucide-react"
import { motion, Variants } from "framer-motion"

const expertise = [
  {
    title: "Vertical Construction",
    desc: "Precision engineering for high-rise residential complexes, commercial towers, and multi-functional institutional structures.",
    icon: Building2,
    id: "01",
  },
  {
    title: "Civil Infrastructure",
    desc: "Large-scale construction of roads, bridges, and specialized structural works designed for long-term urban durability.",
    icon: Construction,
    id: "02",
  },
  {
    title: "Industrial Facilities",
    desc: "Development of massive factories, warehouses, and industrial plants with customized structural load requirements.",
    icon: Factory,
    id: "03",
  },
  {
    title: "Drainage Systems",
    desc: "Comprehensive civil works for urban drainage and industrial water management systems using advanced flow engineering.",
    icon: Waves,
    id: "04",
  },
]

// --- OPTIMIZED VARIANTS ---
// We use simple transforms (y) and opacity which are cheap for the browser to render.
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20, // Reduced movement distance to reduce paint area
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Simple easing is faster to calculate than complex springs
    },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Short stagger to keep the UI feeling responsive
      delayChildren: 0.1,
    },
  },
}

export function EngineeringExpertise() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500"
          >
            Expertise & Capabilities
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl"
          >
            Core <span className="text-amber-500">Competencies</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-1.5 w-24 bg-blue-900 mx-auto mt-4 origin-center"
          />
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true, // Critical for performance: only animates once
            margin: "-50px", // Triggers slightly before element is fully in view
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200"
        >
          {expertise.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card className="group relative rounded-none border-r border-b border-slate-200 bg-white p-4 transition-all duration-300 hover:bg-slate-50 shadow-none border-t-0 border-l-0 h-full">
                {/* Subtle Numeric Identifier */}
                <div className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-amber-500/10 transition-colors">
                  {item.id}
                </div>

                <CardHeader className="pt-8">
                  {/* Industrial Icon Box */}
                  <div className="w-16 h-16 bg-blue-900 flex items-center justify-center mb-6 shadow-xl transition-transform duration-300 group-hover:scale-110 will-change-transform">
                    <item.icon className="h-8 w-8 text-amber-500" />
                  </div>

                  <CardTitle className="text-xl font-black uppercase tracking-tight text-blue-900 leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-12">
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Decorative CTA Element */}
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-900 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Engineering Standards{" "}
                    <ArrowUpRight size={14} className="text-amber-500" />
                  </div>
                </CardContent>

                {/* Signature Bottom Amber Line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
