import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const projects = [
    {
        title: "HRMS Portal",
        description:
            "Complete HR & Accounting system with payroll, P&L, cash flow, and bank reconciliation.",
        tech: ["Node.js", "TypeScript", "AWS S3", "JWT", "MongoDB", "SendGrid", "Paystack API"],
        link: "https://payroll.cablinks.org/",
    },
    {
        title: "Gimmel Platform",
        description:
            "Learning & assessment platform with authentication, quizzes, and role-based access.",
        tech: ["Node.js", "TypeScript", "youtube API", "Google APIs", "Express", "MongoDB", "REST APIs", "OpenAI APIs"],
        link: "https://gimmel.one/",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 text-center">

            {/* 🔥 Heading */}
            <h2 className="flex items-center justify-center gap-3 text-4xl font-bold mb-14 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                <FaCode className="text-white text-3xl" />
                Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    >
                        {/* Glass Card */}
                        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-[1.03] transition duration-300 text-left">

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-blue-400">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mt-3">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 border border-white/20 shadow-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Button */}
                            <a
                                href={project.link}
                                target="_blank"
                                className="inline-block mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition shadow-lg"
                            >
                                View Project →
                            </a>

                        </div>
                    </motion.div>
                ))}

            </div>

        </section>
    );
}