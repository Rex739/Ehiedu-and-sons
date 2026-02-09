"use client"

import { motion, Variants } from "framer-motion"
import { GlobalNetwork } from "@/components/sectors/procurement/GlobalNetwork"
import { ProcurementHero } from "@/components/sectors/procurement/Hero"
import { SupplyChainGrid } from "@/components/sectors/procurement/SupplyChainGrid"
import { Button } from "@/components/ui/button"
import {
  Box,
  Globe2,
  Handshake,
  ShieldCheck,
  PackageSearch,
} from "lucide-react"

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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothOptions,
  },
}

export default function ProcurementPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION (Handles its own animation) */}
      <ProcurementHero />

      {/* 2. CORE MISSION SECTION */}
      <section className="container mx-auto py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center space-y-8 mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-0.5 w-12 bg-amber-500" />
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-900">
              Strategic Supply & Trade
            </h2>
            <div className="h-0.5 w-12 bg-amber-500" />
          </motion.div>

          <motion.h3
            variants={fadeInUp}
            className="text-4xl font-black tracking-tighter text-blue-900 uppercase md:text-7xl leading-[0.9]"
          >
            Gateway to <br />
            <span className="text-amber-500">Global Supply</span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            As general contractors and manufacturers&apos; representatives, we
            specialize in the procurement and supply of goods and services
            across borders. Our expertise in import/export logistics ensures
            that your business receives what it needs, when it needs it.
          </motion.p>
        </motion.div>

        {/* Technical Value Props Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200 shadow-xl"
        >
          {[
            {
              icon: Globe2,
              title: "Global Sourcing",
              desc: "Direct access to certified international manufacturers and tier-1 suppliers across continents.",
            },
            {
              icon: ShieldCheck,
              title: "Trade Compliance",
              desc: "Strict adherence to international trade laws, customs regulations, and ISO quality standards.",
            },
            {
              icon: Handshake,
              title: "Brand Representation",
              desc: "Acting as authorized agents and distributors for global industrial and commercial brands.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group flex flex-col items-center text-center p-12 bg-white border-r border-b border-slate-200 transition-all hover:bg-slate-50"
            >
              <div className="w-16 h-16 bg-blue-900 flex items-center justify-center mb-8 shadow-lg group-hover:bg-amber-500 transition-colors duration-500">
                <item.icon className="h-8 w-8 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-black text-xl uppercase tracking-tighter text-blue-900 mb-4">
                {item.title}
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. SUPPLY CHAIN GRID & NETWORK MAP (Self-Animated) */}
      <SupplyChainGrid />
      <GlobalNetwork />

      {/* 4. PARTNERSHIP CTA (Industrial Navy & Amber) */}
      <section className="container mx-auto py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-blue-900 rounded-none p-10 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative border-l-8 border-amber-500 shadow-2xl"
        >
          {/* Subtle Technical Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 space-y-6 max-w-2xl text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              className="inline-flex p-3 bg-amber-500 text-blue-900 mb-2"
            >
              <PackageSearch size={32} />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none"
            >
              Become a <br />{" "}
              <span className="text-amber-500">Strategic Partner</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-blue-100 text-lg md:text-xl font-medium uppercase tracking-wide leading-relaxed"
            >
              Are you a manufacturer looking for representation? Or a business
              in need of a reliable general contractor? Let’s streamline your
              procurement process today.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start"
            >
              <Button
                variant="amber"
                size="lg"
                className="h-16 px-10 rounded-none font-bold uppercase tracking-[0.2em] text-lg"
              >
                Submit Proposal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-10 rounded-none border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-bold uppercase tracking-[0.2em] text-lg transition-all"
              >
                Contact Sales
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            className="relative z-10 hidden lg:block"
          >
            <div className="relative">
              <Box className="h-64 w-64 text-amber-500 opacity-20 rotate-12 animate-pulse" />
              <Globe2 className="h-32 w-32 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
