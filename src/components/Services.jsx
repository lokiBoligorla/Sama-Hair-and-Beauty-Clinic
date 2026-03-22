import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, Droplets, Heart, SprayCan as Spray, Check, X, ArrowRight, UserCheck } from 'lucide-react';
import hairIcon from '../assets/hair_styling_closeup_1774153291882_1774153299140.png';
import botoxIcon from '../assets/Realimage4.png';
import facialIcon from '../assets/facial_clean_up.png';
import waxIcon from '../assets/waxing_threading.png';
import nailIcon from '../assets/manicure and pedicure.png';
import bridalIcon from '../assets/Bridal makeup.png';

const services = [
  {
    id: 1,
    icon: <Scissors className="text-gold" />,
    image: hairIcon,
    title: "Haircut & Styling",
    description: "Expert cuts tailored to your face shape and personal style.",
    longDescription: "Our signature haircut experience begins with a thorough consultation, followed by a relaxing hair wash. Whether you're looking for a classic trim or a bold transformation, our experts use advanced techniques to ensure your look is both modern and manageable. Each session is finished with a professional blow-dry and styling advice to maintain the results at home.",
    price: "From ₹500",
    features: ["Expert Consultation", "Signature Wash", "Modern Techniques", "Aftercare Advice"]
  },
  {
    id: 2,
    icon: <Droplets className="text-gold" />,
    image: botoxIcon,
    title: "Hair Botox",
    description: "Deep conditioning treatment for frizz-free, shiny, and healthy hair.",
    longDescription: "Sama's Hair Botox is a non-chemical, deep conditioning treatment that repairs damaged hair fibers. It infuses your hair with essential nutrients like collagen, vitamin E, and caviar oil. The result is exceptionally smooth, frizz-free, and youthful-looking hair that stays manageable for up to 3-4 months. Perfect for those looking to restore vitality without using harsh chemicals.",
    price: "From ₹3500",
    features: ["Zero Formaldehyde", "Nutrient Injection", "Anti-Frizz Coating", "Long-lasting Shine"]
  },
  {
    id: 3,
    icon: <Sparkles className="text-gold" />,
    image: facialIcon,
    title: "Facial & Cleanup",
    description: "Glow naturally with our premium skin rejuvenation treatments.",
    longDescription: "Reconnect with your skin's natural glow through our curated facial journeys. We use premium, skin-safe products tailored to your specific skin type (oily, dry, or combination). Our process includes deep cleansing, gentle exfoliation, steam, and a nourishing mask followed by a calming facial massage that improves circulation and reduces stress.",
    price: "From ₹800",
    features: ["Skin Analysis", "Deep Pore Cleansing", "Revitalizing Masks", "Lymphatic Massage"]
  },
  {
    id: 4,
    icon: <Check className="text-gold" />, 
    image: waxIcon,
    title: "Waxing & Threading",
    description: "Hygienic and gentle hair removal for smooth, clear skin.",
    longDescription: "We prioritize your comfort and hygiene. Our waxing services use high-quality gold or chocolate wax to minimize pain and prevent irritation. For facial hair, our threading specialists ensure clean lines and precision, perfect for shaping your eyebrows to frame your face beautifully. All tools are strictly sanitized for every client.",
    price: "From ₹50",
    features: ["Clinical Hygiene", "Sensitive Skin Wax", "Precision Threading", "Soothing After-gel"]
  },
  {
    id: 5,
    icon: <Heart className="text-gold" />,
    image: nailIcon,
    title: "Manicure & Pedicure",
    description: "Relaxing hand and foot care with premium polish and massage.",
    longDescription: "Indulge in the ultimate pampering for your hands and feet. Our mani-padi sessions go beyond aesthetics—we focus on nail health. Enjoy a relaxing soak, scrub, nail shaping, and cuticle care, followed by an intensive massage with essential oils. Choose from a vast collection of premium colors to finish your look.",
    price: "From ₹600",
    features: ["Essential Oil Soak", "Dead Skin Removal", "Shape & Polish", "Stress-Relief Massage"]
  },
  {
    id: 6,
    icon: <Spray className="text-gold" />,
    image: bridalIcon,
    title: "Bridal Makeup",
    description: "Look your absolute best on your special day with expert artistry.",
    longDescription: "Your wedding day is a once-in-a-lifetime moment. At Sama, we specialize in bridal looks that are elegant, long-lasting, and photogenic. From traditional South Indian bridal artistry to modern minimalist looks, we use high-definition, waterproof makeup that stays flawless throughout your events. Includes a pre-wedding trial/consultation.",
    price: "On Consultation",
    features: ["HD Makeup", "Hairstyle Design", "Saree/Dress Draping", "Personalized Trial"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 px-4 bg-deepBlue relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4"
          >
            Sama Excellence
          </motion.h2>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Our Professional <br />
            <span className="italic">Artistry</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              layoutId={`card-${service.id}`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-0 overflow-hidden rounded-3xl hover:border-gold/50 transition-all duration-500 group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <motion.div className="h-48 overflow-hidden" layoutId={`image-${service.id}`}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </motion.div>
              <div className="p-8">
                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-500 flex items-center gap-4">
                  {service.icon}
                  <h4 className="text-2xl font-serif group-hover:text-gold transition-colors">{service.title}</h4>
                </div>
                <p className="text-beige-light/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-gold font-bold">{service.price}</span>
                  <button className="text-xs uppercase tracking-widest text-beige hover:text-white transition-colors flex items-center gap-2">
                    Details <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            
            <motion.div 
              layoutId={`card-${selectedService.id}`}
              className="relative w-full max-w-4xl max-h-[90vh] bg-deepBlue rounded-[3rem] overflow-hidden shadow-2xl border border-gold/20 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <motion.div 
                className="md:w-1/2 h-64 md:h-auto overflow-hidden"
                layoutId={`image-${selectedService.id}`}
              >
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              </motion.div>

              <div className="md:w-1/2 p-10 md:p-12 overflow-y-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="glass p-3 rounded-2xl text-gold">
                    {selectedService.icon}
                  </div>
                  <h4 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">Service Spotlight</h4>
                </div>
                
                <h3 className="text-4xl font-serif mb-6 leading-tight">{selectedService.title}</h3>
                
                <p className="text-lg text-beige-light/80 leading-relaxed mb-10">
                  {selectedService.longDescription}
                </p>

                <div className="mb-10">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-gold mb-6 border-b border-gold/20 pb-2 inline-block">Key Highlights</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-beige-light/60">
                        <UserCheck size={16} className="text-gold" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-beige/50">Estimation</span>
                    <p className="text-2xl font-bold text-gold">{selectedService.price}</p>
                  </div>
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedService(null)}
                    className="bg-gold hover:bg-gold-light text-deepBlue px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-gold/10"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
