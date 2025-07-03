import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Elegant Marketing
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+260962902061"
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+260 962 902 061</span>
            </a>
            <a
              href="mailto:mulengaelijah321@gmail.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-left"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a
                  href="tel:+260962902061"
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+260 962 902 061</span>
                </a>
                <a
                  href="mailto:mulengaelijah321@gmail.com"
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">mulengaelijah321@gmail.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;