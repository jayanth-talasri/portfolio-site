import profileImage from "../assets/my-image.png";
import resume from "../assets/resume.pdf";
import {
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Small Heading */}
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Open To Opportunities
          </p>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-4">
  
  <span className="text-purple-500">
    Talasri Jayanth
  </span>
</h1>

<h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
  AI & Machine Learning Engineer
</h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            Recent Information Technology graduate passionate about
            Artificial Intelligence, Machine Learning, Cloud Computing,
            and modern software engineering.
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "Machine Learning",
              "AWS",
              "React",
              "Python",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-sm
                  text-gray-300
                  hover:border-purple-500/40
                  hover:text-white
                  transition
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="
                px-6
                py-3
                rounded-full
                bg-purple-600
                hover:bg-purple-500
                transition
                font-medium
              "
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="
                px-6
                py-3
                rounded-full
                border
                border-white/20
                hover:border-purple-500
                hover:text-purple-400
                transition
                font-medium
              "
            >
              Let's Connect
            </a>
            <a
             href={resume}
              download
              className="
               px-6
               py-3
               rounded-full
               border
               border-purple-500/40
               bg-white/5
               hover:bg-purple-500/10
               hover:border-purple-500
               transition
               font-medium
              "
              >
              Download Resume
            </a>


          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />

            {/* Floating React */}
            <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shadow-lg shadow-cyan-500/20 animate-bounce">
              <FaReact className="text-cyan-400 text-3xl" />
            </div>

            {/* Floating GitHub */}
            <div className="absolute -bottom-6 right-0 w-14 h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shadow-lg shadow-white/10 animate-pulse">
              <FaGithub className="text-white text-3xl" />
            </div>

            {/* Floating Node */}
            <div className="absolute top-1/2 -right-16 w-14 h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shadow-lg shadow-green-500/20 animate-bounce">
              <FaNodeJs className="text-green-400 text-3xl" />
            </div>

            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Jayanth"
              className="
                relative
                w-80
                h-80
                md:w-[380px]
                md:h-[380px]
                object-cover
                rounded-full
                border
                border-purple-500/20
                shadow-[0_0_60px_rgba(168,85,247,0.25)]
              "
            />

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;