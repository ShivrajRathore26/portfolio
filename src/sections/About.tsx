import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg">

<h2 className="flex items-center justify-center gap-3 text-4xl font-bold mb-14 bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
  <FaUser className="text-white text-3xl" />
  About Me
</h2>

        <p className="text-gray-300 leading-relaxed">
          I am a Backend Developer with 1.5 years of experience specializing in
          Node.js and TypeScript. I build scalable APIs, integrate cloud services,
          and work with AWS for production-ready applications.

          I have developed real-world systems like HRMS platforms and learning
          applications with authentication, role management, and optimized performance.

          I love building efficient backend systems and exploring AI integrations.
        </p>

      </div>
    </motion.section>
  );
}