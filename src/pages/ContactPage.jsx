import React from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/wp-content/uploads/2022/10/working-process-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <span>Contact</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="text-white">Support</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Info Column */}
            <div className="w-full lg:w-2/5">
              <div className="mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-6">Let's Talk About Your Solar Future</h2>
                <p className="text-gray-500 leading-relaxed text-lg">
                  Have questions about solar installation or maintenance? Our team of experts is ready to help you transition to clean, renewable energy.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Wegasolar Renewables, TC NO 7/1090, GROUND FLOOR, P.O, PARVATHY COMPLEX, Opposite Market, Sreekariyam, Thiruvananthapuram, Kerala 695017
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">Working Hours</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Monday to Saturday: 09:30 AM - 05:30 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-500 leading-relaxed font-bold">
                      +91-12345 67890<br />
                      +91-12345 67891<br />
                      +91-12345 67892
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-500 leading-relaxed font-bold">
                      hello@example.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-16 flex gap-4">
                {[
                  { icon: FaFacebookF, url: '#' },
                  { icon: FaInstagram, url: '#' },
                  { icon: FaLinkedinIn, url: '#' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url}
                    className="w-14 h-14 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-500"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="w-full lg:w-3/5">
              <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
                <form className="space-y-8" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! Our team will contact you shortly.');
                  e.target.reset();
                }}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border border-transparent focus:border-blue-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border border-transparent focus:border-blue-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                      <input 
                        required
                        type="text" 
                        placeholder="+91-XXXXX-XXXXX"
                        className="w-full bg-white rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border border-transparent focus:border-blue-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                      <select className="w-full bg-white rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border border-transparent focus:border-blue-500/20 appearance-none">
                        <option>Solar Installation</option>
                        <option>Maintenance Request</option>
                        <option>Product Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Your Message</label>
                    <textarea 
                      required
                      rows="6"
                      placeholder="How can we help you?"
                      className="w-full bg-white rounded-3xl px-8 py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border border-transparent focus:border-blue-500/20 resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white rounded-2xl py-6 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 group">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15781.929386146037!2d76.9173422!3d8.5495289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c22759f0501456f!2sWEGASOLAR%20RENEWABLES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1666249868780!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
