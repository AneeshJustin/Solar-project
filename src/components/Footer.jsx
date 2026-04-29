import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 md:pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
        {/* Company Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-xl">
              <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin-slow"></div>
            </div>
            <span className="font-black text-2xl tracking-tighter">
              WEGA<span className="text-blue-600">SOLAR</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            Wegasolar is the premier provider of sustainable solar energy solutions in South India. We empower homes and businesses to take control of their energy future with reliable, high-performance technology.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="bg-white/5 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Icon size={20} className="opacity-80 hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-black mb-10 relative inline-block">
            Explore
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-sm font-bold text-gray-400">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about-us' },
              { name: 'Services', path: '/services' },
              { name: 'Products', path: '/products' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact Us', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="flex items-center gap-2 hover:text-white transition-colors group">
                  <ChevronRight size={14} className="text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-black mb-10 relative inline-block">
            Solar Solutions
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-sm font-bold text-gray-400">
            {['Residential Installation', 'Commercial Energy', 'Maintenance Plans', 'Battery Storage', 'Smart Monitoring'].map((item) => (
              <li key={item}>
                <Link to="#" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <ChevronRight size={14} className="text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h4 className="text-lg font-black mb-10 relative inline-block">
            Get in Touch
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h4>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-600/20 p-3 rounded-xl text-blue-500">
                <MapPin size={20} />
              </div>
              <div className="text-sm">
                <p className="text-white font-bold mb-1">Office Location</p>
                <p className="text-gray-400">City Center, Kerala, India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600/20 p-3 rounded-xl text-blue-500">
                <Phone size={20} />
              </div>
              <div className="text-sm">
                <p className="text-white font-bold mb-1">Direct Contact</p>
                <p className="text-gray-400">+91-12345 67890</p>
              </div>
            </div>
            <div className="mt-8">
              <form 
                className="relative"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing!');
                  e.target.reset();
                }}
              >
                <input 
                  type="email" 
                  required
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                />
                <button type="submit" className="absolute right-2 top-2 bg-blue-600 p-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Wega Solar. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
