import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import highlightPhoto from '../assets/Highlate_photo_in_website.png';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-deepBlue overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border-2 border-gold/20 p-2">
              <div className="w-full h-full rounded-tl-[90px] rounded-br-[90px] overflow-hidden">
                <img
                  src={highlightPhoto}
                  alt="Sama Beauty Salon Atmosphere"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-serif gold-text font-bold mb-1">7+ Years</p>
              <p className="text-sm text-beige uppercase tracking-widest">Of Trusted Service</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Personal Approach to <br />
              <span className="italic">Beauty & Perfection</span>
            </h3>
            
            <p className="text-lg text-beige-light/70 leading-relaxed mb-8">
              Sama Hair and Beauty Clinic isn't just a salon; it's a sanctuary born from 7+ years of dedication to our loyal clients. Founded with the vision of providing professional, high-end services in a warm, homely environment.
            </p>
            
            <p className="text-lg text-beige-light/70 leading-relaxed mb-12 italic border-l-2 border-gold pl-6">
              "We believe beauty is personal. Our clients trust Samantha and our expert team for consistent, caring, and high-quality results every single time."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-start">
                <Award className="text-gold mb-3" size={32} />
                <h4 className="font-bold text-beige-light mb-1">4.9★ Rated</h4>
                <p className="text-xs text-beige/60">400+ Satisfied Reviews</p>
              </div>
              <div className="flex flex-col items-start">
                <Users className="text-gold mb-3" size={32} />
                <h4 className="font-bold text-beige-light mb-1">Expert Team</h4>
                <p className="text-xs text-beige/60">Highly Trained Stylists</p>
              </div>
              <div className="flex flex-col items-start">
                <Heart className="text-gold mb-3" size={32} />
                <h4 className="font-bold text-beige-light mb-1">Personalized</h4>
                <p className="text-xs text-beige/60">Tailored Beauty Care</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
