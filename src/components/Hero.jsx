function Hero() {
  return (
    <section id="home" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-orange-500 font-semibold mb-4">
            Best Home Furnishing Solutions in Jhansi
          </p>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Transform Your Home Into A Beautiful Living Space
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            We provide modular kitchens, wardrobes, interior design,
            carpentry, wall paneling, and complete home furnishing solutions.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Get Started
            </button>

            <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300">
              View Services
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="Interior Design"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero