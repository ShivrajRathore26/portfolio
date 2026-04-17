import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import HireMe from "./sections/HireMe";
import CaseStudy from "./sections/CaseStudy";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-linear-to-br from-[#0f0f0f] via-[#111827] to-[#020617]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CaseStudy />
      <HireMe />
      <Contact />
    </div>
  );
}