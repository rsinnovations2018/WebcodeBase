function About() {
  return (
    <section id="about" className="bg-[#f6f1e8] py-24 text-[#14221e]">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative">
          <img
            src="/gallery/kitchen.webp"
            alt="Modular kitchen interior"
            className="h-[520px] w-full object-cover shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 border border-white/25 bg-black/55 px-6 py-5 text-white backdrop-blur-sm">
            <p className="text-3xl font-semibold text-[#d7b56d]">1991</p>
            <p className="mt-1 text-sm uppercase tracking-[0.22em]">
              Quality Since
            </p>
          </div>

          <img
            src="/gallery/kitchen-1.webp"
            alt="Kitchen storage and furnishing detail"
            className="absolute -right-8 -bottom-10 hidden h-48 w-64 border-8 border-[#f6f1e8] object-cover shadow-xl lg:block"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f22]">
            About Us
          </p>

          <h2 className="mb-7 text-4xl font-semibold leading-tight md:text-5xl">
            Built for homes that need beauty and everyday function.
          </h2>

          <p className="mb-6 text-lg leading-8 text-stone-700">
            Rishi Furniture Gallery creates modular kitchens, wardrobes,
            ceiling details, wall panels, and custom furniture for homes that
            need both practical storage and refined presentation.
          </p>

          <p className="mb-9 text-lg leading-8 text-stone-700">
            Our work focuses on proportion, material finish, clean installation,
            and long-term usability, so each room feels complete instead of
            simply furnished.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border-l-2 border-[#9b6f22] pl-5">
              <p className="text-xl font-semibold">Made to measure</p>
              <p className="mt-2 text-stone-600">
                Designed around your space, storage, and daily routine.
              </p>
            </div>

            <div className="border-l-2 border-[#9b6f22] pl-5">
              <p className="text-xl font-semibold">Complete execution</p>
              <p className="mt-2 text-stone-600">
                Planning, fabrication, finishing, and installation handled end to end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
