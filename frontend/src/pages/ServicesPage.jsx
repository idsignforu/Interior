import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { services } from '../data/mock';
import { Home, Building2, Briefcase, Gem, LayoutGrid, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Home,
  Building2,
  Briefcase,
  Gem,
  LayoutGrid,
};

const ServicesPage = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin with an in-depth discussion to understand your vision, requirements, and budget.',
    },
    {
      number: '02',
      title: 'Design Development',
      description: 'Our designers create detailed concepts, 3D visualizations, and material selections.',
    },
    {
      number: '03',
      title: 'Project Execution',
      description: 'Our skilled team brings the design to life with precision and attention to detail.',
    },
    {
      number: '04',
      title: 'Final Handover',
      description: 'We ensure every detail is perfect before handing over your transformed space.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-4">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to transform your spaces 
            into extraordinary environments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-cyan-200"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent size={28} className="text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-4 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {['Custom Design Solutions', 'Expert Consultation', 'Quality Materials'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-cyan-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Our Design Process
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A streamlined approach ensuring your project is delivered on time, 
              within budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-cyan-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-12">
                    <ArrowRight className="text-cyan-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Let's discuss how we can transform your space into something extraordinary.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
