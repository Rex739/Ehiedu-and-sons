import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PropertyTypes() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Portfolio Scope</h2>
        <Tabs defaultValue="residential" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="land">Land</TabsTrigger>
          </TabsList>

          <TabsContent
            value="residential"
            className="p-6 bg-white border rounded-lg mt-4"
          >
            <h3 className="text-xl font-bold mb-2">
              Luxury Homes & Apartments
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We develop high-end residential estates that prioritize security,
              sustainability, and modern aesthetics for families and urban
              professionals.
            </p>
          </TabsContent>

          {/* Add similar TabsContent for commercial and land */}
        </Tabs>
      </div>
    </section>
  )
}
