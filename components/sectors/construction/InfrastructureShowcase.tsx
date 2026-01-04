export function InfrastructureShowcase() {
  const projects = [
    { name: "Urban Bridge Project", type: "Civil" },
    { name: "Tech Hub Plaza", type: "Commercial" },
    { name: "Industrial Zone Road", type: "Infrastructure" },
  ]

  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl bg-muted aspect-4/5"
          >
            {/* Replace with actual Project Image */}
            <div className="absolute inset-0 bg-slate-300 transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <p className="text-primary text-sm font-bold uppercase">
                {project.type}
              </p>
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
