import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Key, Landmark, Layout, SearchCheck } from "lucide-react"

const reServices = [
  {
    title: "Property Development",
    desc: "End-to-end development of residential and commercial estates.",
    icon: Building,
  },
  {
    title: "Asset Management",
    desc: "Professional management of properties to ensure maximum ROI.",
    icon: Key,
  },
  {
    title: "Sales & Acquisitions",
    desc: "Expert guidance in buying, selling, and leasing landed properties.",
    icon: Landmark,
  },
  {
    title: "Valuation Services",
    desc: "Accurate market valuations for residential and industrial assets.",
    icon: SearchCheck,
  },
  {
    title: "Estate Consultancy",
    desc: "Strategic advisory for large-scale real estate investments.",
    icon: Layout,
  },
]

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reServices.map((s) => (
        <Card
          key={s.title}
          className="border-none shadow-md hover:shadow-xl transition-shadow"
        >
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{s.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{s.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
