import { FaWhatsapp } from "react-icons/fa"

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919711768024?text=Hello%20I%20want%20to%20know%20about%20your%20furniture%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl text-3xl ring-4 ring-white/20 hover:scale-110 transition duration-300 z-50"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappButton
