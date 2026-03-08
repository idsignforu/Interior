import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { stats, team } from '../../data/mock';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const highlights = [
    'Award-winning design team',
    'Sustainable design practices',
    'Client-centric approach',
    'On-time project delivery',
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span
              className={`inline-block text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              About Us
            </span>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Crafting Spaces That
              <span className="text-cyan-600"> Inspire</span>
            </h2>
            <p
              className={`text-slate-600 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Founded with a passion for exceptional design, Idesign4u has grown into a 
              globally recognized interior design agency. Our team of talented designers, 
              architects, and project managers work collaboratively to transform spaces 
              into extraordinary environments that reflect our clients' unique vision.
            </p>

            {/* Highlights */}
            <div
              className={`grid grid-cols-2 gap-4 mb-10 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-4 gap-6 pt-8 border-t border-slate-200 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#0a1628]">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Team Images */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 md:col-span-1 row-span-2">
                <div className="relative h-full overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600508772927-723e3ba305c5?w=600&q=80"
                    alt="Modern Office Design"
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-semibold">Our Design Philosophy</p>
                    <p className="text-slate-300 text-sm">Where innovation meets elegance</p>
                  </div>
                </div>
              </div>

              {/* Small Images */}
              <div className="hidden md:block overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=400&q=80"
                  alt="Kitchen Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80"
                  alt="Living Room Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
