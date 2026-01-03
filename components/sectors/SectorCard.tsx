import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BusinessSector } from "@/lib/config/services"

export function SectorCard({ sector }: { sector: BusinessSector }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {/* Add Next/Image here */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <CardHeader>
        <CardTitle>{sector.title}</CardTitle>
        <CardDescription>{sector.description}</CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <div className="flex flex-wrap gap-2">
          {sector.features.map((f) => (
            <Badge key={f} variant="secondary">
              {f}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={sector.href}>Explore Services</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
