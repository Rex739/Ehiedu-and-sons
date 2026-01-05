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
import Image from "next/image" // Added Next/Image
import { BusinessSector } from "@/lib/config/services"

export function SectorCard({ sector }: { sector: BusinessSector }) {
  return (
    <Card className="group flex flex-col h-full rounded-none border-slate-200 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* 1. Image Section with Amber Top Accent */}
      <div className="relative aspect-video overflow-hidden border-b-4 border-amber-500">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle Blue Tint Overlay on Hover */}
        <div className="absolute inset-0 bg-blue-900/0 transition-colors duration-300 group-hover:bg-blue-900/10" />
      </div>

      {/* 2. Header Section */}
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-black uppercase tracking-tight text-blue-900 leading-none">
          {sector.title}
        </CardTitle>
        <CardDescription className="text-slate-500 font-medium leading-relaxed">
          {sector.description}
        </CardDescription>
      </CardHeader>

      {/* 3. Features / Badges Section */}
      <CardContent className="grow">
        <div className="flex flex-wrap gap-2">
          {sector.features.map((f) => (
            <Badge
              key={f}
              variant="secondary"
              className="rounded-none bg-blue-50 text-blue-900 border border-blue-100 font-bold uppercase tracking-wider text-[10px] px-2"
            >
              {f}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* 4. Footer with Amber Button */}
      <CardFooter>
        <Button
          variant="amber"
          asChild
          className="w-full rounded-none h-12 font-bold uppercase tracking-widest shadow-sm hover:shadow-md"
        >
          <Link href={sector.href}>Explore Services</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
