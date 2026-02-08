"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import { ArrowLeft, Construction, Home,  } from "lucide-react"

export default function NotFound() {
  // --- Animation Variants ---

  // FIX: Added 'as const' to fix the TypeScript error "number[] is not assignable..."
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

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-50 overflow-hidden text-center px-4">
      {/* 1. Background Texture (Blueprint Grid) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 max-w-2xl space-y-8"
      >
        {/* Icon Badge */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-none bg-blue-100 border-2 border-blue-200">
            <Construction className="h-10 w-10 text-blue-900" />
          </div>
        </motion.div>

        {/* 404 Text */}
        <motion.div variants={fadeInUp} className="space-y-2">
          <h1 className="text-8xl font-black tracking-tighter text-blue-900 lg:text-9xl">
            404
          </h1>
          <div className="h-2 w-24 bg-amber-500 mx-auto" />
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-blue-900">
            Blueprint Missing
          </h2>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
            The structural plan you are looking for has been moved, demolished,
            or never existed in our archives.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button
            asChild
            variant="amber"
            size="lg"
            className="h-14 w-full sm:w-auto px-8 rounded-none font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Return to Base
            </Link>
          </Button>

          {/* Updated Support Link */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 w-full sm:w-auto px-8 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest transition-all"
          >
            <Link href="mailto:contact@deehiedus.com">
              Contact Support
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Footer Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-blue-900 via-amber-500 to-blue-900" />
    </main>
  )
}
