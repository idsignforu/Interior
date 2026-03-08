import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { blogPosts } from '../data/mock';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
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
            Insights & Ideas
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover the latest trends, tips, and insights in interior design 
            from our expert team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="p-8 lg:p-12">
                <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-600 text-sm font-medium rounded-full mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-slate-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    5 min read
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium rounded-full text-[#0a1628]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-24 bg-[#0a1628] rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Get the latest design trends, tips, and inspiration delivered 
              straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
