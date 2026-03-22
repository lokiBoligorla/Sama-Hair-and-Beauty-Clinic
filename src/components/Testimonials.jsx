import React from 'react';
import SliderModule from 'react-slick';
const Slider = SliderModule.default || SliderModule;
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Very homely place and well-trained staff. Samantha takes personal care of every client. Highly recommend!",
    author: "Priya Sharma",
    rating: 5,
    tag: "Loyal Client"
  },
  {
    text: "Amazing service from the team. I've been coming here for 3 years now. The Hair Botox results are perfect every time.",
    author: "Ananya Reddy",
    rating: 5,
    tag: "Young Professional"
  },
  {
    text: "Wait was minimal, results were maximum. The hygiene standards here are top-notch. Best salon in Bowenpally.",
    author: "Sneha Kapur",
    rating: 5,
    tag: "First Visit"
  },
  {
    text: "Perfect results every single time. The staff is patient and very skilled. I travel from Banjara Hills just for this service.",
    author: "Kavita M.",
    rating: 5,
    tag: "Regular Client"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-deepBlue overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4"
          >
            Voice of Clients
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            What Our Beauties Say
          </motion.h3>
        </div>

        <Slider {...settings} className="testimonial-slider pb-12">
          {testimonials.map((t, index) => (
            <div key={index} className="px-3 outline-none">
              <div className="glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] h-full flex flex-col items-start relative overflow-hidden group min-h-[320px]">
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote size={60} className="md:w-[80px] md:h-[80px]" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold md:w-[16px] md:h-[16px]" />
                  ))}
                </div>
                
                <p className="text-beige-light/80 italic text-base md:text-lg leading-relaxed mb-8 relative z-10 flex-grow">
                  "{t.text}"
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-lg md:text-xl font-bold text-white">{t.author}</h4>
                  <p className="text-[10px] md:text-xs text-gold uppercase tracking-widest mt-1 font-semibold">{t.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
