import { SectorCard } from "@/components/sectors/SectorCard"
import { sectors } from "@/lib/config/services"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero-pattern.svg')] bg-center" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="mr-2">New</span> Industrial Engineering Solutions
              for 2026
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-white lg:text-7xl">
              Building the Foundations of{" "}
              <span className="text-primary">Global Progress.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              A diversified conglomerate delivering excellence across Real
              Estate, Construction, Hospitality, Healthcare Logistics, and
              Global Procurement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS / TRUST SECTION */}
      <section className="border-y bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Global Partners", value: "120+" },
              { label: "Years Experience", value: "25+" },
              { label: "Industries Served", value: "5" },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SECTORS GRID */}
      <section className="container mx-auto py-24 px-4 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Business Sectors
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our specialized divisions, each committed to the highest
            standards of professional service and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why Leaders Choose Us
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Unmatched Reliability",
                    desc: "Strict adherence to safety, legal compliance, and international standards.",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    desc: "An expansive network enabling seamless logistics and procurement across continents.",
                  },
                  {
                    icon: Zap,
                    title: "End-to-End Efficiency",
                    desc: "From initial consultancy to final project delivery, we handle every detail.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{item.title}</h4>
                      <p className="text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-slate-800 border border-slate-700 p-8 flex items-center justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 translate-x-[-10%]">
                    <CheckCircle2 className="text-primary h-6 w-6" />
                    <span className="font-medium">
                      ISO 9001 Certified Procedures
                    </span>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 translate-x-[5%]">
                    <CheckCircle2 className="text-primary h-6 w-6" />
                    <span className="font-medium">
                      24/7 Support & Logistics Monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 translate-x-[-5%]">
                    <CheckCircle2 className="text-primary h-6 w-6" />
                    <span className="font-medium">
                      Regulatory Compliant Procurement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="container mx-auto py-24 px-4">
        <div className="rounded-3xl bg-slate-100 p-8 md:p-16 text-center space-y-8">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to start a project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our specialized teams for consultancy, project management,
            or general procurement inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default" className="px-10">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="px-10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
