"use client"

import { motion, Variants } from "framer-motion"

export default function HospitalityHero() {
  // A high-end, luxury resort image with clean lines and warm lighting
  const hospitalityBg =
    "https://res.cloudinary.com/dcxghlgre/image/upload/v1770529187/DeEhiedu%27s/986c753e-7f2e-450d-9e35-0e4fb78dd2e2.png"

  // --- ANIMATION VARIANTS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  }

  const heroContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
      },
    },
  }

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image Container - Slow Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${hospitalityBg})` }}
        >
          {/* Overlay: Using a Blue-tinted dark overlay at low opacity */}
          <div className="absolute inset-0 bg-blue-900/30 backdrop-brightness-75" />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroContainer}
        className="container mx-auto relative z-10 text-center text-white px-4"
      >
        {/* Elite Branding with Amber Accent */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-light tracking-[0.3em] mb-6"
        >
          ELITE <span className="italic text-amber-400">STAYS</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed tracking-wide"
        >
          Hotels, Resorts, and Event Centers curated for the discerning
          traveler.
        </motion.p>

        {/* The decorative line - Grows Downwards */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-8"
        >
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 96, opacity: 1 }} // 96px = h-24
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            className="w-px bg-linear-to-b from-amber-500 via-white to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
