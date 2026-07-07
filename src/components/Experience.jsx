import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section 
      id="experience" 
      className="py-24 relative overflow-hidden dark:bg-dark-bg light:bg-light-bg transition-colors duration-300"
    >
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            03. Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold dark:text-white light:text-slate-900">
            Professional <span className="text-gradient-primary">Experience</span>
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full dark:bg-dark-bg light:bg-light-bg border border-primary shadow-glow-primary/40 shadow-sm z-10">
                <Briefcase size={12} className="text-primary" />
              </span>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 shadow-glass-dark hover:border-primary/20 dark:hover:border-primary/20 light:hover:border-primary/30 transition-all duration-300 group">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-4 border-b border-white/5">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-display font-extrabold dark:text-white light:text-slate-900 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-secondary-light tracking-wide mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Badge Period */}
                  <div className="inline-flex items-center space-x-1.5 bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-200 border border-white/5 dark:text-gray-300 light:text-slate-700 px-3.5 py-1 rounded-full text-xs font-semibold w-fit h-fit">
                    <Calendar size={12} className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Project Context */}
                <div className="mb-6 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-100/80 px-4 py-2.5 rounded-xl border border-white/5 w-fit">
                  <span className="text-xs font-semibold font-mono dark:text-gray-400 light:text-slate-600">
                    Project Context: <span className="dark:text-cyan-400 light:text-cyan-600 font-bold">{exp.project}</span>
                  </span>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-3.5 text-sm sm:text-base dark:text-gray-300 light:text-slate-700">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{resp}</span>
                    </motion.li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
