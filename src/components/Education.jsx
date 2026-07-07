import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educations = portfolioData.education;

  return (
    <section 
      id="education" 
      className="py-24 relative overflow-hidden dark:bg-dark-bg light:bg-light-bg transition-colors duration-300"
    >
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            05. Credentials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold dark:text-white light:text-slate-900">
            Education <span className="text-gradient-primary">&amp; Academic</span>
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-primary/20 dark:hover:border-primary/20 light:hover:border-primary/30 group transition-all duration-300"
            >
              
              <div className="space-y-4">
                {/* Icon & Year */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-200 border border-white/5 group-hover:scale-110 transition-transform duration-300 dark:text-primary-light light:text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <span className="flex items-center space-x-1 font-mono text-[10px] font-semibold dark:text-gray-400 light:text-slate-500 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 px-3 py-1 rounded-full border border-white/5">
                    <Calendar size={10} className="text-primary-light mr-0.5" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl dark:text-white light:text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-secondary-light tracking-wide mt-1.5 leading-relaxed">
                    {edu.institution}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-1.5 text-xs text-gray-500 dark:text-gray-400 light:text-slate-500">
                  <MapPin size={12} className="text-primary-light" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Grade / Badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono font-bold text-gray-500 tracking-wider">Academic Grade</span>
                <div className="flex items-center space-x-1 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-xs font-bold text-accent">
                  <Award size={12} />
                  <span>{edu.grade}</span>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
