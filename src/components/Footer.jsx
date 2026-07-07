import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name, socials } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#050b14] dark:bg-[#050b14] light:bg-slate-100 border-t border-white/5 py-12 transition-colors duration-300">
      
      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo/Name */}
        <div className="text-center md:text-left">
          <h4 className="font-display font-extrabold text-lg dark:text-white light:text-slate-900 tracking-tight">
            {name}
          </h4>
          <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase mt-1">
            Computer Science Engineer
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 font-mono text-center md:order-2">
          &copy; {new Date().getFullYear()} G Vallabh Neelkant. All rights reserved.
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-4 md:order-3">
          <a 
            href={socials.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-xl glass-panel text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a 
            href={socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-xl glass-panel text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href={`mailto:${socials.email}`} 
            className="p-2 rounded-xl glass-panel text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
