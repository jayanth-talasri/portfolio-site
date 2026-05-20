import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Portfolio Website",
    description:
      "A futuristic developer portfolio built using React, Tailwind CSS, and Framer Motion with immersive UI design.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },

  {
    title: "Modern Dashboard UI",
    description:
      "A responsive analytics dashboard with clean architecture, modern UI systems, and interactive components.",
    tech: ["React", "Charts", "UI/UX"],
  },

  {
    title: "E-Commerce Platform",
    description:
      "A scalable frontend e-commerce experience with responsive layouts and premium product interfaces.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="text-5xl font-black mb-6">
            Featured Work
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of projects focused on modern frontend
            engineering, immersive interfaces, and scalable user
            experiences.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                relative
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                overflow-hidden
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition duration-500" />

              {/* Top Gradient */}
              <div className="h-48 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-blue-500/20" />

              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-sm font-medium">
                    Live Demo
                  </button>

                  <button className="px-5 py-2 rounded-full border border-white/10 hover:border-purple-500 transition text-sm font-medium">
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;