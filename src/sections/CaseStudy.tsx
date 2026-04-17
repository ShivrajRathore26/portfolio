import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Gimmel – AI Learning Platform",
    problem:
      "Students needed personalized learning and teachers required a scalable platform to manage videos, quizzes, and assignments.",
    solution:
      "Built a role-based system with AI-powered quizzes, YouTube integration, and personalized content delivery.",
    features: [
      "YouTube API video integration",
      "AI-generated quizzes & discussion",
      "Comments, likes, replies",
      "Homework & assignments",
      "Difficulty levels (Easy, Medium, Hard)",
      "Watch history & save for later",
      ],
    tech: ["Node.js", "TypeScript", "MongoDB", "AWS", "OpenAI API", "YouTube API", "Loggers"],
  },
  {
    title: "Cablinks – HRMS & Accounting System",
    problem:
      "Companies needed a unified system to manage HR operations, payroll, and accounting workflows.",
    solution:
      "Developed a scalable HRMS + Accounting system with automation and multi-company support.",
    features: [
      "Employee & attendance management",
      "Payroll, salary, deductions",
      "Leave & timesheet tracking",
      "Inventory & invoicing system",
      "Bank accounts & supplier management",
      "PDF generation & reporting",
      "Integrated Payment Gateway"
    ],
    tech: ["Node.js", "TypeScript", "MongoDB","payment gateway", "AWS EC2", "S3", "PM2"],
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 px-6 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-14 bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        Case Studies
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {caseStudies.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-px rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            {/* Glass Card */}
            <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl text-left hover:scale-[1.03] transition">

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-400">
                {item.title}
              </h3>

              {/* Problem */}
              <p className="mt-3 text-gray-400">
                <span className="text-white font-semibold">Problem:</span> {item.problem}
              </p>

              {/* Solution */}
              <p className="mt-2 text-gray-400">
                <span className="text-white font-semibold">Solution:</span> {item.solution}
              </p>

              {/* Features */}
              <ul className="mt-4 text-gray-400 list-disc pl-5 space-y-1">
                {item.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-linear-to-r from-blue-500/80 to-purple-600/80 border border-white/20"
                  >
                    {t}
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







// import { useState } from "react";
// import { motion } from "framer-motion";

// const caseStudies = [
//   {
//     title: "Gimmel – AI Learning Platform",
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // replace later
//     problem:
//       "Students needed personalized learning with AI-based quizzes and content.",
//     solution:
//       "Built role-based platform with YouTube API, AI quizzes, and engagement features.",
//     architecture: ["Client → API → DB", "YouTube API", "OpenAI API"],
//   },
//   {
//     title: "Cablinks – HRMS & Accounting",
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     problem:
//       "Companies needed HR + Accounting system in one place.",
//     solution:
//       "Developed scalable HRMS with payroll, inventory, and automation.",
//     architecture: ["Client → Backend", "AWS EC2", "MongoDB", "S3 Storage"],
//   },
// ];

// export default function CaseStudy() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <section id="case-study" className="py-24 px-6 text-center">

//       <h2 className="text-4xl font-bold mb-14 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
//         Case Studies
//       </h2>

//       <div className="max-w-5xl mx-auto space-y-6">

//         {caseStudies.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
//           >
//             <div className="bg-[#0f172a]/90 backdrop-blur-xl p-6 rounded-2xl text-left">

//               {/* HEADER */}
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
//               >
//                 <h3 className="text-xl font-semibold text-blue-400">
//                   {item.title}
//                 </h3>

//                 <span className="text-white text-xl">
//                   {openIndex === i ? "−" : "+"}
//                 </span>
//               </div>

//               {/* COLLAPSIBLE CONTENT */}
//               {openIndex === i && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   className="mt-4 space-y-4"
//                 >

//                   {/* VIDEO */}
//                   <div className="rounded-lg overflow-hidden">
//                     <iframe
//                       width="100%"
//                       height="200"
//                       src={item.video}
//                       title="Project Video"
//                       className="rounded-lg"
//                     ></iframe>
//                   </div>

//                   {/* PROBLEM */}
//                   <p className="text-gray-400">
//                     <span className="text-white font-semibold">Problem:</span>{" "}
//                     {item.problem}
//                   </p>

//                   {/* SOLUTION */}
//                   <p className="text-gray-400">
//                     <span className="text-white font-semibold">Solution:</span>{" "}
//                     {item.solution}
//                   </p>

//                   {/* ARCHITECTURE */}
//                   <div>
//                     <p className="text-white font-semibold mb-2">
//                       Architecture:
//                     </p>

//                     <div className="flex flex-wrap gap-3">
//                       {item.architecture.map((arch, idx) => (
//                         <span
//                           key={idx}
//                           className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
//                         >
//                           {arch}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                 </motion.div>
//               )}

//             </div>
//           </motion.div>
//         ))}

//       </div>

//     </section>
//   );
// }