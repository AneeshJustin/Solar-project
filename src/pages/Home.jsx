import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Brands from '../components/Brands';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Home = () => {
  const { openQuoteModal } = useModal();

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Brands />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/wp-content/uploads/2022/10/working-process-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-12">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row justify-between items-center text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="mb-10 lg:mb-0 max-w-2xl relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Got an Incredible Project <br /> Right Now?</h2>
              <p className="text-blue-100 text-lg opacity-90">Let's collaborate to build a sustainable energy system tailored for your specific needs. High quality, on time, every time.</p>
            </div>
            
            <Link to="/contact" className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-4 relative z-10">
              Get in Touch
              <div className="bg-blue-600 text-white p-1 rounded-full group-hover:rotate-45 transition-transform">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
