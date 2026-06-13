const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050f0d] py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="font-display mb-3 text-3xl font-semibold">
            Rishi Furniture Gallery
          </h2>

          <p className="max-w-md leading-7 text-stone-400">
            Premium home furnishing, modular kitchens, wardrobes, and interior
            solutions crafted for homes in Jhansi.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b56d]">
            Explore
          </p>

          <div className="grid gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-300 transition hover:text-[#d7b56d]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b56d]">
            Contact
          </p>

          <a
            href="https://wa.me/919711768024"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-stone-300 transition hover:text-[#d7b56d]"
          >
            +91 97117 68024
          </a>
          <p className="mt-3 text-stone-400">Jhansi</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-white/10 pt-6 text-sm text-stone-500">
        © 2026 Rishi Furniture Gallery. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
