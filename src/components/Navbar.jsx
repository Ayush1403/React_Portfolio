import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['About', 'Projects', 'Education', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 hover-target sticky top-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="text-white text-2xl font-bold">
            Ayush
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <li key={section}>
                <button
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="py-2 space-y-2">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => scrollToSection(section)}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;