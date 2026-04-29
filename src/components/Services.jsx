import React from 'react';
import { Settings, Sun, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Solar Installation',
    desc: 'Expert installation of residential and commercial solar panels with optimized placement.',
    icon: <Sun size={32} />,
    image: '/wp-content/uploads/2022/10/1.jpg',
    color: 'blue'
  },
  {
    id: 2,
    title: 'System Maintenance',
    desc: 'Regular cleaning and performance checks to ensure your system runs at peak efficiency.',
    icon: <Settings size={32} />,
    image: '/wp-content/uploads/2022/10/2.jpg',
    color: 'cyan'
  },
  {
    id: 3,
    title: 'Smart Monitoring',
    desc: 'Real-time data tracking to monitor your energy production and savings anywhere.',
    icon: <BarChart3 size={32} />,
    image: '/wp-content/uploads/2022/10/1.jpg',
    color: 'indigo'
  }
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-[#f8fafc]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Premium Solar Services <br /> For <span className="text-blue-600">Smart Energy</span>
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-gray-500 leading-relaxed italic text-sm md:text-base">
              "We believe Solar is the most affordable energy source on the planet. Our goal is to make it simple and efficient for every home."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl text-blue-600 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <button className="flex items-center gap-3 font-bold text-sm uppercase tracking-wider text-gray-900 group-hover:text-blue-600 transition-all">
                  Read More
                  <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              
              {/* Hover Background Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
