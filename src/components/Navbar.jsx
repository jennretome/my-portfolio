function Navbar() {
  const links = ["About", "Skills", "Projects", "Experience", "Education"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-pink-100 z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-pink-400 font-bold text-xl tracking-tight">
          JR.
        </span>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-500 hover:text-pink-400 hover:bg-pink-50 px-3 py-2 rounded-full transition-all"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-pink-400 text-white text-sm px-5 py-2 rounded-full hover:bg-pink-500 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
