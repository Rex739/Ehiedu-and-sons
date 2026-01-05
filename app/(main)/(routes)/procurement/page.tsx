import { GlobalNetwork } from "@/components/sectors/procurement/GlobalNetwork"
import { ProcurementHero } from "@/components/sectors/procurement/Hero"
import { SupplyChainGrid } from "@/components/sectors/procurement/SupplyChainGrid"
import { Button } from "@/components/ui/button"
import {
  Box,
  Globe2,
  Handshake,
  ShieldCheck,
  PackageSearch,
} from "lucide-react"

export default function ProcurementPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <ProcurementHero />

      {/* 2. CORE MISSION SECTION */}
      <section className="container mx-auto py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-12 bg-amber-500" />
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-blue-900">
              Strategic Supply & Trade
            </h2>
            <div className="h-0.5 w-12 bg-amber-500" />
          </div>

          <h3 className="text-4xl font-black tracking-tighter text-blue-900 uppercase md:text-7xl leading-[0.9]">
            Gateway to <br />
            <span className="text-amber-500">Global Supply</span>
          </h3>

          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            As general contractors and manufacturers&apos; representatives, we
            specialize in the procurement and supply of goods and services
            across borders. Our expertise in import/export logistics ensures
            that your business receives what it needs, when it needs it.
          </p>
        </div>

        {/* Technical Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200 shadow-xl">
          {[
            {
              icon: Globe2,
              title: "Global Sourcing",
              desc: "Direct access to certified international manufacturers and tier-1 suppliers across continents.",
            },
            {
              icon: ShieldCheck,
              title: "Trade Compliance",
              desc: "Strict adherence to international trade laws, customs regulations, and ISO quality standards.",
            },
            {
              icon: Handshake,
              title: "Brand Representation",
              desc: "Acting as authorized agents and distributors for global industrial and commercial brands.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-12 bg-white border-r border-b border-slate-200 transition-all hover:bg-slate-50"
            >
              <div className="w-16 h-16 bg-blue-900 flex items-center justify-center mb-8 shadow-lg group-hover:bg-amber-500 transition-colors duration-500">
                <item.icon className="h-8 w-8 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-black text-xl uppercase tracking-tighter text-blue-900 mb-4">
                {item.title}
              </h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SUPPLY CHAIN GRID & NETWORK MAP */}
      <SupplyChainGrid />
      <GlobalNetwork />

      {/* 4. PARTNERSHIP CTA (Industrial Navy & Amber) */}
      <section className="container mx-auto py-24 px-4">
        <div className="bg-blue-900 rounded-none p-10 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative border-l-8 border-amber-500 shadow-2xl">
          {/* Subtle Technical Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 space-y-6 max-w-2xl text-center lg:text-left">
            <div className="inline-flex p-3 bg-amber-500 text-blue-900 mb-2">
              <PackageSearch size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Become a <br />{" "}
              <span className="text-amber-500">Strategic Partner</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium uppercase tracking-wide leading-relaxed">
              Are you a manufacturer looking for representation? Or a business
              in need of a reliable general contractor? Let’s streamline your
              procurement process today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start">
              <Button
                variant="amber"
                size="lg"
                className="h-16 px-10 rounded-none font-bold uppercase tracking-[0.2em] text-lg"
              >
                Submit Proposal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-10 rounded-none border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-bold uppercase tracking-[0.2em] text-lg transition-all"
              >
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="relative">
              <Box className="h-64 w-64 text-amber-500 opacity-20 rotate-12 animate-pulse" />
              <Globe2 className="h-32 w-32 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
