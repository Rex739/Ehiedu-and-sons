"use client"

import { Button } from "@/components/ui/button"
import { Home, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

export default function HeroSection() {
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
        delayChildren: 0.2, // Small delay allows background to settle
      },
    },
  }

  return (
    <header className="relative h-[85vh] min-h-150 flex items-center overflow-hidden bg-slate-100">
      {/* 1. BACKGROUND OPTIMIZATION */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="https://res.cloudinary.com/dcxghlgre/image/upload/v1770529166/DeEhiedu%27s/b1d9c963-5b25-40aa-84bd-17b1c54b8165.png"
          alt="" // Decorative image, alt is empty for screen readers as context is in H1
          className="h-full w-full object-cover"
          priority // Critical for LCP: Tells Next.js to load this immediately
          fill
          sizes="100vw"
          quality={90}
        />
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-950/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="max-w-4xl space-y-8"
        >
          {/* Badge Label */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white/10 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white shadow-sm"
          >
            <Home className="mr-3 h-4 w-4 text-amber-500" aria-hidden="true" />
            <span>De Ehiedu&apos;s Real Estate Division</span>
          </motion.div>

          {/* Main H1 Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-blue-50 text-balance uppercase leading-[0.85]"
          >
            Redefining <br />
            <span className="text-amber-500">Modern Living</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-blue-100/90 max-w-xl leading-relaxed lg:border-l-2 lg:border-amber-500/50 lg:pl-6 font-medium text-pretty"
          >
            Strategic Development, Professional Management, and Acquisition of
            Prime Landed Properties across Global Markets.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <Button
              variant="amber"
              size="lg"
              asChild
              className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-xl focus-visible:ring-4 focus-visible:ring-amber-500"
            >
              <Link
                href="/listings"
                aria-label="View available property listings"
              >
                View Listings
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
            >
              <Link href="/developments">Our Developments</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Animated Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
        className="absolute bottom-0 left-0 w-full h-1.5 bg-amber-500 origin-left"
        aria-hidden="true"
      />
    </header>
  )
}
