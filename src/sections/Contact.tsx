// export default function Contact() {
//   return (
//     <div>
//         <a href="mailto:shivrajsinghrathore9166@gmail.com">
//   Email Me
// </a>
//     </div>
//   );
// }



// =============================3 options for contact section =============================
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 text-center">

            <h2 className="flex items-center justify-center gap-3 text-3xl font-bold mb-6">
                <FaEnvelope className="text-pink-400 text-2xl" />
                Contact
            </h2>
            <div className="flex justify-center gap-4">

                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shivrajsinghrathore9166@gmail.com&su=Hiring%20Request&body=Hi%20Shivraj,%20I%20want%20to%20connect%20with%20you"
                    // href="https://mail.google.com/mail/?view=cm&fs=1&to=shivrajsinghrathore9166@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-pink-500 to-purple-600 hover:scale-105 transition shadow-lg"
                >
                    <FaEnvelope />
                    Email
                </a>
                <a
                    href="https://www.linkedin.com/in/shivraj-singh-rathore-2301692ab/"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 hover:scale-105 transition shadow-lg"
                >
                    <FaLinkedin />
                    LinkedIn
                </a>
            </div>

        </section>
    );
}