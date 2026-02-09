"use client"

import { Globe2, MapPin, Navigation } from "lucide-react"
import { motion, Variants } from "framer-motion"

export function GlobalNetwork() {
  const regions = [
    {
      label: "Africa",
      stats: "Active presence in 12+ countries",
      details:
        "Regional headquarters and localized distribution hubs for rapid fulfillment.",
    },
    {
      label: "Asia/Europe",
      stats: "Direct Tier-1 Manufacturer Ties",
      details:
        "Strategic partnerships in China, Germany, and India for industrial machinery and medical tech.",
    },
    {
      label: "Americas",
      stats: "Advanced Procurement Channels",
      details:
        "Verified sourcing for specialized heavy equipment and pharmaceutical assets.",
    },
  ]

  // --- ANIMATION VARIANTS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const float: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Side: Regional Authority (Staggered List) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex-1 space-y-10"
          >
            <div className="space-y-4">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <div className="h-1 w-12 bg-amber-500" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
                  Trade Footprint
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-blue-900 leading-[0.9]"
              >
                Global Sourcing <br />
                <span className="text-amber-500">Infrastructure</span>
              </motion.h2>
            </div>

            <div className="grid gap-8">
              {regions.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  className="group border-l-4 border-slate-100 hover:border-amber-500 pl-8 py-2 transition-all duration-500"
                >
                  <h4 className="font-black text-2xl uppercase tracking-tight text-blue-900">
                    {item.label}
                  </h4>
                  <p className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-2">
                    {item.stats}
                  </p>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Technical Map/Globe Visual (Scale Up) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="w-full aspect-square bg-slate-50 flex items-center justify-center relative shadow-inner overflow-hidden border border-slate-100">
              {/* Technical Grid Overlay */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <Globe2 className="h-48 w-48 text-slate-200" />

              {/* Animated Connection Rings */}
              <div className="absolute inset-12 border-2 border-dashed border-amber-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-24 border border-blue-900/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

              {/* Floating Data Point Markers */}
              <motion.div
                variants={float}
                animate="animate"
                className="absolute top-1/4 right-1/4 p-2 bg-blue-900 text-amber-500 shadow-xl"
              >
                <MapPin size={16} />
              </motion.div>

              <motion.div
                variants={float}
                animate="animate"
                transition={{ delay: 1 }} // Offset animation
                className="absolute bottom-1/3 left-1/4 p-2 bg-amber-500 text-blue-900 shadow-xl"
              >
                <Navigation size={16} className="rotate-45" />
              </motion.div>

              <motion.div
                variants={float}
                animate="animate"
                transition={{ delay: 2 }} // Offset animation
                className="absolute top-1/2 left-2/3 p-2 bg-slate-800 text-white shadow-xl"
              >
                <MapPin size={16} />
              </motion.div>

              {/* Bottom Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 bg-white border border-slate-200 px-6 py-3 shadow-2xl"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900">
                  Network Status: <span className="text-green-500">Live</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
