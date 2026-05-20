import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "Framer Motion",
  "HTML5",
  "CSS3",
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-black mb-6">
            Technologies I Use
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I enjoy building modern web applications using scalable
            frontend technologies, animation systems, and clean UI
            architecture.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                relative
                group
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                overflow-hidden
              "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition duration-500" />

              <h3 className="relative text-2xl font-bold text-white">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;