import profileImage from "../assets/my-image.png";
import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Open To Opportunities
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-purple-500">
              Jayanth
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Frontend Developer passionate about building futuristic,
            responsive, and immersive digital experiences using React,
            JavaScript, and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition font-medium">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 hover:border-purple-500 hover:text-purple-400 transition font-medium">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
             className="flex justify-center"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
                >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full" />

            {/* Avatar */}
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
            {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-3xl" />
                {/* Floating React */}
                <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shadow-lg shadow-cyan-500/20 animate-bounce">
                <FaReact className="text-cyan-400 text-3xl" />
                </div>

                {/* Floating JS */}
                <div className="absolute top-10 -right-10 w-14 h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shadow-lg shadow-yellow-500/20 animate-pulse">
                <FaJsSquare className="text-yellow-400 text-3xl" />
                </div>

                {/* Floating Tailwind */}
                <div className="absolute bottom-10 -left-10 w-14 h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shadow-lg shadow-sky-500/20 animate-bounce">
                <SiTailwindcss className="text-sky-400 text-3xl" />
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
                w-72
                h-72
                object-cover
                rounded-full
                border
                border-white/10
                shadow-2xl
                "
                />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;