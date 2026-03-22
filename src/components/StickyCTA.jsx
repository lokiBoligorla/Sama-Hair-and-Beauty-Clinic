import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const StickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-8 bg-gradient-to-t from-deepBlue via-deepBlue to-transparent pointer-events-none">
      <div className="max-w-md mx-auto flex gap-3 pointer-events-auto">
        <a 
          href="tel:09963268889"
          className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-2xl transition-all"
        >
          <Phone size={20} />
          <span>Call Now</span>
        </a>
        <a 
          href="https://wa.me/919963268889"
          className="flex-1 bg-gold hover:bg-gold-dark text-deepBlue font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-2xl transition-all shadow-gold/20"
        >
          <Calendar size={20} />
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
