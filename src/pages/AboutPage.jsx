import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/wp-content/uploads/2022/10/working-process-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            About <span className="text-blue-500">Wegasolar</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <span>Home</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Established 2016
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Pioneering Sustainable <br /> Energy in Kerala
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                <p>
                  Solar Energy has become the most crucial source of energy for mankind in recent times as the repository of fossil fuels is running out everywhere in the world. To provide sustainable power affordably, Wegasolar was started in 2016 by two enlightened souls to achieve their dream of making the world a better place.
                </p>
                <p>
                  We aim to create an eco-friendly environment with the help of solar energy and solar panels. With our vast knowledge of solar technologies, we can provide customized products and services of all types, with flawless quality.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mt-12 border-t pt-12">
                <div>
                  <p className="text-4xl font-black text-blue-600 mb-2">500+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Happy Clients</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-blue-600 mb-2">7+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Years Exp</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-blue-600 mb-2">500+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Completed</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img src="/wp-content/uploads/2022/10/about_img-1.png" alt="Wegasolar Team" className="w-full h-auto" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To Diligently Design and Effectively Install Solar Power Plants at an affordable price and Uncompromising quality.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To Illuminate a Billion Lamps Worldwide through Solar Energy and become the leading force in renewable transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-gray-500 text-lg">We build lasting relationships through trust, expertise, and excellence.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Unyielding Quality', desc: 'Quality to the core of our installation and services.', icon: <Award className="text-blue-600" /> },
              { title: 'Customer Benefit', desc: 'Our Expertise for Customers Benefit and long-term savings.', icon: <CheckCircle2 className="text-blue-600" /> },
              { title: 'Lasting Friendships', desc: 'Our Customers, Our Lasting Friends. We grow together.', icon: <CheckCircle2 className="text-blue-600" /> },
              { title: 'Building Trust', desc: 'Building Trust Beyond Comparisons through transparency.', icon: <CheckCircle2 className="text-blue-600" /> }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-gray-100">
                <div className="mb-6">{value.icon}</div>
                <h4 className="text-xl font-black text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-6 md:px-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
            Providing Value To Clients Through <br className="hidden md:block" /> Product & Innovation.
          </h2>
          <Link to="/contact" className="inline-flex bg-white text-blue-600 hover:bg-blue-50 px-12 py-5 rounded-full font-black text-lg transition-all shadow-2xl items-center gap-4 mx-auto group">
            Contact Us Now
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
