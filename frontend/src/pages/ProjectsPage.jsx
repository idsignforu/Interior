import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { projects } from '../data/mock';
import { ArrowUpRight, Filter } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our collection of transformative interior design projects 
            spanning residential, commercial, and hospitality spaces.
          </p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter size={20} className="text-slate-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#0a1628] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
