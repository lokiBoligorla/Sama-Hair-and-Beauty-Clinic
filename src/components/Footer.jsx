import { Star, Instagram, MapPin, Phone, Heart } from 'lucide-react';
import logo from '../assets/sama_clinic_logo_1774153260968.png';

const Footer = () => {
  return (
    <footer className="bg-deepBlue py-24 px-6 border-t border-gold/10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 translate-y-[-10px]">
             <div className="flex items-center gap-3 mb-8">
               <img src={logo} alt="Sama Logo" className="h-12 w-auto" />
               <h4 className="text-3xl font-serif gold-text font-bold tracking-tight">SAMA</h4>
             </div>
            <p className="text-beige-light/70 leading-loose text-lg mb-8 max-w-sm">
              Hyderabad's premier sanctuary for bespoke hair and beauty transformations since 2017.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10 group hover:border-gold/30 transition-all">
              <span className="text-gold font-bold text-xl">4.9</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-beige/50 uppercase tracking-widest ml-2">Google Excellence</span>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h5 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-10">Quick Navigation</h5>
            <ul className="space-y-5">
              <li><a href="#" className="text-beige-light/60 hover:text-gold transition-all hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="#about" className="text-beige-light/60 hover:text-gold transition-all hover:translate-x-1 inline-block">Our Story</a></li>
              <li><a href="#services" className="text-beige-light/60 hover:text-gold transition-all hover:translate-x-1 inline-block">Services</a></li>
              <li><a href="#gallery" className="text-beige-light/60 hover:text-gold transition-all hover:translate-x-1 inline-block">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h5 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-10">Connect With Us</h5>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <MapPin size={20} className="text-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-beige-light/60 leading-relaxed italic">
                  Old Bowenpally, Secunderabad <br />
                  Hyderabad, Telangana 500011
                </p>
              </div>
              <div className="flex gap-4 group">
                <Phone size={20} className="text-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-beige-light/60 font-medium">099632 68889</p>
              </div>
              <a 
                href="https://www.instagram.com/samahairandbeautyclinic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-deepBlue px-6 py-3 rounded-2xl font-bold hover:bg-gold-light transition-all transform hover:-translate-y-1 shadow-lg shadow-gold/10"
              >
                <Instagram size={20} />
                <span>Instagram Feed</span>
              </a>
            </div>
          </div>

          {/* Badge Column */}
          <div className="lg:col-span-3">
            <div className="glass p-10 rounded-[3rem] border border-gold/10 relative group hover:border-gold/30 transition-all">
              <div className="absolute top-6 right-8 text-gold-light/20">
                <Heart size={48} />
              </div>
              <h5 className="text-white font-serif text-2xl mb-4 relative z-10">Women Owned <br />Business</h5>
              <p className="text-sm text-beige-light/50 leading-relaxed mb-8 relative z-10">
                A legacy of care and perfection serving the amazing women of Hyderabad for over 7 years.
              </p>
              <div className="h-16 w-16 rounded-full border-2 border-gold flex items-center justify-center bg-gold/5 group-hover:bg-gold transition-all duration-500">
                 <span className="text-gold group-hover:text-deepBlue font-serif italic text-2xl font-bold">S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-beige-light/30">
              © 2024 SAMA HAIR AND BEAUTY CLINIC
            </p>
            <div className="h-1 w-1 bg-gold/30 rounded-full hidden md:block"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-beige-light/30">
              ESTABLISHED 2017
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/40 hover:text-gold transition-colors cursor-default">
            CRAFTED FOR EXCELLENCE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
