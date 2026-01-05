import ConstructionHero from "@/components/sectors/construction/Hero"
import { EngineeringExpertise } from "@/components/sectors/construction/EngineeringExpertise"
import { InfrastructureShowcase } from "@/components/sectors/construction/InfrastructureShowcase"
import { Button } from "@/components/ui/button"
import { HardHat, Ruler, ShieldCheck, FileText } from "lucide-react"
import Image from "next/image"

export default function ConstructionPage() {
  // VERIFIED: Large-scale structural rebar and concrete construction site
  const structuralImage =
    "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2070&auto=format&fit=crop"
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <ConstructionHero />

      {/* 2. CAPABILITIES OVERVIEW */}
      <section className="container mx-auto py-24 px-4 bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center rounded-none border-l-4 border-amber-500 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-900">
              Technical Excellence
            </div>

            <h2 className="text-4xl font-black tracking-tighter text-blue-900 uppercase md:text-6xl leading-[0.9]">
              Engineering the <br />
              <span className="text-amber-500">Future</span> of Infrastructure.
            </h2>

            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              We specialize in complex civil and structural engineering works,
              delivering durable solutions for residential, industrial, and
              institutional sectors. From the ground up, we build the
              foundations of modern society.
            </p>

            {/* Icon Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: ShieldCheck, text: "Safety First Protocols" },
                { icon: Ruler, text: "Precision Engineering" },
                { icon: HardHat, text: "Expert Site Management" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="bg-slate-100 p-2 group-hover:bg-amber-500 transition-colors">
                    <item.icon className="h-5 w-5 text-blue-900 group-hover:text-white" />
                  </div>
                  <span className="font-bold uppercase tracking-tight text-sm text-blue-900">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Correct Structural Image with Amber Frame */}
          <div className="flex-1 w-full aspect-square relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-4 border-amber-500 z-0" />

            <div className="relative z-10 w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <Image
                src={structuralImage}
                alt="De Ehiedu's Structural Reinforcement Site"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-blue-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE COMPETENCIES Grid */}
      <EngineeringExpertise />

      {/* 4. SELECTED PROJECTS Showcase */}
      <InfrastructureShowcase />

      {/* 5. TENDER/BIDDING CTA */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        {/* Subtle Grid Pattern Overlay - Set to 0.02 Opacity */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 text-center space-y-10 relative z-10">
          <div className="inline-flex p-3 bg-amber-500 text-blue-950 mb-2 shadow-lg">
            <FileText size={32} />
          </div>

          <h2 className="text-4xl font-black md:text-7xl text-white uppercase tracking-tighter leading-none">
            Have a Large-Scale <br />
            <span className="text-amber-500">Project?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-blue-100 text-lg font-medium uppercase tracking-wide leading-relaxed">
            De Ehiedu&apos;s is open to tenders and private contracts for roads,
            bridges, and structural engineering works. Let&apos;s discuss your
            technical requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Button
              variant="amber"
              size="lg"
              className="h-16 px-12 rounded-none font-bold uppercase tracking-[0.2em] text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Submit a Tender
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-16 px-12 rounded-none border-2  border-white text-white hover:bg-white hover:text-blue-900 bg-transparent  font-bold uppercase tracking-[0.2em] text-lg transition-all"
            >
              Technical Profile
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
