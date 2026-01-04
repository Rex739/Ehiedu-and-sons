import { GlobalNetwork } from "@/components/sectors/procurement/GlobalNetwork"
import { ProcurementHero } from "@/components/sectors/procurement/Hero"
import { SupplyChainGrid } from "@/components/sectors/procurement/SupplyChainGrid"
import { Button } from "@/components/ui/button"
import { Box, Globe2, Handshake, ShieldCheck } from "lucide-react"

export default function ProcurementPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ProcurementHero />

      {/* Core Mission Section */}
      <section className="container mx-auto py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Your Gateway to Global Trade & Supply
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As general contractors and manufacturers' representatives, we
            specialize in the procurement and supply of goods and services
            across borders. Our expertise in import/export logistics ensures
            that your business receives what it needs, when it needs it, legally
            and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Globe2,
              title: "Global Sourcing",
              desc: "Access to international manufacturers and suppliers.",
            },
            {
              icon: ShieldCheck,
              title: "Compliance",
              desc: "Strict adherence to trade laws and quality standards.",
            },
            {
              icon: Handshake,
              title: "Representation",
              desc: "Acting as authorized agents for global brands.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl"
            >
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SupplyChainGrid />
      <GlobalNetwork />

      {/* Partnership CTA */}
      <section className="container mx-auto py-20">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div className="relative z-10 space-y-4 max-w-xl">
            <h2 className="text-3xl font-bold">Become a Partner</h2>
            <p className="text-primary-foreground/80 text-lg">
              Are you a manufacturer looking for representation? Or a business
              in need of a reliable general contractor? Let’s streamline your
              procurement process today.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="secondary" size="lg">
                Submit Proposal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="relative z-10">
            <Box className="h-48 w-48 opacity-20 rotate-12" />
          </div>
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        </div>
      </section>
    </main>
  )
}
