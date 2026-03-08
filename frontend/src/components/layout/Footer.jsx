import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { companyInfo, officeLocations, footerLinks } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="https://customer-assets.emergentagent.com/job_d660cf07-6d2e-4ab5-9687-8e319a66e0de/artifacts/goscetpf_WhatsApp%20Image%202026-03-06%20at%203.51.44%20PM-Photoroom.png"
                alt="Idesign4u Logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transform your space into a masterpiece of design and functionality. 
              Premium interior design services across Dubai, London, New York, and India.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hyderabad Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Plot 42, HITEC City,<br />Madhapur, Hyderabad 500081
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                <a
                  href="tel:+914023556789"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  +91 40 2355 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:hello@idesign4u.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  hello@idesign4u.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Idesign4u. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
