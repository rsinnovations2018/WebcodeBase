import { useEffect, useState } from "react"

const heroImages = [
  "/gallery/bed.webp",
  "/gallery/bed-1.webp",
  "/gallery/bed-2.webp",
  "/gallery/bed-3.webp",
  "/gallery/kitchen.webp",
]

function Hero() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#071713] text-white"
    >
      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#071713]/70 to-black/20"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071713] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-3xl py-20">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#d7b56d]">
            Bespoke interiors and furniture since 1991
          </p>

          <h1 className="mb-7 text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Premium furniture crafted for refined homes.
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-stone-100 md:text-xl">
            Modular kitchens, wardrobes, wall panels, false ceilings, and
            custom carpentry designed with detail, durability, and a showroom
            finish.
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#d7b56d] px-7 py-4 font-semibold text-[#071713] transition duration-300 hover:bg-[#f0cf83]"
            >
              Book a Consultation
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-md border border-white/60 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#071713]"
            >
              View Projects
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-5 border-y border-white/20 py-6">
            <div>
              <p className="text-3xl font-semibold text-[#d7b56d]">30+</p>
              <p className="mt-1 text-sm text-stone-200">Years Quality</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#d7b56d]">6+</p>
              <p className="mt-1 text-sm text-stone-200">Core Services</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#d7b56d]">Jhansi</p>
              <p className="mt-1 text-sm text-stone-200">Local Studio</p>
            </div>
          </div>

          <div className="mt-9 flex gap-3" aria-label="Hero image slides">
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeImage === index
                    ? "w-10 bg-[#d7b56d]"
                    : "w-2 bg-white/50 hover:bg-white"
                }`}
                aria-label={`Show hero image ${index + 1}`}
                onClick={() => setActiveImage(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
