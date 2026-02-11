"use client"

import Image from "next/image"
import { ArrowUpRight, HardHat } from "lucide-react"
import { motion, Variants } from "framer-motion"

export function InfrastructureShowcase() {
  const projects = [
    {
      name: "Metropolitan Bridge Link",
      type: "Civil Engineering",
      image:
        "https://res.cloudinary.com/dcxghlgre/image/upload/v1770536571/DeEhiedu%27s/fc3c135c-36c9-4bda-aa58-2feefb00bfee.png",
    },
    {
      name: "Tech Hub Corporate Plaza",
      type: "Commercial Build",
      image:
        "https://res.cloudinary.com/dcxghlgre/image/upload/v1770536589/DeEhiedu%27s/cbcda69e-f6b7-4ea1-8f1f-57e4da56c6de.png",
    },
    {
      name: "Industrial Sector Expansion",
      type: "Infrastructure",
      image:
        "https://res.cloudinary.com/dcxghlgre/image/upload/v1770536615/DeEhiedu%27s/fe207a3e-700d-4f4e-b968-c7d391de3ff1.png",
    },
  ]

  // --- ANIMATION VARIANTS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-4">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 text-amber-500"
            >
              <HardHat size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Our Portfolio
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl"
            >
              Selected <span className="text-amber-500">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-slate-500 font-medium max-w-md border-l-2 border-amber-500 pl-6"
          >
            A showcase of our commitment to structural integrity and engineering
            excellence across diverse sectors.
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-slate-200">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }} // Trigger animation when card is 50px in view
              transition={{ delay: i * 0.1 }} // Simple manual stagger
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-none aspect-4/5 border-r border-b border-slate-200"
            >
              {/* Image with Industrial Blue Tint Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized // Fix mobile timeouts
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors duration-500" />
              </div>

              {/* Text Content Overlay */}
              <div className="absolute inset-0 z-10 bg-linear-to-t from-blue-950 via-blue-900/20 to-transparent p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-amber-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
                    {project.type}
                  </p>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-4">
                    {project.name}
                  </h3>

                  {/* Hover-only CTA */}
                  <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Case Study{" "}
                    <ArrowUpRight size={14} className="text-amber-500" />
                  </div>
                </div>
              </div>

              {/* Top Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white" size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
