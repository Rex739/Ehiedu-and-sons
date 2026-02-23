"use client"

import { Button } from "@/components/ui/button"
import { Microscope, ArrowRight, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import Link from "next/link"

export function MedicalHero() {
  // A clean, high-tech laboratory or clinical environment image
  const medicalBg =
    "https://res.cloudinary.com/dcxghlgre/image/upload/v1770529234/DeEhiedu%27s/4d0980ea-1252-43c4-9301-25bbebec325b.png"

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
    <section className="relative h-[75vh] min-h-150 flex items-center overflow-hidden bg-white">
      {/* 1. Background Image & Clinical Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={medicalBg}
          alt="Advanced Healthcare Infrastructure"
          className="h-full w-full object-cover"
          loading="eager"
          fill
          unoptimized
        />
        {/* Dark gradient overlay for text clarity */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/90 to-blue-950/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="max-w-4xl space-y-8"
        >
          {/* Industrial Badge - Hard Edged */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-white shadow-sm"
          >
            <Microscope className="mr-2 h-4 w-4 text-amber-500" />
            Healthcare Support & Logistics
          </motion.div>

          {/* Headline - Bold Industrial Typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-blue-100 uppercase leading-[0.9]"
          >
            Advanced <br />
            <span className="text-amber-500">Logistics</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 max-w-xl leading-relaxed lg:border-l-2 lg:border-blue-200 lg:pl-6 font-medium"
          >
            Expert supply, installation, and maintenance of medical equipment,
            facility design, and specialized medical waste management.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="#medical_services" >
              <Button
                variant="amber"
                size="lg"
                className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-lg"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
            >
              Technical Profile
            </Button>
          </motion.div>

          {/* Compliance Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-6 pt-4 text-slate-300"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-amber-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                WHO Compliant
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-amber-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                ISO Certified Logistics
              </span>
            </div>
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
