import React from 'react';
import { Download, Phone, MessageSquare, ShieldCheck, Battery, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const inverterProducts = [
  {
    brand: 'Luminous',
    title: 'Luminous Inverter',
    image: '/wp-content/uploads/2023/02/1-Luminous-Inverter.jpg',
    catalogue: '/wp-content/uploads/2023/02/luminous-new-Inverter-catalouge.pdf'
  },
  {
    brand: 'Luminous',
    title: 'Luminous Battery',
    image: '/wp-content/uploads/2023/02/luminous-inverter.jpg',
    catalogue: '/wp-content/uploads/2023/02/Luminous-battery-new-catalouge.pdf'
  },
  {
    brand: 'Livguard',
    title: 'Livguard Inverter',
    image: '/wp-content/uploads/2023/02/livguard-inverter.jpg',
    catalogue: '/wp-content/uploads/2023/02/Liguard-Inverter-and-Batteries-catalouge.pdf'
  },
  {
    brand: 'Amaron',
    title: 'Amaron Inverter',
    image: '/wp-content/uploads/2023/02/amaron-inverter-battery.jpg',
    catalogue: '/wp-content/uploads/2023/02/amaron-inverter-and-battery-catalouge.pdf'
  },
  {
    brand: 'Exide',
    title: 'Exide Battery',
    image: '/wp-content/uploads/2023/02/5-Exide-battery.jpg',
    catalogue: '/wp-content/uploads/2023/02/Exide-All-Battery-Catalouge.pdf'
  },
  {
    brand: 'V-Guard',
    title: 'V-Guard Inverter',
    image: '/wp-content/uploads/2023/02/v-guard-inverter.jpg',
    catalogue: '/wp-content/uploads/2023/02/VGuard-Inverters-and-Batteries-catalouge.pdf'
  },
  {
    brand: 'Microtek',
    title: 'Microtek Inverter',
    image: '/wp-content/uploads/2023/02/microtek-inverter.jpg',
    catalogue: '/wp-content/uploads/2023/02/Microtek-Inverter-new-catalouge.pdf'
  },
  {
    brand: 'Kirloskar',
    title: 'Kirloskar Solar',
    image: '/wp-content/uploads/2023/02/1-Luminous-Inverter.jpg',
    catalogue: '/wp-content/uploads/2023/02/kirloskar-solar-Inverter-and-battery.pdf'
  },
  {
    brand: 'Lithium Ion',
    title: 'Lithium Ion Battery',
    image: '/wp-content/uploads/2023/02/paylon-tech.jpg',
    catalogue: '/wp-content/uploads/2023/02/150ah-Lithium-ion-Battery-Catalouge-india.pdf'
  }
];


const InverterBatteryPage = () => {
  const { openQuoteModal } = useModal();

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/wp-content/uploads/2022/10/working-process-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
              Inverter & <span className="text-blue-500">Battery</span>
            </h1>
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-sm mb-12">
              Trivandrum's Leading Provider
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-white uppercase tracking-widest">
              <span className="px-6 py-3 bg-blue-600/20 border border-blue-500/30 rounded-full">Free Installation</span>
              <span className="px-6 py-3 bg-cyan-600/20 border border-cyan-500/30 rounded-full">EMI Available</span>
              <span className="px-6 py-3 bg-emerald-600/20 border border-emerald-500/30 rounded-full">Best Price Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Products Grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-8">
                {inverterProducts.map((product, index) => (
                  <div key={index} className="group bg-gray-50 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 p-8 flex flex-col">
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 bg-white shadow-sm">
                      <img src={product.image} alt={product.title} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2 block">{product.brand}</span>
                      <h3 className="text-xl font-black text-gray-900 mb-6">{product.title}</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a 
                        href={product.catalogue} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                      >
                        <Download size={16} />
                        Brochure
                      </a>
                      <button 
                        onClick={() => openQuoteModal({ product: product.title })}
                        className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl"
                      >
                        <MessageSquare size={16} />
                        Enquiry
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar / Form */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-[#0f172a] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <h2 className="text-3xl font-black mb-8 relative z-10 leading-tight">Request a <br /><span className="text-blue-500">Callback</span></h2>
                  
                  <form className="space-y-6 relative z-10" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Callback request received! We will call you back within 24 hours.');
                    e.target.reset();
                  }}>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Your Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Full Name" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Phone Number</label>
                      <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="+91 00000 00000" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Select Product</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                        <option className="bg-[#0f172a]">Inverter & Battery</option>
                        <option className="bg-[#0f172a]">Solar System</option>
                        <option className="bg-[#0f172a]">Others</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20">
                      Submit Request
                    </button>
                  </form>

                  <div className="mt-12 pt-12 border-t border-white/5 space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Emergency Call</p>
                        <p className="text-xl font-black">+91 12345 67890</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-cyan-600/20 rounded-2xl flex items-center justify-center text-cyan-500">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Support Hours</p>
                        <p className="text-lg font-bold">24/7 Assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Zap size={40} />, title: 'Pure Sine Wave', desc: 'Advanced technology for noiseless and stable performance of sensitive electronics.' },
              { icon: <Battery size={40} />, title: 'Long Backup', desc: 'High-density cells providing extended support during long power cuts.' },
              { icon: <ShieldCheck size={40} />, title: 'Full Warranty', desc: 'Comprehensive brand warranty with Wega Solar support assurance.' }
            ].map((feature, i) => (
              <div key={i} className="text-center p-12 bg-white rounded-[3rem] shadow-sm">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InverterBatteryPage;
