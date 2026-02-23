"use client"

import { motion } from "framer-motion"
import { SectorCard } from "@/components/sectors/SectorCard"
import { sectors } from "@/lib/config/services"
import { fadeInUp, scrollContainer } from "@/lib/motion"

export default function SectorsGrid() {
  return (
    <section className="py-24 bg-white" aria-labelledby="sectors-heading">
      <div className="container mx-auto px-4 space-y-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1,
              }}
              variants={fadeInUp}
            >
              <SectorCard sector={sector} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
