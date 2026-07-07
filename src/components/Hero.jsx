import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Terminal, ShieldAlert } from 'lucide-react';

const Hero = () => {
  const titles = [
    "Software QA Engineer",
    "Frontend Developer",
    "Computer Science Engineer"
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 35);
    } else {
      timer = setTimeout(() => {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 70);
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex(prev => (prev + 1) % titles.length);
    }
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden dark:bg-dark-bg light:bg-light-bg transition-colors duration-300"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left Column: Text & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/10 dark:to-secondary/10 light:from-slate-200 light:to-slate-100 border border-primary/20 dark:border-primary/20 light:border-slate-300 px-4 py-1.5 rounded-full w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider dark:text-primary-light light:text-primary font-mono">
              AVAILABLE FOR ROLES
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight dark:text-white light:text-slate-900">
              G Vallabh <span className="text-gradient-primary">Neelkant</span>
            </h1>
            
            <div className="h-8 sm:h-10 flex items-center">
              <span className="text-lg sm:text-2xl font-mono dark:text-gray-300 light:text-slate-700 font-medium">
                {text}
              </span>
              <span className="inline-block w-2.5 h-6 ml-1.5 bg-primary cursor-blink" />
            </div>
          </div>

          <p className="text-base sm:text-lg dark:text-gray-400 light:text-slate-600 max-w-xl leading-relaxed">
            Passionate Computer Science Engineer with experience in Software Testing, Quality Assurance, Frontend Development, and building reliable web applications. Skilled in Manual Testing, Automation fundamentals, React.js, API Testing, and modern software development practices.
          </p>

          {/* Socials & Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <div className="flex gap-4">
              <a 
                href="/g_vallabh_neelkant_resume.txt" 
                download="G_Vallabh_Neelkant_Resume.txt"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white font-medium px-6 py-3 rounded-xl hover:shadow-glow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Download size={18} />
                <span>Resume</span>
              </a>

              <button 
                onClick={handleScrollToContact}
                className="flex items-center justify-center space-x-2 glass-panel dark:hover:text-primary dark:border-white/10 dark:text-white light:border-slate-300 light:text-slate-800 light:hover:text-primary hover:bg-primary/5 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center sm:justify-start space-x-3 sm:pl-4 sm:border-l dark:border-white/10 light:border-slate-300 h-10">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Code Mockup & Profile Pic */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          {/* Avatar and Glowing Borders Container */}
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 mb-6 flex items-center justify-center">
            {/* Glowing borders */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500 scale-105" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full dark:bg-dark-bg light:bg-light-bg overflow-hidden relative">
                <img 
                  src="/avatar.png" 
                  alt="G Vallabh Neelkant Profile Avatar" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* IDE Console Mini Mockup */}
          <div className="w-full max-w-sm glass-panel rounded-xl overflow-hidden shadow-glass-dark border border-white/5 font-mono text-xs">
            <div className="bg-[#070e1b] px-4 py-2 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <Terminal size={12} className="text-primary-light" />
                <span className="text-[10px] text-gray-400 font-sans">qa_matrix.js</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 active-dot"></span>
            </div>
            <div className="p-4 space-y-1.5 text-gray-400 leading-relaxed">
              <p><span className="text-secondary-light">const</span> engineer = &#123;</p>
              <p className="pl-4">name: <span className="text-emerald-400">'G Vallabh Neelkant'</span>,</p>
              <p className="pl-4">role: <span className="text-emerald-400">'QA & Frontend Dev'</span>,</p>
              <p className="pl-4">stack: [<span className="text-cyan-400">'React.js'</span>, <span className="text-cyan-400">'JS'</span>, <span className="text-cyan-400">'Testing'</span>],</p>
              <p className="pl-4">coverage: <span className="text-amber-400">'100%'</span>,</p>
              <p className="pl-4">bugsFound: <span className="text-secondary-light">function</span>() &#123;</p>
              <p className="pl-8 text-emerald-400">return 'Defect fixed!';</p>
              <p className="pl-4">&#125;</p>
              <p>&#125;;</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 select-none pointer-events-none">
        <span className="text-[10px] dark:text-gray-500 light:text-slate-400 uppercase tracking-widest font-semibold font-mono">
          Scroll Down
        </span>
        <div className="w-[18px] h-[30px] rounded-full border-2 border-slate-500 flex items-start justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 10, 0] 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
