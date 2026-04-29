import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useModal } from '../context/ModalContext';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isQuoteModalOpen, openQuoteModal, closeQuoteModal } = useModal();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Inverter & Battery', path: '/inverter-battery' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full flex flex-col fixed top-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      {!isScrolled && (
        <div className="bg-[#1e293b] text-gray-300 py-2.5 px-4 md:px-12 flex flex-col lg:flex-row justify-between items-center text-xs font-medium">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone size={14} className="text-blue-500" />
              <span>+91-1234567890</span>
            </a>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={14} className="text-blue-500" />
              <span>hello@example.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-500" />
              <span>City Center, Kerala, India</span>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-2 lg:mt-0">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/wegasolartrivandrum" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-all hover:scale-110">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.instagram.com/wegasolar/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-all hover:scale-110">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.linkedin.com/company/wegasolar/about/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all hover:scale-110">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 px-4 md:px-12 py-4 flex justify-between items-center ${
        isScrolled ? 'bg-white shadow-xl py-3' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="flex items-center">
          <Link to="/" className="transition-transform hover:scale-105 flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent animate-spin-slow"></div>
            </div>
            <span className={`font-black tracking-tighter text-2xl ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              WEGA<span className="text-blue-600">SOLAR</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 font-bold text-gray-800 uppercase tracking-tight text-[13px]">
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link 
                to={item.path}
                className={`py-2 transition-colors relative z-10 ${
                  location.pathname === item.path ? 'text-blue-600' : 'hover:text-blue-600 text-gray-700'
                }`}
              >
                {item.name}
              </Link>
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button 
            onClick={() => openQuoteModal()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[100] transition-all duration-500 transform ${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin-slow"></div>
              </div>
              <span className="font-black text-xl tracking-tighter">
                WEGA<span className="text-blue-600">SOLAR</span>
              </span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col gap-6 text-xl font-bold text-gray-800 uppercase">
            {navItems.map((item) => (
              <li key={item.path} onClick={() => setIsMenuOpen(false)}>
                <Link to={item.path} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <ChevronRight size={20} className="text-blue-600" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-12">
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl mb-8"
            >
              GET A QUOTE
            </button>
            <div className="flex justify-center gap-8 text-gray-400">
              <FaFacebookF size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={closeQuoteModal}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-fade-in-up">
            <button 
              onClick={closeQuoteModal}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all"
            >
              <X size={20} />
            </button>
            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Request a Quote</h3>
              <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you with a custom solution.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('Quote request submitted successfully!');
              closeQuoteModal();
            }}>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-transparent focus:border-blue-600/20 rounded-xl px-6 py-4 focus:outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone</label>
                <input required type="tel" placeholder="+91 XXXX-XXXXXX" className="w-full bg-gray-50 border border-transparent focus:border-blue-600/20 rounded-xl px-6 py-4 focus:outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Service</label>
                <select className="w-full bg-gray-50 border border-transparent focus:border-blue-600/20 rounded-xl px-6 py-4 focus:outline-none transition-all">
                  <option>Residential Solar</option>
                  <option>Commercial Solar</option>
                  <option>Maintenance</option>
                  <option>Battery Storage</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all uppercase tracking-widest text-xs mt-4">
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
