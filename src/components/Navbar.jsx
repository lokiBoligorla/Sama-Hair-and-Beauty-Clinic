import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-serif gold-text font-bold">SAMA</span>
              <span className="hidden sm:inline text-xs tracking-widest text-beige uppercase">Hair and Beauty Clinic</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-beige-light hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919963268889"
              className="bg-gold hover:bg-gold-dark text-deepBlue px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-beige-light hover:text-gold focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-deepBlue bg-opacity-95 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif text-beige-light hover:text-gold"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:09963268889"
            className="flex items-center gap-2 bg-gold text-deepBlue px-8 py-3 rounded-full text-lg font-bold"
          >
            <Phone size={20} /> Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
