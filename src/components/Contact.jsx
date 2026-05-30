import { useRef } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_dt6v6yh",
        "template_5n93ral",
        form.current,
        "CWOsnTsNJ_1VJqKfK"
      )
      .then(
        () => {
          alert("Message sent successfully!")
        },
        (error) => {
  alert(error.text)
  console.log(error)
}
      )

    e.target.reset()
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Get In Touch With Us
          </h2>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-2xl shadow-md space-y-6"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-black"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-black"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-black"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact