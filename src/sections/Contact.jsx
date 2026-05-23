import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-black mb-6">
            Let’s Build Something Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I’m currently open to internships, collaborations, and opportunities in Software Engineering, Artificial Intelligence, and Cloud Technologies.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            p-10
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            overflow-hidden
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-purple-500/10 blur-3xl" />

            <form
               action="https://formspree.io/f/maqkbyyw"
              method="POST"
              className="relative grid gap-6"
            >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="
                w-full
                px-6
                py-4
                rounded-2xl
                bg-black/30
                border
                border-white/10
                text-white
                placeholder-gray-500
                outline-none
                focus:border-purple-500
                transition
              "
            />

            {/* Email */}
            <input
              type="email"
              email="email"
              placeholder="Your Email"
              className="
                w-full
                px-6
                py-4
                rounded-2xl
                bg-black/30
                border
                border-white/10
                text-white
                placeholder-gray-500
                outline-none
                focus:border-purple-500
                transition
              "
            />

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="
                w-full
                px-6
                py-4
                rounded-2xl
                bg-black/30
                border
                border-white/10
                text-white
                placeholder-gray-500
                outline-none
                focus:border-purple-500
                transition
                resize-none
              "
            />

            {/* Button */}
            <button
              type="submit"
              className="
                w-fit
                px-8
                py-4
                rounded-full
                bg-purple-600
                hover:bg-purple-500
                transition
                font-semibold
              "
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;