
import { MedicalHero } from "@/components/sectors/medical/Hero"
import { MaintenanceSection } from "@/components/sectors/medical/MaintenanceSection"
import { SpecializedServices } from "@/components/sectors/medical/SpecializedServices"
import { Button } from "@/components/ui/button"
import { Microscope, Activity, ShieldPlus, Truck } from "lucide-react"

export default function MedicalLogisticsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <MedicalHero />

      {/* Scope Overview */}
      <section className="container mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Precision Logistics for Modern Healthcare
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bridge the gap between healthcare needs and technical
              excellence. Our team provides end-to-end support for medical
              facilities, from the initial design and furnishing to the supply
              of state-of-the-art equipment and specialized waste management.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: Truck,
                  title: "Supply & Distribution",
                  desc: "Reliable procurement of medical consumables and hardware.",
                },
                {
                  icon: ShieldPlus,
                  title: "Compliance Ready",
                  desc: "Adhering to strict international medical safety standards.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
            {/* Visual representation of medical supply chain */}
            <div className="text-center space-y-4">
              <Activity className="h-16 w-16 text-primary mx-auto animate-pulse" />
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                Healthcare Infrastructure Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <SpecializedServices />
      <MaintenanceSection />

      {/* Partner CTA */}
      <section className="bg-slate-50 border-y py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">
              Equip Your Facility Today
            </h2>
            <p className="text-muted-foreground">
              Contact our logistics team for a comprehensive audit of your
              hospital design or equipment maintenance needs.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 whitespace-nowrap"
          >
            Request Technical Audit
          </Button>
        </div>
      </section>
    </main>
  )
}
