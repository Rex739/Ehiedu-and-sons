import { Badge } from "@/components/ui/badge"

export function MedicalHero() {
  return (
    <section className="relative bg-slate-50 pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100 border-none">
            Healthcare Support Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Advanced Logistics for <br />
            <span className="text-teal-600">Healthcare Excellence.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-xl">
            Expert supply, installation, and maintenance of medical equipment,
            facility design, and medical waste management.
          </p>
        </div>
      </div>
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-teal-600/5 hidden lg:block skew-x-12 translate-x-20" />
    </section>
  )
}
