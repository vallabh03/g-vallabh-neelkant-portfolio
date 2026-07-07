import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code, ShieldCheck, Award, Layers } from 'lucide-react';

const About = () => {
  const { bio, stats } = portfolioData.about;

  // Icon mapping for stats
  const getIcon = (id) => {
    switch (id) {
      case 'stat-projects':
        return <Code className="text-primary" size={24} />;
      case 'stat-exp':
        return <ShieldCheck className="text-secondary" size={24} />;
      case 'stat-cert':
        return <Award className="text-accent" size={24} />;
      case 'stat-sdlc':
        return <Layers className="text-amber-500" size={24} />;
      default:
        return <Code className="text-primary" size={24} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden dark:bg-dark-bg light:bg-light-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            01. Bio & Overview
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold dark:text-white light:text-slate-900">
            About <span className="text-gradient-primary">Me</span>
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h4 className="text-xl font-display font-semibold dark:text-gray-200 light:text-slate-800">
              Passionate about creating reliable, high-quality, and user-focused web products.
            </h4>
            <p className="dark:text-gray-400 light:text-slate-600 leading-relaxed text-base">
              I am a Computer Science Engineering graduate passionate about creating reliable and user-friendly software solutions. I have hands-on experience in Software Testing, Quality Assurance, Frontend Development, and Web Technologies.
            </p>
            <p className="dark:text-gray-400 light:text-slate-600 leading-relaxed text-base">
              I specialize in identifying software defects, writing test cases, performing functional testing, API testing, and collaborating with development teams to deliver high-quality applications.
            </p>
            
            <div className="pt-4 flex flex-col space-y-3 font-mono text-sm dark:text-gray-300 light:text-slate-700">
              <div className="flex items-center space-x-2">
                <span className="text-primary">⚡</span>
                <span>Highly structured, test-first development methodology.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">⚡</span>
                <span>Bridging the gap between UI excellence and backend integrity.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">⚡</span>
                <span>Active communicator and Agile sprint participant.</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-start space-y-4 hover:border-primary/20 dark:hover:border-primary/20 light:hover:border-primary/30 group"
              >
                <div className="p-3 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-100 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  {getIcon(stat.id)}
                </div>
                <div>
                  <h5 className="text-2xl sm:text-3xl font-display font-extrabold dark:text-white light:text-slate-900 group-hover:text-primary transition-colors">
                    {stat.value}
                  </h5>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide dark:text-gray-400 light:text-slate-500 uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
