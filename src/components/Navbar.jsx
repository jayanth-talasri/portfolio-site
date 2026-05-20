function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Jayanth<span className="text-purple-500">.</span>
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li className="hover:text-white transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-white transition cursor-pointer">
            About
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Projects
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* CTA */}
        <button className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-sm font-medium">
          Hire Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;