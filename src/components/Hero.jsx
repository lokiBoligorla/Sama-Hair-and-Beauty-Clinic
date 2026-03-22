import React from 'react';
import SliderModule from 'react-slick';
const Slider = SliderModule.default || SliderModule;
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Note: Using images from local src/assets folder
import heroBanner from '../assets/bannerimage.png';
import real1 from '../assets/realimage1.png';
import real2 from '../assets/Realimage2.png';
import hero3 from '../assets/beauty_treatment_relaxing_1774153303241_1774153315664.png';
import closeup from '../assets/hair_styling_closeup_1774153291882_1774153299140.png';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    appendDots: dots => (
      <div style={{ bottom: '30px' }}>
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
  };

  const slides = [
    {
      title: "Experience Beauty, Redefined with Care & Perfection",
      subtitle: "Hyderabad's most trusted sanctuary for hair and beauty excellence.",
      image: heroBanner,
    },
    {
      title: "Authentic Results, Every Single Time",
      subtitle: "Personalized care from Samantha aunty and our expert team.",
      image: real1,
    },
    {
      title: "Premium Hair & Beauty Solutions",
      subtitle: "Transforming looks with modern techniques and authentic care.",
      image: real2,
    },
    {
      title: "Artistry in Every Detail",
      subtitle: "Experience the precision of masterful hair styling and close-up perfection.",
      image: closeup,
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen outline-none">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-110 hover:scale-100"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-deepBlue/40 via-deepBlue/20 to-deepBlue"></div>
            </div>
            
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-7xl font-serif mb-6 leading-tight"
              >
                {slide.title}
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-2xl font-light text-beige-light/80 mb-10 max-w-2xl"
              >
                {slide.subtitle}
              </motion.p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://wa.me/919963268889"
                  className="bg-gold hover:bg-gold-dark text-deepBlue px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:09963268889"
                  className="glass border border-gold/30 hover:border-gold text-beige-light px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
                >
                  Call: 099632 68889
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
