import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, Terminal, Shield, Cpu, ShieldCheck } from 'lucide-react';

const Projects = () => {
  const projects = portfolioData.projects;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getProjectIcon = (index) => {
    switch (index) {
      case 0:
        return <Shield className="text-primary-light" size={28} />;
      case 1:
        return <Cpu className="text-secondary-light" size={28} />;
      default:
        return <Terminal className="text-primary-light" size={28} />;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden dark:bg-[#070e1b] light:bg-[#f1f5f9] transition-colors duration-300"
    >
      {/* Background neon blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            04. Case Studies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold dark:text-white light:text-slate-900">
            Featured <span className="text-gradient-primary">Projects</span>
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group rounded-3xl overflow-hidden glass-panel border border-white/5 shadow-glass-dark dark:hover:border-primary/20 light:hover:border-primary/30 p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Background gradient mask on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
              />

              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 rounded-2xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-200 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      {getProjectIcon(index)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold font-mono tracking-widest text-primary dark:text-primary-light uppercase">
                        {project.type}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-display font-bold dark:text-white light:text-slate-900 group-hover:text-primary transition-colors leading-snug mt-0.5">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base dark:text-gray-400 light:text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 mb-8">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider dark:text-gray-400 light:text-slate-500">
                    Key Features:
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm dark:text-gray-300 light:text-slate-700">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2">
                        <ShieldCheck size={14} className="text-accent flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Links footer */}
              <div>
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-semibold font-mono rounded-full bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-200 border border-white/5 dark:text-gray-300 light:text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs text-gray-500 font-medium">Source & Live Code</span>
                  <div className="flex items-center space-x-3">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono text-gray-400 hover:text-white dark:hover:text-white light:hover:text-slate-800 transition-colors"
                    >
                      <Github size={14} />
                      <span>Codebase</span>
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-primary hover:text-primary-light transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
