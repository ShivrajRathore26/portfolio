import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function HireMe() {
  return (
    <section id="hire" className="py-24 px-6 text-center">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      >

        {/* Glass Card */}
        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-xl">

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Hire Me 🚀
          </h2>

          {/* Description */}
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            I'm available for freelance projects and full-time opportunities.
            I specialize in building scalable backend systems, APIs, and cloud-based applications using modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shivrajsinghrathore9166@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition shadow-lg"
            >
              <FaEnvelope />
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shivraj-singh-rathore-2301692ab/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:scale-105 transition shadow-lg"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </div>
      </motion.div>

    </section>
  );
}