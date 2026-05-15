import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Experience", "Education"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-pink-100 z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-pink-400 font-bold text-xl tracking-tight">
          JR.
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
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
          className="hidden md:block bg-pink-400 text-white text-sm px-5 py-2 rounded-full hover:bg-pink-500 transition-colors"
        >
          Contact Me
        </a>

        {/* Hamburger Button - Mobile only */}
        <button
          className="md:hidden text-pink-400 text-xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-600 hover:text-pink-400 py-2 border-b border-pink-50"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-pink-400 text-white text-sm px-5 py-3 rounded-full text-center hover:bg-pink-500 transition-colors"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
