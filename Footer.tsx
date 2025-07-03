import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-indigo-400 mr-2" />
              <h3 className="text-2xl font-bold">Elegant Marketing & Solutions</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your partner in professional business growth. We specialize in modern, results-driven marketing strategies and tailored business solutions designed to help your brand thrive.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="tel:+260962902061"
                className="flex items-center space-x-3 text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>+260 962 902 061</span>
              </a>
              <a
                href="mailto:mulengaelijah321@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>mulengaelijah321@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Lusaka, Zambia</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-200">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-200">
                  Brand Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-200">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-200">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-200">
                  Content Creation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Elegant Marketing and Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;