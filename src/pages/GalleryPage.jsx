import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/wp-content/uploads/2022/11/wega-solar-1.jpg', title: 'Solar Installation 1' },
  { id: 2, src: '/wp-content/uploads/2022/11/wega-solar-2.jpg', title: 'Solar Installation 2' },
  { id: 3, src: '/wp-content/uploads/2022/11/wega-solar-3.jpg', title: 'Solar Installation 3' },
  { id: 4, src: '/wp-content/uploads/2022/11/wega-solar-4.jpg', title: 'Solar Installation 4' },
  { id: 5, src: '/wp-content/uploads/2022/11/wega-solar-5.jpg', title: 'Solar Installation 5' },
  { id: 6, src: '/wp-content/uploads/2022/11/wega-solar-6.jpg', title: 'Solar Installation 6' },
  { id: 7, src: '/wp-content/uploads/2022/11/wega-solar-7.jpg', title: 'Solar Installation 7' },
  { id: 8, src: '/wp-content/uploads/2022/11/wega-solar-8.jpg', title: 'Solar Installation 8' },
  { id: 9, src: '/wp-content/uploads/2022/11/wega-solar-9.jpg', title: 'Solar Installation 9' },
  { id: 10, src: '/wp-content/uploads/2022/11/wega-solar-10.jpg', title: 'Solar Installation 10' },
  { id: 11, src: '/wp-content/uploads/2022/11/wega-solar-11.jpg', title: 'Solar Installation 11' },
  { id: 12, src: '/wp-content/uploads/2022/11/wega-solar-12.jpg', title: 'Solar Installation 12' },
  { id: 13, src: '/wp-content/uploads/2022/11/wega-solar-13.jpg', title: 'Solar Installation 13' },
  { id: 14, src: '/wp-content/uploads/2022/11/wega-solar-14.jpg', title: 'Solar Installation 14' },
  { id: 15, src: '/wp-content/uploads/2022/11/wega-solar-15.jpg', title: 'Solar Installation 15' },
  { id: 16, src: '/wp-content/uploads/2022/11/wega-solar-16.jpg', title: 'Solar Installation 16' },
  { id: 17, src: '/wp-content/uploads/2022/11/wega-solar-17.jpg', title: 'Solar Installation 17' },
  { id: 18, src: '/wp-content/uploads/2022/11/wega-solar-18.jpg', title: 'Solar Installation 18' },
  { id: 19, src: '/wp-content/uploads/2022/11/wega-solar-19.jpg', title: 'Solar Installation 19' },
  { id: 20, src: '/wp-content/uploads/2022/11/wega-solar-20.jpg', title: 'Solar Installation 20' }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/wp-content/uploads/2022/10/working-process-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Project <span className="text-blue-500">Gallery</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <span>Portfolio</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="text-white">Our Works</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-3xl break-inside-avoid"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">Solar Installation</p>
                    <h3 className="text-white text-xl font-black">{image.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 transition-all duration-500"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={closeLightbox}
          >
            <X size={40} />
          </button>

          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-all"
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-all"
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl animate-subtle-zoom"
            />
            <div className="mt-8 text-center">
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Project Details</p>
              <h3 className="text-white text-3xl font-black">{galleryImages[selectedImage].title}</h3>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs font-bold">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '500+', label: 'Projects Done' },
              { val: '1000+', label: 'Panels Installed' },
              { val: '15+', label: 'MW Generated' },
              { val: '99%', label: 'Happy Clients' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-6xl font-black text-blue-500 mb-4">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
