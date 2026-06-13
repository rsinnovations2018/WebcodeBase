const services = [
  {
    title: "Modular Kitchen",
    description: "Measured layouts, premium shutters, smart storage, and durable finishes.",
  },
  {
    title: "Wardrobes",
    description: "Custom storage systems built around daily use, space, and finish preferences.",
  },
  {
    title: "Interior Design",
    description: "Complete room planning with furniture, surfaces, lighting, and materials.",
  },
  {
    title: "Wall Paneling",
    description: "Feature walls, TV panels, and texture-led surfaces for a finished look.",
  },
  {
    title: "False Ceiling",
    description: "Clean POP and gypsum ceiling work with lighting-ready detailing.",
  },
  {
    title: "Custom Carpentry",
    description: "Site-built furniture and woodwork made for exact dimensions and use.",
  },
]

function Services() {
  return (
    <section id="services" className="bg-[#071713] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 grid gap-6 md:grid-cols-[0.85fr_1fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#d7b56d]">
              Our Services
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Tailored solutions for every room.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-stone-300">
            From planning to installation, every service is built around usable
            storage, balanced proportions, and a polished material finish.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d7b56d]/60 hover:bg-white/[0.07]"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="leading-7 text-stone-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
