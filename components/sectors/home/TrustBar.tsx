"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Factory, Box, Building, Anchor, ShieldCheck } from "lucide-react"

export default function TrustBar({}) {
  const logos = [
    { icon: Factory, name: "Indus-Corp" },
    { icon: Box, name: "Logix-Global" },
    { icon: Building, name: "Urban-Dev" },
    { icon: Anchor, name: "Marine-Co" },
    { icon: ShieldCheck, name: "Apex-Security" },
  ]

  // Hook to detect if the user prefers reduced motion (accessibility best practice)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="bg-white py-12 border-b border-slate-100 overflow-hidden"
      aria-hidden="true"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400"
      >
        Trusted by Industry Leaders
      </motion.p>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center gap-24 py-4 whitespace-nowrap"
          animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex gap-24 items-center opacity-40 grayscale pr-24"
            >
              {logos.map((logo) => (
                <div key={logo.name} className="flex items-center gap-2">
                  <logo.icon size={32} />
                  <span className="text-xl font-black tracking-tighter uppercase">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
