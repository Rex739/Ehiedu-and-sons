import { ConstructionHero } from "@/components/sectors/construction/Hero"
import { EngineeringExpertise } from "@/components/sectors/construction/EngineeringExpertise"
import { InfrastructureShowcase } from "@/components/sectors/construction/InfrastructureShowcase"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HardHat, Ruler, ShieldCheck } from "lucide-react"

export default function ConstructionPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ConstructionHero />

      {/* Capabilities Overview */}
      <section className="container mx-auto py-20 bg-background">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <Badge
              variant="outline"
              className="px-4 py-1 text-primary border-primary"
            >
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Engineering the Future of Infrastructure.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in complex civil and structural engineering works,
              delivering durable solutions for residential, industrial, and
              institutional sectors. From the ground up, we build the
              foundations of modern society.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: ShieldCheck, text: "Safety First Protocols" },
                { icon: Ruler, text: "Precision Engineering" },
                { icon: HardHat, text: "Expert Site Management" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full aspect-square bg-muted rounded-2xl overflow-hidden relative">
            {/* Placeholder for a technical blueprint or site image */}
            <div className="absolute inset-0 bg-slate-200 animate-pulse" />
          </div>
        </div>
      </section>

      <EngineeringExpertise />
      <InfrastructureShowcase />

      {/* Tender/Bidding CTA */}
      <section className="border-t bg-slate-900 text-white py-20">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Have a Large-Scale Project?</h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            We are open to tenders and private contracts for roads, bridges, and
            structural engineering works. Let's discuss your technical
            requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Submit a Tender
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 hover:bg-slate-800"
            >
              Technical Profile
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
