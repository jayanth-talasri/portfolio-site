function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
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
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full" />

            {/* Avatar */}
            <div className="relative w-72 h-72 rounded-full border border-white/10 bg-[#111827] flex items-center justify-center text-6xl font-bold">
              J
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;