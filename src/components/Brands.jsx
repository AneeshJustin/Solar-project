import React from 'react';

const brands = [
  { name: 'Kirloskar', logo: '/wp-content/uploads/2022/10/kriloskar-logo.jpg' },
  { name: 'Adani', logo: '/wp-content/uploads/2022/10/adani-logo.jpg' },
  { name: 'Venus', logo: '/wp-content/uploads/2022/10/venus-logo.jpg' },
  { name: 'Amaron', logo: '/wp-content/uploads/2022/10/amaron-logo.jpg' },
  { name: 'Luminous', logo: '/wp-content/uploads/2022/10/luminous-logo-1.jpg' },
  { name: 'V-Guard', logo: '/wp-content/uploads/2022/10/vguard-logo.jpg' },
];

const Brands = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-12 border border-gray-200">
          Trusted Partners
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-70">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 cursor-pointer">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 p-1 bg-gray-100 rounded-full inline-flex items-center gap-4 px-6 max-w-full overflow-hidden">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Join 500+ Happy Customers</span>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600 uppercase">
                U{i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
