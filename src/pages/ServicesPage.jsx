import React from 'react';
import { Search, PenTool, Layout, ShieldCheck, Settings, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Solar Consultation',
    desc: 'Our dedicated team arrives on spot or talks over phone to clarify all doubts, enabling you to take the right decision about solar products.',
    icon: <Search size={32} />,
    image: '/wp-content/uploads/2022/10/solar-consultation.jpg'
  },
  {
    title: 'System Design',
    desc: 'Expert designers provide customized, unique designs for solar panels tailored for your specific home or business structure.',
    icon: <PenTool size={32} />,
    image: '/wp-content/uploads/2022/10/system-design.jpg'
  },
  {
    title: 'Solar Panel Installation',
    desc: 'Immense knowledge in installing across all shapes and sizes of structures. We help in every step of setting up your solar product.',
    icon: <Layout size={32} />,
    image: '/wp-content/uploads/2022/10/solar-panel-installation.jpg'
  },
  {
    title: 'Auditing',
    desc: 'Comprehensive audit of the state of electric power generation. We reveal all aspects of the system for peak performance.',
    icon: <ShieldCheck size={32} />,
    image: '/wp-content/uploads/2022/10/auditing.jpg'
  },
  {
    title: 'Maintenance',
    desc: 'Regular maintenance is crucial for longevity. We are obliged to help you whenever you need reliable support after installation.',
    icon: <Settings size={32} />,
    image: '/wp-content/uploads/2022/10/solar-panel-mainatannaced.jpg'
  },
  {
    title: 'Solar Material Supply',
    desc: 'We provide all kinds of high-quality solar products including Inverters, Safety Boxes, and premium hardware components.',
    icon: <Package size={32} />,
    image: '/wp-content/uploads/2022/10/solar-products.gif'
  }
];

import { useModal } from '../context/ModalContext';

const ServicesPage = () => {
  const { openQuoteModal } = useModal();

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/wp-content/uploads/2022/10/working-process-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Our <span className="text-blue-500">Services</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <span>Home</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Expert Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">What We Offer</h2>
          <p className="text-xl text-gray-500 leading-relaxed italic">
            "We believe Solar is the most affordable energy source on the planet. Using solar energy we can make our life easier and more sustainable on this earth."
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform">
                    {service.icon}
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <button 
                    onClick={() => openQuoteModal({ service: service.title })}
                    className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest text-blue-600 group-hover:gap-5 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Block */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-[#0f172a] rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-2/3">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Ready to Switch to <br /> <span className="text-blue-500">Cleaner Energy?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-xl">
                  Contact our experts today for a free consultation and customized quote for your solar needs.
                </p>
                <button 
                  onClick={() => openQuoteModal()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-900/50"
                >
                  Request Free Quote
                </button>
              </div>
              <div className="w-full md:w-1/3">
                <div className="p-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full inline-block animate-pulse">
                  <div className="bg-[#0f172a] rounded-full p-8">
                    <Settings size={80} className="text-white animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
