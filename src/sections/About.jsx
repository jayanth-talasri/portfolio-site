import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-black leading-tight mb-6">
            AI-Focused Software
            <br />
            Engineer
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I’m a recent Information Technology graduate passionate
about Artificial Intelligence, Machine Learning,
Cloud Computing, and modern software engineering.
          </p>

          <p className="text-gray-500 leading-relaxed mb-6">
            I enjoy building intelligent applications, scalable
            systems, and modern digital experiences by combining
            software engineering principles with AI-driven solutions.
          </p>

          <p className="text-gray-500 leading-relaxed">
            My current focus is on continuously improving my
            skills in machine learning, cloud technologies,
            and full-stack development while building impactful
            real-world projects.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-3xl" />

          {/* Stats Card */}
          <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-8">

              <div>
                <h3 className="text-4xl font-black text-purple-400 mb-2">
                  AI/ML
                </h3>

                <p className="text-gray-400">
                  Learning Focus
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-purple-400 mb-2">
                  AWS
                </h3>

                <p className="text-gray-400">
                  Cloud Exposure
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-purple-400 mb-2">
                  7+
                </h3>

                <p className="text-gray-400">
                  Projects & Practice
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-purple-400 mb-2">
                  React
                </h3>

                <p className="text-gray-400">
                  Frontend Development
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;