import React from 'react';
import { Globe, Palette, BarChart3, FileText, TrendingUp, Phone, Mail } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Social Media Management, SEO Optimization, Email Campaigns, and Online Advertising',
      features: ['Social Media Strategy', 'Search Engine Optimization', 'Email Marketing', 'Pay-Per-Click Advertising']
    },
    {
      icon: Palette,
      title: 'Brand Development & Strategy',
      description: 'Complete brand identity creation, positioning, and strategic brand management',
      features: ['Brand Identity Design', 'Brand Positioning', 'Brand Guidelines', 'Brand Management']
    },
    {
      icon: BarChart3,
      title: 'Business Consulting & Planning',
      description: 'Strategic business planning, market analysis, and growth optimization',
      features: ['Business Strategy', 'Market Analysis', 'Growth Planning', 'Performance Optimization']
    },
    {
      icon: FileText,
      title: 'Website Design & Management',
      description: 'Professional website development, maintenance, and optimization',
      features: ['Website Development', 'Website Maintenance', 'Performance Optimization', 'Content Management']
    },
    {
      icon: TrendingUp,
      title: 'Content Creation & Management',
      description: 'Engaging content strategy, creation, and management across all platforms',
      features: ['Content Strategy', 'Content Creation', 'Content Calendar', 'Performance Tracking']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your business and drive sustainable growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's talk about your project and how we can help you achieve your business goals with a tailored approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+260962902061"
              className="group flex items-center space-x-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>+260 962 902 061</span>
            </a>
            <a
              href="mailto:mulengaelijah321@gmail.com"
              className="group flex items-center space-x-3 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>mulengaelijah321@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;