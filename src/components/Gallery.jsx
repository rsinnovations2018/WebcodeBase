const galleryImages = [
 
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

]

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold mb-3">
            Our Gallery
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Our Recent Interior Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-300"
            >
              <img
                src={image}
                alt="Interior"
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery