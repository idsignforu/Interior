import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/mock';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <span
              className={`inline-block text-cyan-600 font-semibold text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Our Portfolio
            </span>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Projects That Define
              <span className="text-cyan-600"> Our Craft</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div
            className={`flex flex-wrap gap-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#0a1628] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.location} • {project.size}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a1628] text-white font-semibold rounded-full hover:bg-[#0d2040] transition-colors duration-300"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
