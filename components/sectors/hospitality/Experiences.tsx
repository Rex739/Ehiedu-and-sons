import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function Experiences() {
  // Stable, high-resolution luxury resort pool for hospitality context
  const experienceImage =
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Visual Experience */}
        <div className="relative h-100 lg:h-auto overflow-hidden group">
          <Image
            src={experienceImage}
            alt="Luxury Resort Hospitality"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Subtle Blue/Amber Tint Overlay */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent lg:hidden" />
        </div>

        {/* Right Side: Service Standards */}
        <div className="p-12 lg:p-24 flex flex-col justify-center space-y-8 bg-white">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
                Hospitality Excellence
              </span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-blue-900 leading-none">
              Unparalleled <br />
              <span className="text-amber-500">Service Standards</span>
            </h3>
          </div>

          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Our management philosophy centers on &quot;The Guest First.&quot; Whether it&apos;s
            the concierge at our guest houses or the culinary team in our
            boutique restaurants, every detail is meticulously handled to ensure
            a seamless tourism experience.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "24/7 Guest Support",
              "Bespoke Event Planning",
              "Curated Tourism Tours",
              "VIP Logistics",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-900"
              >
                <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <button className="px-8 py-4 bg-blue-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors rounded-none">
              Explore Locations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
