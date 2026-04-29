import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center">
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 animate-subtle-zoom"
        style={{ 
          backgroundImage: 'url("/wp-content/uploads/2022/10/working-process-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Solar Energy Specialist - Trivandrum
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 md:mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Powering Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Sustainable</span> Future
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Wegasolar delivers premium residential and commercial solar solutions across Kerala. Reduce your bills and carbon footprint today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/products" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex justify-center items-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              View Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => alert('Story video coming soon!')}
              className="flex items-center justify-center gap-4 text-white hover:text-blue-400 transition-colors group"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full group-hover:bg-white/20 transition-all border border-white/20">
                <Play fill="currentColor" size={20} />
              </div>
              <span className="font-bold tracking-wide">Watch Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-white text-[10px] uppercase font-bold tracking-widest">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
