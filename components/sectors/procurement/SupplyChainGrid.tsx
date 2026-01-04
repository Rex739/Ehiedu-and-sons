import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ship, Truck, Store, Landmark } from "lucide-react"

const services = [
  {
    title: "Import & Export",
    desc: "Seamless movement of goods across international borders with full customs clearance support.",
    icon: Ship,
  },
  {
    title: "General Merchant",
    desc: "Dealing in a diverse range of goods and services of all kinds permissible by law.",
    icon: Store,
  },
  {
    title: "Manufacturer Representation",
    desc: "Acting as authorized distributors and representatives for local and international brands.",
    icon: Landmark,
  },
  {
    title: "Wholesale Supply",
    desc: "High-volume procurement and distribution for industrial and commercial clients.",
    icon: Truck,
  },
]

export function SupplyChainGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col sm:flex-row border-none shadow-sm hover:shadow-md transition-all"
            >
              <CardHeader className="flex items-center justify-center bg-white sm:w-32 border-r">
                <service.icon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
