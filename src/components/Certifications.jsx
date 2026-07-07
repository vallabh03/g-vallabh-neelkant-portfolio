import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Certifications = () => {
  const certifications = portfolioData.certifications;

  return (
    <section 
      id="certifications" 
      className="py-24 relative overflow-hidden dark:bg-[#070e1b] light:bg-[#f1f5f9] transition-colors duration-300"
    >
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            06. Endorsements
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold dark:text-white light:text-slate-900">
            Licenses &amp; <span className="text-gradient-primary">Certifications</span>
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-primary/20 dark:hover:border-primary/20 light:hover:border-primary/30 group transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient flare on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
              />

              <div className="space-y-4">
                {/* Header icons */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-200 border border-white/5 group-hover:scale-110 transition-transform duration-300 dark:text-primary-light light:text-primary">
                    <Award size={20} />
                  </div>
                  <span className="flex items-center space-x-1 text-[10px] font-bold font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-md">
                    <ShieldCheck size={10} className="mr-0.5" />
                    <span>VERIFIED</span>
                  </span>
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-display font-extrabold text-base sm:text-lg dark:text-white light:text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-semibold text-secondary-light tracking-wide mt-1.5 leading-relaxed">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Issued: {cert.date}</span>
                <a 
                  href={cert.credentialUrl}
                  className="flex items-center space-x-0.5 text-primary hover:text-primary-light transition-colors"
                >
                  <span>Verify</span>
                  <ArrowUpRight size={10} />
                </a>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;
