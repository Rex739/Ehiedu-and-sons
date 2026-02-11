"use client"

import { motion, Variants } from "framer-motion"
import Experiences from "@/components/sectors/hospitality/Experiences"
import HospitalityHero from "@/components/sectors/hospitality/Hero"
import OfferingsGrid from "@/components/sectors/hospitality/OfferingGrid"
import { Button } from "@/components/ui/button"
import { CalendarDays, UtensilsCrossed } from "lucide-react"

// --- CONSISTENT ANIMATION VARIANTS ---
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


export default function HospitalityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION (Handles its own animation) */}
      <HospitalityHero />

      {/* 2. CORE OFFERINGS OVERVIEW */}
      <section className="container mx-auto py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-0.5 w-8 bg-amber-500" />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-900">
              World-Class Hospitality
            </h2>
            <div className="h-0.5 w-8 bg-amber-500" />
          </motion.div>

          <motion.h3
            variants={fadeInUp}
            className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl leading-[0.9]"
          >
            Where Luxury Meets <br />
            <span className="text-amber-500">Global Standards</span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            From serene resorts to vibrant urban lounges, we manage a portfolio
            of spaces designed for unforgettable moments and operational
            excellence.
          </motion.p>
        </motion.div>

        {/* OfferingsGrid component handles its own internal animation */}
        <OfferingsGrid />
      </section>

      {/* 3. EXPERIENCES SECTION (Full-width Split Layout) */}
      <Experiences />

      {/* 4. RESERVATION CTA (High-Impact Brand Anchor) */}
      <section className="relative py-24 overflow-hidden bg-blue-900">
        {/* Subtle Branding Watermark */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 0.05, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 pointer-events-none"
        >
          <UtensilsCrossed size={500} className="text-white" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto text-center relative z-10 px-4 space-y-10"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md mb-2"
          >
            <CalendarDays className="h-10 w-10 text-amber-500" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Plan Your Next <br />
            <span className="text-amber-500">Experience</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-xl mx-auto text-blue-100 text-lg font-medium uppercase tracking-widest leading-relaxed"
          >
            Whether it&apos;s a corporate retreat, a luxury stay, or a private
            event, our hospitality team is ready to curate your perfect
            itinerary.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-6 pt-6"
          >
            <Button
              size="lg"
              variant="amber"
              className="h-16 px-12 rounded-none font-bold uppercase tracking-[0.2em] text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Book a Stay
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-16 px-12 rounded-none border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-bold uppercase tracking-[0.2em] text-lg transition-all"
            >
              Inquire for Events
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-12 pt-12 border-t border-white/10 max-w-2xl mx-auto"
          >
            {[
              { label: "Service", value: "5-Star" },
              { label: "Security", value: "Verified" },
              { label: "Cuisine", value: "Global" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-white font-black text-xl tracking-tighter uppercase">
                  {stat.value}
                </p>
                <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
