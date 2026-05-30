function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
            alt="About Interior"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <p className="text-orange-500 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            One Of The Best Home Furnishing Solutions In Jhansi
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            We specialize in modular kitchens, wardrobes, false ceilings,
            carpentry, wall paneling, and complete interior solutions
            designed to enhance your living spaces.
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            Our experienced team focuses on quality craftsmanship,
            modern aesthetics, and customer satisfaction to deliver
            beautiful and functional interiors.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Learn More
          </button>
        </div>

      </div>
    </section>
  )
}

export default About