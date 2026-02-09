"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

export function ProcurementHero() {
  // A high-quality image of global maritime/shipping logistics
  const procurementBg =
    "https://res.cloudinary.com/dcxghlgre/image/upload/v1770529219/DeEhiedu%27s/aa5c00e4-23e1-4b62-8958-16615378ba74.png"

  // --- ANIMATION VARIANTS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  }

  const heroContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0, // Immediate start
      },
    },
  }

  return (
    <section className="relative h-[75vh] min-h-150 flex items-center overflow-hidden bg-slate-100">
      {/* 1. Background Image & Light Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={procurementBg}
          alt="Global Procurement Logistics"
          className="h-full w-full object-cover"
          loading="eager"
          fill
          unoptimized
        />
        {/* High-contrast white gradient to keep text sharp */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/90 to-blue-950/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="max-w-3xl space-y-8"
        >
          {/* Industrial Badge - Hard Edged */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-white shadow-sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4 text-amber-500" />
            Supply Chain & General Contracts
          </motion.div>

          {/* Headline - Bold Industrial Typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-blue-100 uppercase leading-[0.9]"
          >
            Reliable <br />
            <span className="text-amber-500">Procurement</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 max-w-xl leading-relaxed border-l-2 border-blue-200 pl-6 font-medium"
          >
            Importers, exporters, and merchants of law-permissible goods. We
            bridge the gap between global manufacturers and your local
            requirements.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              variant="amber"
              size="lg"
              className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
            >
              Partner Brands
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Brand Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
        className="absolute bottom-0 left-0 w-full h-2 bg-amber-500 origin-left"
      />
    </section>
  )
}
