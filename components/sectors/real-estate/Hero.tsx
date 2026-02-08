"use client"

import { Button } from "@/components/ui/button"
import { Home, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

export default function HeroSection() {
  // FIX: Added 'as const' here
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
        delayChildren: 0,
      },
    },
  }

  return (
    <section className="relative h-[75vh] min-h-150 flex items-center overflow-hidden bg-slate-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dcxghlgre/image/upload/v1770529166/DeEhiedu%27s/b1d9c963-5b25-40aa-84bd-17b1c54b8165.png"
          alt="Modern luxury real estate architecture"
          className="h-full w-full object-cover"
          loading="eager"
          fill
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-950/80 to-blue-950/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="max-w-3xl space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-white shadow-sm"
          >
            <Home className="mr-2 h-4 w-4 text-amber-500" />
            De Ehiedu&apos;s Real Estate Division
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-blue-100 uppercase leading-[0.9]"
          >
            Redefining <br />
            <span className="text-amber-500">Modern Living</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 max-w-xl leading-relaxed lg:border-l-2 lg:border-blue-200 lg:pl-6 font-medium"
          >
            Strategic Development, Professional Management, and Acquisition of
            Prime Landed Properties across Global Markets.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              variant="amber"
              size="lg"
              asChild
              className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-lg"
            >
              <Link href="/listings">
                View Listings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
            >
              Our Developments
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
        className="absolute bottom-0 left-0 w-full h-2 bg-amber-500 origin-left"
      />
    </section>
  )
}
