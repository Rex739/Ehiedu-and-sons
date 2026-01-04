import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { PenTool, Trash2, LayoutGrid, Thermometer } from "lucide-react"

const services = [
  {
    title: "Hospital Design & Furnishing",
    desc: "Ergonomic and efficient facility planning to optimize patient flow and care.",
    icon: LayoutGrid,
  },
  {
    title: "Equipment Installation",
    desc: "Setup and calibration of high-precision diagnostic and surgical machinery.",
    icon: PenTool,
  },
  {
    title: "Medical Waste Management",
    desc: "Safe, compliant disposal of hazardous medical materials and biological waste.",
    icon: Trash2,
  },
  {
    title: "Supply Chain Support",
    desc: "End-to-end procurement of essential medical tools and consumables.",
    icon: Thermometer,
  },
]

export function SpecializedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">
          Our Specialized Scope
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-none bg-slate-50 hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <service.icon className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
