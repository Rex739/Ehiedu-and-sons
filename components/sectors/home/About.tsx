"use client"

import { motion, Variants } from "framer-motion"
import { Quote, ShieldCheck, Trophy } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const ceoImage =
    "https://res.cloudinary.com/dcxghlgre/image/upload/v1770805964/DeEhiedu%27s/11701ed0-78a5-465e-adb6-f503d60c09f1.png"

  // --- ANIMATION VARIANTS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT SIDE: Company Narrative */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <div className="h-1 w-12 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter leading-[0.9]"
            >
              Building Legacies <br />
              <span className="text-amber-500">Across Industries</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-500 font-medium leading-relaxed border-l-2 border-slate-200 pl-6"
            >
              De Ehiedu&apos;s is more than a conglomerate; we are architects of
              innovation. From constructing skylines to streamlining global
              supply chains, our mission is to deliver excellence with
              unwavering integrity.
            </motion.p>

            {/* Stats / Trust Badges */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              <div className="bg-white p-6 border-b-4 border-amber-500 shadow-sm">
                <Trophy className="h-8 w-8 text-blue-900 mb-3" />
                <h4 className="text-3xl font-black text-slate-900">10+</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Years Excellence
                </p>
              </div>
              <div className="bg-white p-6 border-b-4 border-blue-900 shadow-sm">
                <ShieldCheck className="h-8 w-8 text-amber-500 mb-3" />
                <h4 className="text-3xl font-black text-slate-900">100%</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Project Completion
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: CEO Profile */}
          <motion.div variants={fadeInUp} className="relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-100/50 -z-10 translate-x-8 -translate-y-8" />

            <div className="relative z-10 md:mb-0 mb-12">
              {" "}
              {/* Added margin-bottom for mobile spacing */}
              {/* Image Container */}
              <div className="relative aspect-4/5 w-full max-w-md mx-auto lg:mx-0 overflow-hidden shadow-2xl border-b-8 border-amber-500">
                <div className="relative w-full h-full">
                  <Image
                    src={ceoImage}
                    alt="CEO of De Ehiedu's"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Modified Floating Quote Card */}
              {/* FIX: Changed from absolute (all screens) to relative (mobile) / absolute (desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="
                  relative w-[90%] mx-auto -mt-12 z-20 
                  md:absolute md:bottom-6 md:-left-10 md:w-auto md:max-w-xs md:mt-0 md:mx-0
                  bg-blue-950 p-8 shadow-2xl border-t-4 border-amber-500
                "
              >
                {/* Decorative Watermark */}
                <Quote className="absolute top-4 right-4 h-12 w-12 text-white/5 rotate-180" />

                <p className="relative z-10 text-slate-300 text-sm font-medium italic leading-relaxed mb-6">
                  &quot;Our vision is simple: to create value that outlasts us.
                  Whether it&apos;s a building foundation or a trade agreement,
                  we build it to stand the test of time.&quot;
                </p>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="h-0.5 w-8 bg-amber-500/50" />
                  <div>
                    <h4 className="text-white font-black uppercase tracking-tight text-lg leading-none">
                      Obihia E. Ehiedu, <span className="normal-case">phD</span>
                    </h4>
                    <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
