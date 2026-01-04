import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Bed, Martini, PartyPopper } from "lucide-react"

const offerings = [
  {
    title: "Luxury Hotels & Resorts",
    desc: "Premium accommodations designed for comfort and cultural immersion.",
    icon: Bed,
  },
  {
    title: "Event Centers",
    desc: "State-of-the-art facilities for conferences, weddings, and corporate galas.",
    icon: PartyPopper,
  },
  {
    title: "Gourmet Restaurants",
    desc: "A fusion of local flavors and international culinary excellence.",
    icon: Utensils,
  },
  {
    title: "Exclusive Lounges",
    desc: "Sophisticated social spaces for networking and relaxation.",
    icon: Martini,
  },
]

export default function OfferingsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {offerings.map((item) => (
        <Card
          key={item.title}
          className="border-none bg-slate-50 hover:bg-white transition-all group overflow-hidden"
        >
          <CardContent className="pt-8 text-center space-y-4">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <item.icon className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-medium">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
