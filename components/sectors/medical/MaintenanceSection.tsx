"use client"

import {
  CheckCircle2,
  Settings,
  ShieldCheck,
  Clock,
  PenTool,
} from "lucide-react"
import { motion, Variants } from "framer-motion"

export function MaintenanceSection() {
  const maintenanceFeatures = [
    "Regular Preventive Maintenance (PM)",
    "Emergency On-call Technical Support",
    "Spare Parts Sourcing & Replacement",
    "User Training & Safety Workshops",
    "Equipment Calibration & Certification",
  ]

  // --- ANIMATION VARIANTS ---
  const smoothOptions = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1] as const,
  }

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: smoothOptions,
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-20 items-center"
        >
          {/* Left Side: Service Description */}
          <div className="flex-1 space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
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
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-blue-100 text-xl font-medium leading-relaxed max-w-xl"
            >
              De Ehiedu&apos;s doesn&apos;t just supply; we ensure your clinical
              equipment performs at peak accuracy for years. Our technical
              contracts are engineered to eliminate downtime.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8"
            >
              {maintenanceFeatures.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold uppercase tracking-wide text-white">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Side: High-Impact Stat Blocks */}
          <motion.div
            variants={staggerContainer}
            className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Block 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500 transition-colors duration-500"
            >
              <ShieldCheck className="h-8 w-8 text-amber-500 mb-4 group-hover:text-blue-900 transition-colors" />
              <span className="text-4xl font-black text-white group-hover:text-blue-900 tracking-tighter transition-colors">
                99.9%
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mt-2 group-hover:text-blue-900 transition-colors">
                Uptime Guarantee
              </span>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500 transition-colors duration-500"
            >
              <Clock className="h-8 w-8 text-amber-500 mb-4 group-hover:text-blue-900 transition-colors" />
              <span className="text-4xl font-black text-white group-hover:text-blue-900 tracking-tighter transition-colors">
                24/7
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mt-2 group-hover:text-blue-900 transition-colors">
                Technical Support
              </span>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500 transition-colors duration-500"
            >
              <Settings className="h-8 w-8 text-amber-500 mb-4 group-hover:text-blue-900 transition-colors" />
              <span className="text-4xl font-black text-white group-hover:text-blue-900 tracking-tighter transition-colors">
                ISO
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mt-2 group-hover:text-blue-900 transition-colors">
                Calibration Standards
              </span>
            </motion.div>

            {/* Block 4 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center group hover:bg-amber-500 transition-colors duration-500"
            >
              <PenTool className="h-8 w-8 text-amber-500 mb-4 group-hover:text-blue-900 transition-colors" />
              <span className="text-4xl font-black text-white group-hover:text-blue-900 tracking-tighter transition-colors">
                100%
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mt-2 group-hover:text-blue-900 transition-colors">
                OEM Spare Parts
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
