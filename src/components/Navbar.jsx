import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">
          Rishi Furniture
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black font-medium">

          <li>
            <a href="#home" className="hover:text-orange-500">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-orange-500">
              Services
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-orange-500">
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6">

          <ul className="flex flex-col gap-4 text-black font-medium">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500"
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}
    </nav>
  )
}

export default Navbar