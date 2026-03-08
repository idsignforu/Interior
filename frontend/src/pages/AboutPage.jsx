import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { stats, team } from '../data/mock';
import { CheckCircle, Award, Users, Globe, Clock } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering designs that exceed expectations.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients to understand their vision and bring it to life.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace innovative design solutions and sustainable practices.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We deliver projects on time and within budget, every time.',
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
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Idesign4u
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Creating exceptional interior experiences since 2009. We transform spaces 
            into inspiring environments that reflect your unique vision.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#0a1628]">{stat.value}</p>
                <p className="text-slate-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                Crafting Spaces That Tell Your Story
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Idesign4u was founded with a simple yet powerful vision: to create interior 
                spaces that are not just beautiful, but meaningful. With offices in Dubai, 
                London, New York, and India, we've had the privilege of transforming spaces 
                for clients around the world.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our team of passionate designers, architects, and project managers brings 
                together diverse perspectives and expertise. We believe that great design 
                should be accessible, sustainable, and deeply personal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Award-winning designs', 'Sustainable practices', 'Client-focused approach', 'Global expertise'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-cyan-500" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600508772927-723e3ba305c5?w=400&q=80"
                alt="Our Work"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80"
                alt="Our Work"
                className="w-full h-64 object-cover rounded-2xl mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=400&q=80"
                alt="Our Work"
                className="w-full h-64 object-cover rounded-2xl -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80"
                alt="Our Work"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Meet the Experts
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our talented team brings together diverse expertise and a shared passion 
              for exceptional design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-1">{member.name}</h3>
                <p className="text-cyan-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
