import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black">
            Jayanth talasri
            <span className="text-purple-500">.</span>
          </h2>

          <p className="text-gray-500 mt-2">
            AI • Cloud • Software Engineering
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
              w-12
              h-12
              rounded-full
              border
              border-white/10
              bg-white/5
              flex
              items-center
              justify-center
              hover:border-purple-500
              hover:text-purple-400
              transition
            "
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="
              w-12
              h-12
              rounded-full
              border
              border-white/10
              bg-white/5
              flex
              items-center
              justify-center
              hover:border-purple-500
              hover:text-purple-400
              transition
            "
          >
            <FaLinkedin size={20} />
          </a>
          <a
          href="mailto:jayanthtalsri@gmail.com" 
          className="
          w-12
          h-12
          rounded-full
          border
          border-white/10
          bg-white/5
          flex
          items-center
          justify-center
          hover:border-purple-500
          hover:text-purple-400
          transition
          "   
          >
          <MdEmail size={20} />
          </a>
          
        </div>
        <div className="flex items-center gap-4">

        <a
        href="tel:+917093533086"
        className="hover:text-purple-400 transition"
        >
          📞 +91 70935 33086
        </a>

        </div>
        </div>

        {/* Bottom Text */}
        
          </footer>
  );
}

export default Footer;