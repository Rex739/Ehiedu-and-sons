"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, Variants } from "framer-motion"
import Link from "next/link"
import {
  Building,
  Key,
  Landmark,
  Layout,
  SearchCheck,
  ArrowUpRight,
} from "lucide-react"

const reServices = [
  {
    title: "Property Development",
    desc: "End-to-end development of residential and commercial estates with a focus on modern structural integrity.",
    icon: Building,
    id: "01",
    href: "/services/development",
  },
  {
    title: "Asset Management",
    desc: "Professional management of properties to ensure maximum ROI and long-term facility maintenance.",
    icon: Key,
    id: "02",
    href: "/services/asset-management",
  },
  {
    title: "Sales & Acquisitions",
    desc: "Expert guidance in buying, selling, and leasing landed properties with verified legal titles.",
    icon: Landmark,
    id: "03",
    href: "/services/acquisitions",
  },
  {
    title: "Valuation Services",
    desc: "Accurate market valuations for residential, commercial, and industrial assets using global standards.",
    icon: SearchCheck,
    id: "04",
    href: "/services/valuation",
  },
  {
    title: "Estate Consultancy",
    desc: "Strategic advisory for large-scale real estate investments and portfolio diversification.",
    icon: Layout,
    id: "05",
    href: "/services/consultancy",
  },
]

export default function ServiceGrid() {
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200"
      role="list"
      aria-label="Real estate services"
    >
      {reServices.map((s, i) => (
        <motion.div
          key={s.title}
          role="listitem"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.05 }}
          variants={cardVariant}
        >
          <Link
            href={s.href}
            className="group block h-full focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-4 focus-visible:ring-amber-500"
          >
            <Card className="relative rounded-none border-r border-b border-slate-200 bg-white p-4 transition-all duration-300 group-hover:bg-slate-50 h-full overflow-hidden">
              {/* Service ID - aria-hidden because it's decorative duplication */}
              <div
                className="absolute top-6 right-8 text-4xl font-black text-slate-100 group-hover:text-amber-500/10 transition-colors pointer-events-none"
                aria-hidden="true"
              >
                {s.id}
              </div>

              <CardHeader className="pt-8">
                <div className="w-14 h-14 bg-blue-900 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300">
                  <s.icon
                    className="h-7 w-7 text-amber-500 group-hover:text-blue-900 transition-colors"
                    aria-hidden="true"
                  />
                </div>

                <CardTitle className="text-xl font-black uppercase tracking-tight text-blue-900 group-hover:text-amber-600 transition-colors">
                  {s.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-12">
                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Accessible Link Indicator */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-900 opacity-60 group-hover:opacity-100 transition-all transform translate-y-0 group-hover:translate-x-1">
                  Explore Service
                  <ArrowUpRight
                    size={14}
                    className="text-amber-500"
                    aria-hidden="true"
                  />
                </div>
              </CardContent>

              {/* Animated Progress Border */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </Card>
          </Link>
        </motion.div>
      ))}

      {/* 6th Slot: CTA Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.3 }}
        variants={cardVariant}
        className="flex flex-col items-center justify-center bg-blue-900 p-8 text-center border-r border-b border-slate-200 min-h-75"
      >
        <h3 className="text-xl font-black uppercase text-white mb-4">
          Request a <span className="text-amber-500">Consultation</span>
        </h3>
        <p className="text-blue-200 text-sm mb-8 uppercase tracking-widest font-bold">
          Speak with our experts today
        </p>
        <Button
          variant="amber"
          asChild
          className="bg-amber-500 text-blue-900 font-black uppercase text-xs tracking-[0.2em] py-6 px-10 hover:bg-white transition-colors rounded-none shadow-xl"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </motion.div>
    </div>
  )
}
