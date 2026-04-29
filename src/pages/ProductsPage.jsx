import React from 'react';
import { Download, ShieldCheck, Zap, Battery, Droplets } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const products = [
  {
    category: 'Solar Module',
    brand: 'Adani Solar',
    title: 'High-Efficiency Modules',
    desc: "India's first company with vertically integrated businesses offering services across the photovoltaics spectrum.",
    image: '/wp-content/uploads/2022/10/adani-solar.jpg',
    catalogue: '/wp-content/uploads/2022/10/adani-solar.pdf',
    icon: <Zap size={20} />
  },
  {
    category: 'Solar Panel',
    brand: 'Kirloskar',
    title: 'Premium Solar Panels',
    desc: 'Widely acknowledged for high quality, Kirloskar panels provide excellent efficiency for residential use.',
    image: '/wp-content/uploads/2022/10/kirloskar-solar-panel.jpg',
    catalogue: '/wp-content/uploads/2022/10/Solar-Module_Kirloskar.pdf',
    icon: <ShieldCheck size={20} />
  },
  {
    category: 'Grid Tie Inverter',
    brand: 'Kirloskar',
    title: 'Solar Grid Tie Inverter',
    desc: 'High yields with efficiency up to 99%. Wide working voltage and LCD screen for performance monitoring.',
    image: '/wp-content/uploads/2022/10/solar-on-grid-inverter.jpg',
    catalogue: '/wp-content/uploads/2022/10/On-Grid-Brouchre_kirloskar.pdf',
    icon: <Zap size={20} />
  },
  {
    category: 'Battery & Inverter',
    brand: 'Amaron',
    title: 'Tubular Inverter Battery',
    desc: 'Tall tubular technology well-suited for areas with long and frequent power cuts. Reliable backup.',
    image: '/wp-content/uploads/2022/10/amaron-battery-and-inverter.jpg',
    catalogue: '/wp-content/uploads/2022/10/amaron.jpg',
    icon: <Battery size={20} />
  },
  {
    category: 'Installation Kit',
    brand: 'Wega Solar',
    title: 'Solar Installation Kit',
    desc: 'Includes circuit breakers, wires, controllers, and safety equipment for efficient system connection.',
    image: '/wp-content/uploads/2022/10/solar-installatin-kit.jpg',
    catalogue: '/wp-content/uploads/2022/10/GEESYS-Solar-BoS-Components_compressed.pdf',
    icon: <ShieldCheck size={20} />
  },
  {
    category: 'Water Heater',
    brand: 'Venus',
    title: 'Solar Water Heater',
    desc: 'A healthy, money-saving alternative for water heating that runs efficiently for a long time.',
    image: '/wp-content/uploads/2022/10/venus-water-heater.jpg',
    catalogue: '/wp-content/uploads/2022/10/water-heater-venus.pdf',
    icon: <Droplets size={20} />
  },
  {
    category: 'Solar Panel',
    brand: 'Luminous',
    title: 'Mono & Poly PV Modules',
    desc: 'Comply with IEC standards, suitable for a wide range of residential and commercial applications.',
    image: '/wp-content/uploads/2022/10/lluminous-solar-panel.jpg',
    catalogue: '/wp-content/uploads/2022/10/luminous-solar.pdf',
    icon: <Zap size={20} />
  },
  {
    category: 'Battery',
    brand: 'Luminous',
    title: 'Solar Batteries',
    desc: 'C10 rated deep cycle batteries specially designed for longer back up and service life.',
    image: '/wp-content/uploads/2022/10/luminous-battery.jpg',
    catalogue: '/wp-content/uploads/2022/10/Luminous-Inverter.pdf',
    icon: <Battery size={20} />
  },
  {
    category: 'Lithium Battery',
    brand: 'Luminous',
    title: 'Lithium Iron Battery',
    desc: '3x longer life, 3x faster charging, and 15% more efficient than traditional lead-acid batteries.',
    image: '/wp-content/uploads/2022/10/luminous-lithium-iron-battery.gif',
    catalogue: '/wp-content/uploads/2022/10/catalogue-Lithium-ion-Battery.pdf',
    icon: <Battery size={20} />
  },
  {
    category: 'Home Inverter',
    brand: 'Microtek',
    title: 'Hybrid Technology UPS',
    desc: 'Noiseless performance with longer backups. Features fast charging modes and standard selection.',
    image: '/wp-content/uploads/2022/10/mikrotek-Solar-Management-Units.jpg',
    catalogue: '/wp-content/uploads/2022/10/Microtek-Home-UPS.pdf',
    icon: <Zap size={20} />
  },
  {
    category: 'Online UPS',
    brand: 'APC',
    title: 'Uninterrupted Power Supply',
    desc: 'Supplies power through rectifier and inverter combination for seamless transition during failure.',
    image: '/wp-content/uploads/2022/10/apc-ups.jpg',
    catalogue: '/wp-content/uploads/2022/10/APC-ONLINE-UPS-CATALOUGE-NEW.pdf',
    icon: <Zap size={20} />
  }
];


const ProductsPage = () => {
  const { openQuoteModal } = useModal();

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/wp-content/uploads/2022/10/working-process-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Our <span className="text-blue-500">Products</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <span>Home</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="text-white">Products</span>
          </div>
        </div>
      </section>

      {/* Featured Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Trusted Brands
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Premium Solar Solutions</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We partner with the world's leading energy brands to bring you the most reliable, efficient, and long-lasting solar technology available today.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-blue-600 rounded-full shadow-sm">
                      {product.brand}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-blue-500 mb-3">
                    {product.icon}
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{product.category}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                    {product.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <a 
                      href={product.catalogue} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all"
                    >
                      <Download size={14} />
                      Catalogue
                    </a>
                    <button 
                      onClick={() => openQuoteModal({ product: product.title })}
                      className="flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Can't Find What You're <br className="hidden md:block" /> Looking For?
              </h2>
              <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                Our inventory is constantly expanding. If you need a specific solar product or custom solution, our team is ready to help you source it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => openQuoteModal()}
                  className="w-full sm:w-auto bg-white text-blue-600 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl"
                >
                  Contact Sales
                </button>
                <button 
                  onClick={() => openQuoteModal()}
                  className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
