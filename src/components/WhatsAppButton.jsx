import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919963268889?text=Hi%20Sama%20Clinic,%20I'd%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-deepBlue py-1.5 px-3 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with Samantha
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45"></div>
      </div>
      <MessageCircle size={32} className="fill-white/10" />
    </a>
  );
};

export default WhatsAppButton;
