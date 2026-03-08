import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1920&q=80"
          alt="Interior Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span
              className={`inline-block text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Let's Create Together
            </span>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Ready to Transform
              <span className="block text-cyan-400">Your Space?</span>
            </h2>
            <p
              className={`text-slate-300 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Start your design journey with us today. Our team of experts is ready 
              to bring your vision to life with innovative solutions tailored to your needs.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right - Contact Card */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+914023556789"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Call Us</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      +91 40 2355 6789
                    </p>
                  </div>
                </a>
                
                <a
                  href="mailto:hello@idesign4u.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email Us</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      hello@idesign4u.com
                    </p>
                  </div>
                </a>
              </div>

              <p className="text-slate-400 text-sm text-center">
                Available Mon - Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
