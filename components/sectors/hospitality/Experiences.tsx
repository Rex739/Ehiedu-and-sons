export function Experiences() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-100 lg:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-slate-200 bg-[url('/images/resort-pool.jpg')] bg-cover bg-center" />
        </div>
        <div className="p-12 lg:p-24 flex flex-col justify-center space-y-6">
          <h3 className="text-3xl font-bold">Unparalleled Service Standards</h3>
          <p className="text-lg text-muted-foreground">
            Our management philosophy centers on "The Guest First." Whether it's
            the concierge at our guest houses or the culinary team in our
            restaurants, every detail is meticulously handled to ensure a
            seamless tourism experience.
          </p>
          <ul className="space-y-3">
            {[
              "24/7 Guest Support",
              "Bespoke Event Planning",
              "Curated Tourism Tours",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
