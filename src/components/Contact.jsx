import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Connect With Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Visit Our Sanctuary <br />for a Transformation</h3>
            
            <div className="space-y-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="glass p-4 rounded-2xl text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-beige-light">Call Us</h4>
                  <p className="text-beige-light/60">099632 68889</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="glass p-4 rounded-2xl text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-beige-light">Location</h4>
                  <p className="text-beige-light/60">Old Bowenpally, Secunderabad, <br />Hyderabad - 500011</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="glass p-4 rounded-2xl text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-beige-light">Opening Hours</h4>
                  <p className="text-beige-light/60">Mon - Sun: 10:00 AM - 08:30 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://www.instagram.com/samahairandbeautyclinic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 rounded-full text-beige-light hover:text-gold transition-colors"
                title="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="glass p-10 rounded-[3rem]">
            <h4 className="text-2xl font-serif mb-8">Book an Appointment</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-beige/60 mb-2 ml-1">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors text-beige-light" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-beige/60 mb-2 ml-1">Phone</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors text-beige-light" placeholder="Your Number" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-beige/60 mb-2 ml-1">Preferred Service</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors text-beige-light appearance-none">
                  <option className="bg-deepBlue">Hair Styling</option>
                  <option className="bg-deepBlue">Hair Botox</option>
                  <option className="bg-deepBlue">Facial & Skin Care</option>
                  <option className="bg-deepBlue">Bridal Package</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-beige/60 mb-2 ml-1">Message (Optional)</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors text-beige-light h-32" placeholder="Tell us more..."></textarea>
              </div>
              <button className="w-full bg-gold hover:bg-gold-dark text-deepBlue py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105">
                Request a Callback
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Embed Placeholder */}
        <div className="mt-24 h-96 rounded-[3rem] overflow-hidden border border-white/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.348633783478!2d78.472!3d17.476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzMzLjYiTiA3OMKwMjgnMTkuMiJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Sama Hair and Beauty Clinic Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
