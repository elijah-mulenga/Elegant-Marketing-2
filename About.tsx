import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We develop targeted strategies that align with your business goals and market opportunities.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced professionals bring diverse expertise in marketing, business development, and consulting.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We leverage cutting-edge tools and creative approaches to solve complex business challenges.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record speaks for itself with measurable success stories across various industries.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Business Partner
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Elegant Marketing and Solutions is a full-service business consultancy and marketing agency. We offer digital marketing, brand strategy, content creation, and business development services tailored to your goals.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is to empower businesses with elegant, effective, and sustainable solutions that drive real growth and lasting success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+260962902061"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Get Started Today
              </a>
              <a
                href="mailto:mulengaelijah321@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;