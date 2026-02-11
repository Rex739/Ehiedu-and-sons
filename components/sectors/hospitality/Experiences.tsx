"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { motion, Variants } from "framer-motion"

export default function Experiences() {
  // Stable, high-resolution luxury resort pool for hospitality context
  const experienceImage =
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"

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
        delayChildren: 0.2,
      },
    },
  }

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  }

  return (
    <section className="bg-white border-y border-slate-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Visual Experience (Scale In Reveal) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
          className="relative h-100 lg:h-auto overflow-hidden group min-h-125"
        >
          <Image
            src={experienceImage}
            alt="Luxury Resort Hospitality"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            unoptimized
          />
          {/* Subtle Blue/Amber Tint Overlay */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50" />
          <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent lg:hidden" />
        </motion.div>

        {/* Right Side: Service Standards (Staggered Content) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="p-12 lg:p-24 flex flex-col justify-center space-y-8 bg-white"
        >
          <div className="space-y-4">
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <div className="h-1 w-12 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
                Hospitality Excellence
              </span>
            </motion.div>

            <motion.h3
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-blue-900 leading-none"
            >
              Unparalleled <br />
              <span className="text-amber-500">Service Standards</span>
            </motion.h3>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-500 leading-relaxed font-medium"
          >
            Our management philosophy centers on &quot;The Guest First.&quot;
            Whether it&apos;s the concierge at our guest houses or the culinary
            team in our boutique restaurants, every detail is meticulously
            handled to ensure a seamless tourism experience.
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              "24/7 Guest Support",
              "Bespoke Event Planning",
              "Curated Tourism Tours",
              "VIP Logistics",
            ].map((item) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-900"
              >
                <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp} className="pt-4">
            <button className="px-8 py-4 bg-blue-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors rounded-none shadow-lg">
              Explore Locations
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
