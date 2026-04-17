import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        role: "Backend Developer",
        company: "BriskCovey Pvt. Ltd.",
        duration: "Oct 2024 - Present",
        points: [
            "Developed scalable backend systems using Node.js & TypeScript",
            "Built secure REST APIs with authentication & role-based access",
            "Integrated third-party APIs including Google & YouTube APIs",
            "Managed AWS EC2 & S3 deployments and server configurations",
        ],
    },
    {
        role: "Backend Developer Intern",
        company: "BriskCovey Pvt. Ltd.",
        duration: "Apr 2024 - Sep 2024",
        points: [
            "Worked on API development and backend logic",
            "Learned database design and optimization",
            "Collaborated with frontend team for integration",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 text-center">

            <h2 className="flex items-center justify-center gap-3 text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                <FaBriefcase className="text-white text-3xl" />
                Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-10">

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg text-left"
                    >

                        <h3 className="text-xl font-semibold text-blue-400">
                            {exp.role}
                        </h3>

                        <p className="text-gray-300 mt-1">
                            {exp.company} • {exp.duration}
                        </p>

                        <ul className="mt-4 space-y-2 text-gray-400 list-disc pl-5">
                            {exp.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                    </motion.div>
                ))}

            </div>

        </section>
    );
}