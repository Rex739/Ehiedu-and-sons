"use client"

import { motion } from "framer-motion"
import { Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fadeInUp, scrollContainer } from "@/lib/motion"

const reviews = [
  {
    quote:
      "De Ehiedu's handled our logistics with military precision. Their ability to navigate complex regulatory landscapes saved us months.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "MedLogix Global",
  },
  {
    quote:
      "The construction of our Lagos HQ was flawless. They didn't just build a structure; they engineered a landmark.",
    author: "Babatunde Alade",
    role: "CEO",
    company: "Horizon Estates",
  },
  {
    quote:
      "Their procurement network is unmatched. We sourced critical heavy machinery at 20% below market rate.",
    author: "Michael Chen",
    role: "Head of Infrastructure",
    company: "Urban-Dev Corp",
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-24 bg-blue-900 text-white relative overflow-hidden"
      aria-labelledby="test-heading"
    >
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
              <Quote size={24} className="rotate-180" aria-hidden="true" />
              <span className="font-bold uppercase tracking-widest text-sm">
                Client Voices
              </span>
            </div>
            <h2
              id="test-heading"
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
            >
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
          {reviews.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeInUp}
              className="bg-blue-800/50 p-8 border border-blue-700 hover:border-amber-500 transition-colors"
            >
              <blockquote className="text-lg leading-relaxed text-blue-100 italic mb-8">
                &quot;{t.quote}&quot;
              </blockquote>
              <figcaption className="border-t border-blue-700 pt-6">
                <cite className="not-italic font-bold uppercase tracking-wide text-white block">
                  {t.author}
                </cite>
                <p className="text-sm text-amber-500 font-medium mt-1">
                  {t.role}
                </p>
                <p className="text-xs text-blue-300 mt-1 uppercase tracking-wider">
                  {t.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
