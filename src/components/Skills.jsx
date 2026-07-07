import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code2, Layout, ShieldAlert, Wrench, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const skillCategories = portfolioData.skills;

  const categories = ['All', ...skillCategories.map(cat => cat.category)];

  // Get icons based on category name
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming':
        return <Code2 size={18} />;
      case 'Frontend':
        return <Layout size={18} />;
      case 'Testing':
        return <ShieldAlert size={18} />;
      case 'Automation & QA Tools':
        return <Cpu size={18} />;
      case 'Database':
        return <Database size={18} />;
      case 'Tools':
        return <Wrench size={18} />;
      default:
        return <Code2 size={18} />;
    }
  };

  // Get color indicators for proficiency levels
  const getProgressColor = (category) => {
    switch (category) {
      case 'Testing':
      case 'Automation & QA Tools':
        return 'bg-accent'; // Emerald
      case 'Frontend':
      case 'Programming':
        return 'bg-primary'; // Cyan
      default:
        return 'bg-secondary'; // Indigo
    }
  };

  const getFilteredSkills = () => {
    if (activeTab === 'All') {
      return skillCategories;
    }
    return skillCategories.filter(cat => cat.category === activeTab);
  };

  return (
    <section 
      id="skills" 
      className="py-24 relative overflow-hidden dark:bg-[#070e1b] light:bg-[#f1f5f9] transition-colors duration-300"
    >
      {/* Background blur spots */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            02. Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold dark:text-white light:text-slate-900">
            Technical <span className="text-gradient-primary">Skills</span>
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary/20 shadow-md scale-105'
                  : 'glass-panel dark:text-gray-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-200'
              }`}
            >
              {cat !== 'All' && <span className="opacity-80">{getCategoryIcon(cat)}</span>}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredSkills().map((categoryObj) => (
              <motion.div
                layout
                key={categoryObj.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 shadow-glass-dark dark:hover:border-primary/20 light:hover:border-primary/30 group"
              >
                <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-200 dark:text-primary-light light:text-primary group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(categoryObj.category)}
                  </div>
                  <h4 className="font-display font-bold text-lg dark:text-white light:text-slate-900">
                    {categoryObj.category}
                  </h4>
                </div>

                <div className="space-y-4">
                  {categoryObj.items.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="dark:text-gray-300 light:text-slate-700">{skill.name}</span>
                        <span className="dark:text-gray-500 light:text-slate-400 font-mono">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar container */}
                      <div className="w-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full ${getProgressColor(categoryObj.category)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
