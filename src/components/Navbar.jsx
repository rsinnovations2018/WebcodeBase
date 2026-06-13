import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import companyLogo from "../assets/company-logo-standard-2048.png"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#071713]/95 text-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Rishi Furniture Gallery home"
        >
          <span className="block h-12 w-12 shrink-0 overflow-hidden bg-[#00382f] ring-1 ring-[#d7b56d]/40">
            <img
              src={companyLogo}
              alt=""
              aria-hidden="true"
              className="h-[162px] max-w-none -translate-x-[66px] -translate-y-[82px]"
            />
          </span>

          <span className="leading-tight">
            <span className="font-display block text-xl font-semibold tracking-wide">
              Rishi Furniture
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-[#d7b56d]">
              Gallery
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-200">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-[#d7b56d]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md border border-[#d7b56d]/60 px-5 py-2.5 text-sm font-semibold text-[#d7b56d] transition hover:bg-[#d7b56d] hover:text-[#071713] md:inline-flex"
        >
          Enquire Now
        </a>

        <button
          type="button"
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#071713] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-5 text-stone-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 transition hover:text-[#d7b56d]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
