"use client"

import { scrollContainer } from "@/lib/motion"
import { motion } from "framer-motion"

const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Global Partners", value: "120+" },
  { label: "Years Experience", value: "25+" },
  { label: "Safety Rating", value: "100%" },
]

export default function Stats() {
  return (
    <section className="border-y border-blue-100 bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-amber-500 pl-6">
              <p className="text-4xl font-black text-blue-900 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
