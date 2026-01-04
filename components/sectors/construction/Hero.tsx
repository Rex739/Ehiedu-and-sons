import { Button } from "@/components/ui/button";

export function ConstructionHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('/images/construction-bg.jpg')] bg-cover bg-center" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Build <span className="text-primary">Stronger</span>
            <br />
            Live Better.
          </h1>
          <p className="text-xl text-slate-300 max-w-xl">
            Delivering world-class civil engineering, structural works, and
            large-scale infrastructure including roads, bridges, and drainages.
          </p>
          <Button
            size="lg"
            className="rounded-none h-14 px-8 text-lg uppercase font-bold tracking-widest"
          >
            Our Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
