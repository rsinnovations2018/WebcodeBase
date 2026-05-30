function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Rishi Furniture Gallery
        </h2>

        <p className="text-gray-400 mb-6">
          Premium Home Furnishing & Interior Solutions in Jhansi
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <p className="hover:text-orange-400 cursor-pointer">Home</p>
          <p className="hover:text-orange-400 cursor-pointer">Services</p>
          <p className="hover:text-orange-400 cursor-pointer">Gallery</p>
          <p className="hover:text-orange-400 cursor-pointer">Contact</p>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Rishi Furniture Gallery. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer