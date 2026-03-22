import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Clock, Home, Zap } from 'lucide-react';
import realSalon from '../assets/realimage7.png';

const WhyChooseUs = () => {
  const usps = [
    {
      icon: <Star size={32} />,
      title: "4.9★ Rated Excellence",
      desc: "Consistently rated as Hyderabad's top-tier beauty destination with 400+ reviews."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Hygienic Sanctuary",
      desc: "Your safety is paramount. We maintain clinical hygiene standards in a salon setting."
    },
    {
      icon: <Clock size={32} />,
      title: "7+ Years of Trust",
      desc: "A legacy of consistent results and deep-rooted customer loyalty since 2017."
    },
    {
      icon: <Home size={32} />,
      title: "Homely & Professional",
      desc: "The comfort of home combined with the precision of a high-end beauty clinic."
    },
    {
      icon: <Zap size={32} />,
      title: "Expert Consultation",
      desc: "Personalized advice from Samantha aunty and our highly trained specialists."
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 bg-deepBlue relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Trusted by Thousands <br />in Secunderabad</h3>
            <p className="text-lg text-beige-light/70 mb-12">
              We take pride in building long-term relationships. Our clients don't just come for a service; they come for a transformation they can trust.
            </p>
            
            <div className="space-y-8">
              {usps.map((usp, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="bg-gold/10 p-3 rounded-2xl text-gold">
                    {usp.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-beige-light">{usp.title}</h4>
                    <p className="text-beige-light/60">{usp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass aspect-square rounded-[2rem] overflow-hidden p-4 rotate-3">
               <img 
                 src={realSalon} 
                 alt="Professional Salon Space" 
                 className="w-full h-full object-cover rounded-2xl"
               />
            </div>
            <div className="absolute top-10 -left-10 bg-gold p-6 rounded-2xl -rotate-6 hidden lg:block">
              <span className="text-deepBlue font-black text-4xl italic">4.9★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
