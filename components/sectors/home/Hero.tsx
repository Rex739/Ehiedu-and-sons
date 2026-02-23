"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeInUp, heroContainer } from "@/lib/motion"



export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dcxghlgre/image/upload/v1770459710/DeEhiedu%27s/424d25c8-3c6a-4c0a-8ec9-26876ca189e1.png"
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
          animate="visible"
          variants={heroContainer}
          className="max-w-4xl space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-white shadow-sm"
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
            A diversified conglomerate delivering excellence across Real Estate,
            Construction, Hospitality, Healthcare Logistics, and Global
            Procurement.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="amber"
              size="lg"
              asChild
              className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-md"
            >
              <Link href="mailto:contact@deehiedus.com">Partner With Us</Link>
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
  )
}

 