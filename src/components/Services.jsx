const services = [
  {
    title: "Modular Kitchen",
    description: "Modern modular kitchen designs with smart storage and elegant finish.",
  },
  {
    title: "Wardrobe Design",
    description: "Custom wardrobes designed for functionality and premium aesthetics.",
  },
  {
    title: "Interior Design",
    description: "Complete home and office interior solutions tailored to your style.",
  },
  {
    title: "Wall Paneling",
    description: "Enhance interiors with stylish wall paneling and modern textures.",
  },
  {
    title: "False Ceiling",
    description: "Creative POP and gypsum ceiling designs for modern spaces.",
  },
  {
    title: "Carpenter Services",
    description: "Professional carpentry work with quality craftsmanship.",
  },
]

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold mb-3">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Tailored Home Furnishing Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services