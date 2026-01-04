import { CheckCircle2 } from "lucide-react"

export function MaintenanceSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">
              Equipment Lifecycle Management
            </h2>
            <p className="text-slate-400 text-lg">
              We don't just supply; we ensure your equipment performs at peak
              accuracy for years. Our maintenance contracts include:
            </p>
            <ul className="space-y-4">
              {[
                "Regular Preventive Maintenance (PM)",
                "Emergency On-call Technical Support",
                "Spare Parts Sourcing & Replacement",
                "User Training & Safety Workshops",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-800 rounded-lg flex flex-col items-center justify-center p-6 text-center">
              <span className="text-3xl font-bold text-teal-400">99.9%</span>
              <span className="text-xs uppercase tracking-tighter text-slate-500 mt-2">
                Uptime Guarantee
              </span>
            </div>
            <div className="aspect-square bg-slate-800 rounded-lg flex flex-col items-center justify-center p-6 text-center">
              <span className="text-3xl font-bold text-teal-400">24/7</span>
              <span className="text-xs uppercase tracking-tighter text-slate-500 mt-2">
                Tech Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
