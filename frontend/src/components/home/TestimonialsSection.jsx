import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/mock';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a1628] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Trusted <span className="text-cyan-400">Partnership</span>
          </h2>
          <p
            className={`text-slate-400 text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            What our clients say about working with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Quote size={28} className="text-cyan-400" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500"
                />
                <div>
                  <p className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-cyan-500'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
