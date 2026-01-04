import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Factory, Construction, Waves } from "lucide-react"

const expertise = [
  {
    title: "Vertical Construction",
    desc: "Building residential complexes, commercial towers, and institutional structures.",
    icon: Building2,
  },
  {
    title: "Civil Infrastructure",
    desc: "Construction of roads, bridges, and specialized structural engineering works.",
    icon: Construction,
  },
  {
    title: "Industrial Facilities",
    desc: "Large-scale factories, warehouses, and industrial plant structures.",
    icon: Factory,
  },
  {
    title: "Drainage Systems",
    desc: "Comprehensive civil works for drainages and urban water management.",
    icon: Waves,
  },
]

export function EngineeringExpertise() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => (
            <Card
              key={item.title}
              className="hover:border-primary transition-colors"
            >
              <CardHeader>
                <item.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
