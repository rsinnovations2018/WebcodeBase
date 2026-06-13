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
          alert("Your enquiry has been submitted successfully. Our team will contact you shortly.")
        },
        (error) => {
          alert(error.text)
          console.log(error)
        }
      )

    e.target.reset()
  }

  return (
    <section id="contact" className="bg-[#071713] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#d7b56d]">
            Contact Us
          </p>

          <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
            Start with a consultation for your home.
          </h2>

          <p className="mb-10 text-lg leading-8 text-stone-300">
            Share your room type, measurements, and finish preference. We will
            help you plan furniture and interiors that match the space and your
            budget.
          </p>

          <div className="space-y-5 border border-white/10 bg-white/[0.04] p-7">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#d7b56d]">
                WhatsApp
              </p>
              <a
                href="https://wa.me/919711768024"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-xl font-semibold hover:text-[#d7b56d]"
              >
                +91 97117 68024
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#d7b56d]">
                Location
              </p>
              <p className="mt-1 text-xl font-semibold">Jhansi</p>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="border border-white/10 bg-[#0d211c] p-7 shadow-2xl md:p-9"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-white/10 bg-white/[0.06] p-4 text-white outline-none placeholder:text-stone-400 focus:border-[#d7b56d]"
            />

            <input
              type="tel"
              name="user_mobile"
              placeholder="Mobile Number"
              maxLength="10"
              pattern="[0-9]{10}"
              inputMode="numeric"
              title="Please enter a 10 digit mobile number"
              required
              className="w-full border border-white/10 bg-white/[0.06] p-4 text-white outline-none placeholder:text-stone-400 focus:border-[#d7b56d]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="6"
            required
            className="mt-5 w-full border border-white/10 bg-white/[0.06] p-4 text-white outline-none placeholder:text-stone-400 focus:border-[#d7b56d]"
          ></textarea>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#d7b56d] px-8 py-4 font-semibold text-[#071713] transition hover:bg-[#f0cf83] sm:w-auto"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
