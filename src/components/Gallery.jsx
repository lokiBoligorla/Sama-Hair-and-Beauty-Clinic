import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

import img1 from '../assets/realimage1.png';
import img2 from '../assets/Realimage2.png';
import img3 from '../assets/Realimage3.png';
import img4 from '../assets/Realimage4.png';
import img5 from '../assets/Realimage5.png';
import img6 from '../assets/realimage6.png';
import img7 from '../assets/realimage7.png';
import img8 from '../assets/realimage8.png';
import closeup from '../assets/hair_styling_closeup_1774153291882_1774153299140.png';

const galleryItems = [
  { id: 1, category: 'Hair', title: 'Professional Styling', img: img1 },
  { id: 2, category: 'Skin', title: 'Premium Care', img: img2 },
  { id: 3, category: 'Salon', title: 'Authentic Experience', img: img3 },
  { id: 4, category: 'Hair', title: 'Hair Transformations', img: img4 },
  { id: 5, category: 'Skin', title: 'Bridal Artistry', img: img5 },
  { id: 6, category: 'Salon', title: 'Clinical Hygiene', img: img6 },
  { id: 7, category: 'Hair', title: 'Modern Cuts', img: img7 },
  { id: 8, category: 'Skin', title: 'Rejuvenation', img: img8 },
  { id: 9, category: 'Hair', title: 'Style Closeup', img: closeup },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Hair', 'Skin', 'Salon'];
  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-4 bg-deepBlue">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Our Visual Story</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-12">Beauty Captured</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${filter === cat ? 'bg-gold text-deepBlue' : 'glass text-beige-light hover:border-gold/50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] group overflow-hidden rounded-[2rem] cursor-pointer"
                onClick={() => setSelectedImage(item.img)}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-deepBlue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <Maximize2 className="text-gold mb-2" size={32} />
                  <span className="text-white font-serif text-xl">{item.title}</span>
                  <span className="text-xs text-gold uppercase tracking-widest mt-1">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-gold">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
