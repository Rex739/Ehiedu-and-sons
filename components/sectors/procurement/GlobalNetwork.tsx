import { Globe2 } from "lucide-react";

export function GlobalNetwork() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl font-bold">Our Global Sourcing Network</h2>
            <div className="space-y-6">
              {[
                { label: "Africa", stats: "Active presence in 12+ countries" },
                {
                  label: "Asia/Europe",
                  stats: "Strong manufacturer ties in China & Germany",
                },
                {
                  label: "Americas",
                  stats: "Specialized procurement for industrial machinery",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-4 border-primary pl-6 py-2"
                >
                  <h4 className="font-bold text-xl">{item.label}</h4>
                  <p className="text-muted-foreground">{item.stats}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            {/* Visual representation of a globe or connecting lines */}
            <div className="w-full aspect-square bg-slate-100 rounded-full flex items-center justify-center relative">
              <Globe2 className="h-32 w-32 text-slate-300" />
              <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-10 border border-dotted border-slate-300 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
