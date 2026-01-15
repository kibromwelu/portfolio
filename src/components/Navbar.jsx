import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">Kibrom Welu</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-0 w-1/3 max-w-xs bg-black border-t border-gray-800 shadow-xl rounded-bl-xl">
          <div className="flex flex-col space-y-4 px-6 py-6 text-right">
            <a href="#skills" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#about" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
