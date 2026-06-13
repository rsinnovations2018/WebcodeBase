import { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"

const galleryImages = [
  {
    src: "/gallery/kitchen.webp",
    title: "Modular Kitchen",
    category: "Kitchen",
    description: "Premium storage, refined surfaces, and a clean working layout.",
  },
  {
    src: "/gallery/bed.webp",
    title: "Bedroom Furniture",
    category: "Bedroom",
    description: "A composed bedroom setting with warm furniture detailing.",
  },
  {
    src: "/gallery/kitchen-1.webp",
    title: "Kitchen Storage",
    category: "Furniture Detail",
    description: "Compact storage details designed for everyday use.",
  },
  {
    src: "/gallery/project-1.jpeg",
    title: "Interior Finish",
    category: "Interior Finish",
    description: "Finished installation with practical proportions and clean lines.",
  },
  {
    src: "/gallery/project-2.jpeg",
    title: "Custom Furniture",
    category: "Furniture Detail",
    description: "Made-to-measure furniture for a polished room setting.",
  },
  
]

const galleryVideos = [
  {
    title: "Furniture Gallery Reel 1",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1387943753134587%2F&show_text=false&width=267&t=0",
    width: 267,
    height: 476,
  },
  {
    title: "Furniture Gallery Reel 2",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F830144636775430%2F&show_text=false&width=267&t=0",
    width: 267,
    height: 476,
  },
  {
    title: "Furniture Gallery Reel 3",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1367558637913170%2F&show_text=false&width=267&t=0",
    width: 267,
    height: 476,
  },
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImage = (index) => setSelectedImage(index)
  const closeImage = () => setSelectedImage(null)

  const showPreviousImage = () => {
    setSelectedImage((currentImage) =>
      currentImage === 0 ? galleryImages.length - 1 : currentImage - 1
    )
  }

  const showNextImage = () => {
    setSelectedImage((currentImage) =>
      currentImage === galleryImages.length - 1 ? 0 : currentImage + 1
    )
  }

  useEffect(() => {
    if (selectedImage === null) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImage()
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage()
      }

      if (event.key === "ArrowRight") {
        showNextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  const featuredImage = galleryImages[0]
  const selectedProject =
    selectedImage === null ? null : galleryImages[selectedImage]

  return (
    <section id="gallery" className="bg-[#f6f1e8] py-24 text-[#14221e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 grid gap-6 md:grid-cols-[0.85fr_1fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f22]">
              Our Gallery
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              A curated look at our recent work.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-stone-700">
            Explore kitchens, bedroom furniture, storage details, and finished
            interiors built with premium materials and careful execution.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <button
            type="button"
            className="group relative min-h-[520px] overflow-hidden bg-[#071713] text-left shadow-2xl"
            onClick={() => openImage(0)}
          >
            <img
              src={featuredImage.src}
              alt={featuredImage.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 max-w-xl p-7 text-white">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b56d]">
                Featured Project
              </p>

              <h3 className="mb-3 text-3xl font-semibold">
                {featuredImage.title}
              </h3>

              <p className="leading-7 text-stone-200">
                {featuredImage.description}
              </p>
            </div>
          </button>

          <div className="grid gap-5 sm:grid-cols-2">
            {galleryImages.slice(1, 5).map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="group relative h-64 overflow-hidden bg-[#071713] text-left shadow-lg"
                onClick={() => openImage(index + 1)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                    {image.category}
                  </p>

                  <h3 className="text-xl font-semibold">{image.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {galleryImages.slice(5).map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="group relative h-72 overflow-hidden bg-[#071713] text-left shadow-lg"
              onClick={() => openImage(index + 5)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-5 text-white">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                  {image.category}
                </p>

                <h3 className="text-xl font-semibold">{image.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20 border-t border-[#14221e]/15 pt-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f22]">
              Project Videos
            </p>

            <h3 className="text-3xl font-semibold text-[#14221e]">
              Watch our recent work.
            </h3>
          </div>

          <div className="grid gap-8 justify-items-center lg:grid-cols-3">
            {galleryVideos.map((video) => (
              <div
                key={video.src}
                className="w-full overflow-hidden bg-black shadow-xl ring-1 ring-black/10"
                style={{ maxWidth: `${video.width}px` }}
              >
                <iframe
                  title={video.title}
                  src={video.src}
                  width={video.width}
                  height={video.height}
                  className="block w-full border-0"
                  style={{ height: `${video.height}px` }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <button
            type="button"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#071713]"
            onClick={closeImage}
            aria-label="Close gallery image"
          >
            <FaTimes />
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#071713] md:left-8"
            onClick={showPreviousImage}
            aria-label="Show previous image"
          >
            <FaChevronLeft />
          </button>

          <div className="max-w-5xl">
            <img
              src={selectedProject.src}
              alt={selectedProject.title}
              className="max-h-[78vh] w-full object-contain shadow-2xl"
            />

            <div className="mt-5 text-center text-white">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b56d]">
                {selectedProject.category}
              </p>

              <h3 className="text-3xl font-semibold">
                {selectedProject.title}
              </h3>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-stone-300">
                {selectedProject.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#071713] md:right-8"
            onClick={showNextImage}
            aria-label="Show next image"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
