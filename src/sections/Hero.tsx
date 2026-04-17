import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Hero() {
    return (


        <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24">

            <div className="relative mt-8">

                {/* 🔥 glowing background */}
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-70"></div>

                {/* 🧊 glass border */}
                <div className="relative p-1 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">

                    <img
                        src={profile}
                        alt="profile"
                        className="w-44 h-44 object-cover object-top rounded-full border-4 border-pink-400 shadow-2xl transition duration-500 hover:scale-105"
                    />


                </div>

            </div>

            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-bold mt-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
                Shivraj Singh Rathore
            </motion.h1>

            <p className="text-gray-400 mt-3 text-lg">
                Backend Developer | Node.js | AWS | API Specialist
            </p>

            <div className="mt-6 flex gap-4">
                <a
                    href="https://www.linkedin.com/in/shivraj-singh-rathore-2301692ab/"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:scale-105 transition shadow-lg"
                >
                    <FaLinkedin />
                    LinkedIn
                </a>
                <a
                    href="/ShivrajSinghRathore.pdf"
                    download
                    className="px-6 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 hover:scale-105 transition shadow-lg"
                >
                    Download Resume
                </a>

                <a
                    href="https://github.com/Shivraj Rathore26"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
                >
                    <FaGithub />
                    GitHub
                </a>
            </div>

        </section>
    );
}