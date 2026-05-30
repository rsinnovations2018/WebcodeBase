import { FaWhatsapp } from "react-icons/fa"

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919711768024?text=Hello%20I%20want%20to%20know%20about%20your%20furniture%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg text-3xl hover:scale-110 transition duration-300 z-50"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappButton