// // export default function Navbar() {
// //   return (
// //     <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">

// //       <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
// //         Shivraj
// //       </h1>

// //       <div className="flex gap-6 text-sm">
// //         {["about", "skills", "projects", "contact"].map((item) => (
// //           <a
// //             key={item}
// //             href={`#${item}`}
// //             className="relative group"
// //           >
// //             {item.toUpperCase()}
// //             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
// //           </a>
// //         ))}
// //       </div>

// //     </nav>
// //   );
// // }


// import { FaLinkedin, FaGithub } from "react-icons/fa";

// <FaLinkedin size={22} />

// import logo from "../assets/Logo.png";

// export default function Navbar() {
//     return (
//         <nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white/1 backdrop-blur-lg border-b border-white/20 shadow-lg">

//             {/* LEFT EMPTY (balance ke liye) */}
//             {/* <div className="w-1/3"></div> */}

//             {/* CENTER LOGO */}
//             {/* <div className="w-1/1 flex justify-center"> */}
//             <img
//                 src={logo}
//                 alt="logo"
//                 className="w-12 h-12 object-contain hover:scale-110 transition drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
//             {/* </div> */}
//             {/* RIGHT MENU */}
//             <div className="w-1/3 flex justify-end gap-6 text-sm">
//                 {["about", "experience", "skills", "projects", "contact"].map((item) => (
//                     <a
//                         key={item}
//                         href={`#${item}`}
//                         className="relative group"
//                     >
//                         {item.toUpperCase()}
//                         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
//                     </a>

//                 ))}
//             </div>

//         </nav>
//     );
// }

import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">

      {/* LEFT LOGO */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-14 h-14 object-contain hover:scale-110 transition duration-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
        />

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-8">

        {/* MENU */}
        <div className="flex gap-6 text-sm">
          {["about", "experience", "skills", "projects", "case-study", "hire", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group font-medium"
            >
              {item.toUpperCase()}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">

          <a
            href="https://github.com/ShivrajRathore26"
            target="_blank"
            className="text-white text-lg hover:text-blue-400 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shivraj-singh-rathore-2301692ab/"
            target="_blank"
            className="text-white text-lg hover:text-blue-500 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </nav>
  );
}