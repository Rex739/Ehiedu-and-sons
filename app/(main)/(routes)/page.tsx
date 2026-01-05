import { SectorCard } from "@/components/sectors/SectorCard"
import { sectors } from "@/lib/config/services"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Globe, ShieldCheck, Zap, HardHat, Building, Anchor, Factory, Box } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  // A brighter, high-key construction image
  const heroImage =
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"

  return (
    <main className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* 1. HERO SECTION (Light & Clean) */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Global Infrastructure Construction"
            className="h-full w-full object-cover"
            loading="eager"
            fill
            priority
          />
          {/* The existing white gradient overlay makes the dark blue text pop */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-white shadow-sm px-4 py-2 text-sm font-bold uppercase tracking-widest text-blue-900">
              <HardHat className="mr-2 h-4 w-4 text-amber-500" />
              industrial Engineering Solutions for 2026
            </div>

            <h1 className="text-5xl font-black tracking-tighter text-blue-900 lg:text-8xl uppercase leading-[0.9]">
              Building the Foundations of <br />
              <span className="text-amber-500">Global Progress</span> <br />
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed border-l border-blue-200 pl-6">
              A diversified conglomerate delivering excellence across Real
              Estate, Construction, Hospitality, Healthcare Logistics, and
              Global Procurement.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="amber"
                size="lg"
                asChild
                className="h-16 px-10 rounded-none text-lg font-bold uppercase tracking-widest shadow-md"
              >
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 rounded-none border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold uppercase tracking-widest text-lg transition-all"
              >
                Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 2. STATS SECTION (Light Blue Background) */}
      <section className="border-y border-blue-100 bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Global Partners", value: "120+" },
              { label: "Years Experience", value: "25+" },
              { label: "Safety Rating", value: "100%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="space-y-2 border-l border-amber-500 pl-6"
              >
                <p className="text-4xl font-black text-blue-900 tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR (New Integration) */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-10">
            Strategic Industry Partners & Clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <Factory size={32} />{" "}
              <span className="text-xl font-black tracking-tighter">
                INDUS-CORP
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Box size={32} />{" "}
              <span className="text-xl font-black tracking-tighter">
                LOGIX-GLOBAL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Building size={32} />{" "}
              <span className="text-xl font-black tracking-tighter">
                URBAN-DEV
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Anchor size={32} />{" "}
              <span className="text-xl font-black tracking-tighter">
                MARINE-CO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SECTORS GRID (White Background) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tighter text-blue-900 uppercase sm:text-6xl">
                Our Business <span className="text-amber-500">Sectors</span>
              </h2>
              <div className="h-1.5 w-24 bg-amber-500" />
            </div>
            <p className="text-xl text-slate-500 max-w-md">
              Specialized divisions committed to the highest standards of
              operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (White and Light Grey Contrast) */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-black uppercase tracking-tighter lg:text-5xl text-blue-900">
                Why Leaders <br />{" "}
                <span className="text-amber-500">Choose Us</span>
              </h2>
              <div className="grid gap-8">
                {[
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
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <item.icon className="h-10 w-10 text-blue-900 shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-blue-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 p-10 relative shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
              <div className="space-y-6">
                {[
                  "ISO 9001 Certified",
                  "24/7 Logistics Monitoring",
                  "Regulatory Compliant",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 border-b border-slate-100 pb-4"
                  >
                    <CheckCircle2 className="text-amber-500 h-5 w-5" />
                    <span className="font-bold uppercase tracking-widest text-sm text-blue-900">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION (Deep Blue Background with Amber Button) */}
      <section className="container mx-auto py-24 px-4">
        <div className="bg-blue-900 p-12 md:p-20 text-center space-y-8 flex flex-col items-center shadow-2xl">
          <h2 className="text-4xl font-black md:text-7xl text-white uppercase tracking-tighter">
            Ready to Build?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl font-bold uppercase tracking-wide">
            Contact our specialized teams for consultancy or project management.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button
              variant="amber"
              className="px-12 h-16 rounded-none font-bold uppercase tracking-[0.2em] text-lg border-2 border-transparent"
            >
              Get a Quote
            </Button>
            <Button
              variant="outline"
              className="h-16 px-10 rounded-none border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-bold uppercase tracking-[0.2em] text-lg transition-all"
            >
              Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
