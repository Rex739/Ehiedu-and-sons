"use client"

import { fadeInUp, scaleIn, scrollContainer } from "@/lib/motion"
import { motion } from "framer-motion"
import { ShieldCheck, Globe, Zap, CheckCircle2 } from "lucide-react"

const reasons = [
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
]

export default function WhyChooseUs() {
  return (
    <section
      className="bg-slate-50 py-24 border-y border-slate-200"
      aria-labelledby="why-heading"
    >
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
              id="why-heading"
              className="text-4xl font-black uppercase tracking-tighter lg:text-5xl text-blue-900"
            >
              Why Leaders <br />{" "}
              <span className="text-amber-500">Choose Us</span>
            </motion.h2>
            <div className="grid gap-8">
              {reasons.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <item.icon
                    className="h-10 w-10 text-blue-900 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-blue-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
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
            <div
              className="absolute top-0 left-0 w-2 h-full bg-amber-500"
              aria-hidden="true"
            />
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
                  <CheckCircle2
                    className="text-amber-500 h-5 w-5"
                    aria-hidden="true"
                  />
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
  )
}
