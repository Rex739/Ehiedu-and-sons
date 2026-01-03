import { SectorCard } from "@/components/sectors/SectorCard";
import { sectors } from "@/lib/config/services";


export default function HomePage() {
  return (
    <main className="container mx-auto py-16 space-y-12">
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Multidisciplinary Excellence in Infrastructure & Logistics
        </h1>
        <p className="text-xl text-muted-foreground">
          From civil engineering to healthcare support, we provide end-to-end
          solutions for modern enterprises.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector) => (
          <SectorCard key={sector.id} sector={sector} />
        ))}
      </div>
    </main>
  )
}
