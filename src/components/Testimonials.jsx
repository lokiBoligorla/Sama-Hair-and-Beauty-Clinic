import React from 'react';
import SliderModule from 'react-slick';
const Slider = SliderModule.default || SliderModule;
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Very homely place and well-trained staff. Samantha aunty takes personal care of every client. Highly recommend!",
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
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-black/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Voice of Clients</h2>
          <h3 className="text-4xl md:text-5xl font-serif">What Our Beauties Say</h3>
        </div>

        <Slider {...settings} className="testimonial-slider pb-12">
          {testimonials.map((t, index) => (
            <div key={index} className="px-4 outline-none">
              <div className="glass p-10 rounded-[3rem] h-full flex flex-col items-start relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote size={80} />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-beige-light/80 italic text-lg leading-relaxed mb-8 relative z-10">
                  "{t.text}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-gold uppercase tracking-widest mt-1">{t.tag}</p>
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
