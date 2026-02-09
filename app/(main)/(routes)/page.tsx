"use client"

import { motion, Variants } from "framer-motion"
import { SectorCard } from "@/components/sectors/SectorCard"
import { sectors } from "@/lib/config/services"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Globe,
  ShieldCheck,
  Zap,
  HardHat,
  Building,
  Anchor,
  Factory,
  Box,
  Quote,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const heroImage =
    "https://res.cloudinary.com/dcxghlgre/image/upload/v1770459710/DeEhiedu%27s/424d25c8-3c6a-4c0a-8ec9-26876ca189e1.png"

  // --- ANIMATION VARIANTS ---

  // 1. Hero Specific Container (Instant Start)
  const heroContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Smooth ripple
        delayChildren: 0, // <--- ZERO DELAY for Hero
      },
    },
  }

  // 2. Scroll Sections Container (Slight Delay for smoothness)
  const scrollContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1, // Keep delay for scroll sections so they don't pop in too aggressively
      },
    },
  }

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // Apple-style smooth curve
    },
  }

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Global Infrastructure Construction"
            className="h-full w-full object-cover"
            loading="eager"
            fill
            priority
            unoptimized
          />
          <div className="absolute inset-0  bg-linear-to-r from-blue-950 via-blue-950/90 to-blue-950/20" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible" // <--- CHANGED from 'whileInView' to 'animate' for instant load
            variants={heroContainer} // <--- CHANGED to 'heroContainer'
            className="max-w-4xl space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white shadow-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-blue-900"
            >
              <HardHat className="mr-2 h-4 w-4 text-amber-500" />
              industrial Engineering Solutions for 2026
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-black tracking-tighter text-blue-100 lg:text-8xl uppercase leading-[0.9]"
            >
              Building the Foundations of <br />
              <span className="text-amber-500">Global Progress</span> <br />
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 max-w-2xl leading-relaxed lg:border-l lg:border-blue-200 lg:pl-6 font-normal"
            >
              A diversified conglomerate delivering excellence across Real
              Estate, Construction, Hospitality, Healthcare Logistics, and
              Global Procurement.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                variant="amber"
                size="lg"
                asChild
                className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-md"
              >
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
              >
                Our Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="border-y border-blue-100 bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollContainer} // Use scrollContainer for rest of page
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Global Partners", value: "120+" },
              { label: "Years Experience", value: "25+" },
              { label: "Safety Rating", value: "100%" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="space-y-2 border-l border-amber-500 pl-6"
              >
                <p className="text-4xl font-black text-blue-900 tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST BAR (Infinite Scroll) */}
      <section className="bg-white py-12 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400"
          >
            Trusted by Industry Leaders
          </motion.p>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex items-center gap-24 py-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...Array(2)].map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="flex gap-24 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 pr-24"
              >
                <div className="flex items-center gap-2">
                  <Factory size={32} />{" "}
                  <span className="text-xl font-black tracking-tighter">
                    INDUS-CORP
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Box size={32} />{" "}
                  <span className="text-xl font-black tracking-tighter">
                    LOGIX-GLOBAL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={32} />{" "}
                  <span className="text-xl font-black tracking-tighter">
                    URBAN-DEV
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Anchor size={32} />{" "}
                  <span className="text-xl font-black tracking-tighter">
                    MARINE-CO
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={32} />{" "}
                  <span className="text-xl font-black tracking-tighter">
                    APEX-SECURITY
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CORE SECTORS GRID - Mobile Scroll Fix */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          {/* Header animates as a block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl">
                Our Business <span className="text-amber-500">Sectors</span>
              </h2>
              <div className="h-1.5 w-24 bg-amber-500" />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-500 max-w-md"
            >
              Specialized divisions committed to the highest standards of
              operational excellence.
            </motion.p>
          </motion.div>

          {/* Grid Container - No animation trigger here anymore */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <motion.div
                key={sector.id}
                // FIX: Trigger animation individually for each card
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true, // Run only once
                  margin: "-50px", // Start when card is 50px inside the screen
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.1, // Tiny delay so it doesn't feel robotic
                }}
                variants={fadeInUp}
              >
                <SectorCard sector={sector} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US - Granular List Animation */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scrollContainer}
              className="space-y-10"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-black uppercase tracking-tighter lg:text-5xl text-blue-900"
              >
                Why Leaders <br />{" "}
                <span className="text-amber-500">Choose Us</span>
              </motion.h2>
              <div className="grid gap-8">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Unmatched Reliability",
                    desc: "Strict adherence to safety and international engineering standards.",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    desc: "Seamless logistics and procurement across multiple continents.",
                  },
                  {
                    icon: Zap,
                    title: "End-to-End Efficiency",
                    desc: "Rapid project delivery without compromising structural integrity.",
                  },
                ].map((item, i) => (
                  <motion.div
                    variants={fadeInUp}
                    key={i}
                    className="flex gap-6 group"
                  >
                    <item.icon className="h-10 w-10 text-blue-900 shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-blue-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
              className="bg-white border-2 border-slate-200 p-10 relative shadow-xl"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
              <div className="space-y-6">
                {[
                  "ISO 9001 Certified",
                  "24/7 Logistics Monitoring",
                  "Regulatory Compliant",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 border-b border-slate-100 pb-4"
                  >
                    <CheckCircle2 className="text-amber-500 h-5 w-5" />
                    <span className="font-bold uppercase tracking-widest text-sm text-blue-900">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollContainer}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-2 text-amber-500 mb-2">
                <Quote size={24} className="rotate-180" />
                <span className="font-bold uppercase tracking-widest text-sm">
                  Client Voices
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Proven Results <br /> Across Industries
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                variant="outline"
                asChild
                className="text-blue-900 border-white hover:bg-white hover:text-blue-900 rounded-none uppercase tracking-widest font-bold group"
              >
                <Link href="/projects">
                  View Case Studies
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scrollContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                quote:
                  "De Ehiedu's handled our logistics with military precision. Their ability to navigate complex regulatory landscapes saved us months.",
                author: "Sarah Johnson",
                role: "Operations Director, MedLogix Global",
                company: "Healthcare Logistics",
              },
              {
                quote:
                  "The construction of our Lagos HQ was flawless. They didn't just build a structure; they engineered a landmark.",
                author: "Babatunde Alade",
                role: "CEO, Horizon Estates",
                company: "Real Estate Development",
              },
              {
                quote:
                  "Their procurement network is unmatched. We sourced critical heavy machinery at 20% below market rate thanks to their partnerships.",
                author: "Michael Chen",
                role: "Head of Infrastructure",
                company: "Urban-Dev Corp",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-blue-800/50 p-8 border border-blue-700 hover:border-amber-500 transition-colors group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, star) => (
                    <div
                      key={star}
                      className="w-2 h-2 bg-amber-500 rounded-full"
                    />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-blue-100 italic mb-8">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-blue-700 pt-6 group-hover:border-amber-500/30 transition-colors">
                  <h4 className="font-bold uppercase tracking-wide text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-amber-500 font-medium mt-1">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-blue-300 mt-1 uppercase tracking-wider">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="container mx-auto py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          className="bg-slate-50 border-2 border-slate-200 p-12 md:p-20 text-center space-y-8 flex flex-col items-center shadow-lg"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-black md:text-7xl text-blue-900 uppercase tracking-tighter"
          >
            Ready to Build?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-500 max-w-2xl font-bold uppercase tracking-wide"
          >
            Contact our specialized teams for consultancy or project management.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            <Button
              variant="amber"
              className="px-12 h-16 rounded-none font-bold uppercase tracking-[0.2em] text-lg border-2 border-transparent shadow-lg hover:shadow-xl transition-shadow"
            >
              Get a Quote
            </Button>
            <Button
              variant="outline"
              className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent font-bold uppercase tracking-[0.2em] text-lg transition-all"
            >
              Brochure
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
