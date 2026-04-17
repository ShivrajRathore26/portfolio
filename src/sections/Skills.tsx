import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "TypeScript", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS EC2",
      "AWS S3",
      "PM2",
      "Server Deployment",
      "Cloudflare",
      "Cloudinary",
      "Google Cloud Console",
    ],
  },
  {
    title: "Tools & APIs",
    skills: [
      "Postman",
      "Swagger",
      "GitHub",
      "OpenAI APIs",
      "YouTube API",
      "Google APIs",
      "Logging",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-center">

      {/* 🔥 Heading */}
    <h2 className="flex items-center justify-center gap-3 text-4xl font-bold mb-14 bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
  <FaTools className="text-white text-3xl" />
  Skills & Technologies
</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-px rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            {/* Glass Card */}
            <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-[1.03] transition duration-300">

              {/* Category Title */}
              <h3 className="text-xl font-semibold mb-5 text-blue-400 tracking-wide">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-md border border-white/20 shadow-md hover:scale-110 hover:shadow-purple-500/50 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}