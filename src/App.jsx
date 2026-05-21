import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certification from "./sections/Certification"
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Background />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;