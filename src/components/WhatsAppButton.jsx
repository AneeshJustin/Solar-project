import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '911234567890'; // Dummy format: country code + number
  const message = 'Hello! I am interested in your solar services. Can you help me?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap">
        Chat with us
      </span>
      <FaWhatsapp size={32} />
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20 -z-10"></span>
    </a>
  );
};

export default WhatsAppButton;
