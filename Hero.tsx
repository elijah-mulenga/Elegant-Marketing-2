import React from 'react';
import { Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-indigo-600 mr-2 animate-pulse" />
            <span className="text-indigo-600 font-semibold text-lg">Professional Business Growth</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Elegant Marketing
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-700">
              and Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your Partner in Professional Business Growth
          </p>
          
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in modern, results-driven marketing strategies and tailored business solutions designed to help your brand thrive. Whether you're a startup or an established enterprise, we're here to elevate your success with elegance and impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+260962902061"
              className="group flex items-center space-x-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Call Now: +260 962 902 061</span>
            </a>
            
            <a
              href="mailto:mulengaelijah321@gmail.com"
              className="group flex items-center space-x-3 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Email Us</span>
            </a>
          </div>
          
          <button
            onClick={scrollToContact}
            className="group flex items-center space-x-2 mx-auto text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
          >
            <span className="text-lg font-medium">Let's discuss your project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;