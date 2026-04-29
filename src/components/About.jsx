import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Left side: Visuals */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/wp-content/uploads/2022/10/1.jpg" 
                alt="Wega Solar Installation" 
                className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent"></div>
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 z-20 bg-blue-600 text-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-2xl transform rotate-2 md:rotate-3 hover:rotate-0 transition-transform duration-500">
              <p className="text-4xl md:text-5xl font-black mb-1">7+</p>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-90">Years Experience</p>
            </div>

            {/* Background Decorative Pattern */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          {/* Right side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Leading <span className="text-blue-600">Engineering</span> Solutions For Solar Energy
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed text-justify">
              Founded in 2016, Wegasolar is dedicated to making sustainable power accessible to everyone. We specialize in custom-engineered solar systems that provide flawless quality and long-term reliability for both residential and commercial sectors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Zap size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-lg mb-1">High Efficiency</h5>
                  <p className="text-sm text-gray-500 leading-snug">Cutting-edge technology for maximum yield.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-lg mb-1">Full Warranty</h5>
                  <p className="text-sm text-gray-500 leading-snug">Peace of mind with long-term support.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              {['Professional Installation Team', '24/7 Monitoring Support', 'Tier-1 Solar Components'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-600" />
                  <span className="font-bold text-gray-700 uppercase text-[13px] tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about-us" className="inline-block bg-[#1e293b] hover:bg-gray-800 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-gray-200">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
