"use client"

import { Button } from "@/components/ui/button"
import { fadeInUp, scaleIn } from "@/lib/motion"
import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <section
      className="container mx-auto py-24 px-4"
      aria-labelledby="cta-heading"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleIn}
        className="bg-slate-50 border-2 border-slate-200 p-12 md:p-20 text-center space-y-8 flex flex-col items-center shadow-lg"
      >
        <motion.h2
          variants={fadeInUp}
          id="cta-heading"
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
            size="lg"
            className="px-12 h-16 rounded-none font-bold uppercase tracking-[0.2em] text-lg shadow-lg"
          >
            Get a Quote
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 font-bold uppercase tracking-[0.2em] text-lg"
          >
            Download Brochure
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
