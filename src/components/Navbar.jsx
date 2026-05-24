import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Detect active section while scrolling
  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >
          Jayanth
          <span className="text-purple-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">

          <li>
            <a
              href="#home"
              className={`transition hover:text-white ${
                activeSection === "home"
                  ? "text-purple-400"
                  : "text-gray-300"
              }`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`transition hover:text-white ${
                activeSection === "about"
                  ? "text-purple-400"
                  : "text-gray-300"
              }`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={`transition hover:text-white ${
                activeSection === "skills"
                  ? "text-purple-400"
                  : "text-gray-300"
              }`}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={`transition hover:text-white ${
                activeSection === "projects"
                  ? "text-purple-400"
                  : "text-gray-300"
              }`}
            >
              Projects
            </a>
          </li>
        
          <li>
            <a
              href="#certifications"
              className={`transition hover:text-white ${
                activeSection === "certifications"
                  ? "text-purple-400"
                  : "text-gray-300"
              }`}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`transition hover:text-white ${
                activeSection === "contact"
                  ? "text-purple-400"
                  : "text-gray-300"
              }`}
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-sm font-medium"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-10 text-sm">

            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-white ${
                  activeSection === "home"
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-white ${
                  activeSection === "about"
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-white ${
                  activeSection === "skills"
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-white ${
                  activeSection === "projects"
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-white ${
                  activeSection === "certifications"
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={`transition hover:text-white ${
                  activeSection === "contact"
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                Contact
              </a>
            </li>

            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-sm font-medium"
            >
              Hire Me
            </a>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;