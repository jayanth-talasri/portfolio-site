import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certification from "./sections/Certifications"
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Certifications from "./sections/Certifications";
function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Background />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;