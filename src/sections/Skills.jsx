import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "C", "C++"],
  },

  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Pandas",
      "NumPy",
    ],
  },

  {
    title: "Web Development",
    skills: [
      "React",
      "Django",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },

  {
    title: "Cloud & Deployment",
    skills: [
      "AWS EC2",
      "Amazon RDS",
      "Git",
      "GitHub",
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
    ],
  },
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
            Technologies & Expertise
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A combination of software engineering, AI/ML, cloud technologies,
            and modern web development tools used to build scalable and
            intelligent digital systems.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-10">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                hover:border-purple-500/40
                transition
              "
            >

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-6 text-white">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-purple-500/10
                      border
                      border-purple-500/20
                      text-sm
                      text-gray-200
                      hover:bg-purple-500/20
                      transition
                    "
                  >
                    {skill}
                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;