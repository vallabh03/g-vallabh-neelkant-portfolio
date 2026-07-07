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
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none -z-10" />

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

        {/* Right Column: Sleek QA Terminal Dashboard */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 w-full max-w-md mx-auto"
        >
          <div className="glass-panel rounded-2xl overflow-hidden shadow-glass-dark border border-white/5 font-mono text-xs sm:text-sm">
            {/* Terminal Header */}
            <div className="bg-[#070e1b] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal size={14} className="text-primary" />
                <span className="text-xs text-gray-400 font-sans font-semibold">neelkant-qa-suite.sh</span>
              </div>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-5 space-y-4 text-gray-400">
              <div className="space-y-1">
                <p className="text-primary font-semibold">$ run-test-pipeline --env=prod</p>
                <p className="text-xs text-gray-500 font-sans">Executing automated testing suite...</p>
              </div>

              <div className="space-y-2 border-l border-white/5 pl-3 py-1 text-xs">
                <p className="flex items-center space-x-2">
                  <span className="text-accent font-bold">✔</span>
                  <span>Smoke Verification ... <span className="text-accent font-bold font-sans">PASSED</span></span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-accent font-bold">✔</span>
                  <span>UI Functional Validation ... <span className="text-accent font-bold font-sans">PASSED</span></span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-accent font-bold">✔</span>
                  <span>API Integration Coverage ... <span className="text-accent font-bold font-sans">100%</span></span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-accent font-bold">✔</span>
                  <span>Cross-Browser Testing ... <span className="text-accent font-bold font-sans">PASSED</span></span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-accent font-bold">✔</span>
                  <span>Regression Check (No regressions) ... <span className="text-accent font-bold font-sans">OK</span></span>
                </p>
              </div>

              {/* Graphical summary */}
              <div className="bg-[#040810]/60 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-sans">Pipeline Metrics</h4>
                  <p className="text-lg font-bold dark:text-white light:text-slate-800 mt-1 font-sans">Zero Defects</p>
                  <p className="text-[10px] text-accent font-semibold mt-0.5">Ready for Production</p>
                </div>
                <div className="relative flex items-center justify-center w-14 h-14">
                  {/* Circular progress bar SVG */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="28" cy="28" r="24" className="stroke-slate-800" strokeWidth="4" fill="transparent" />
                    <circle cx="28" cy="28" r="24" className="stroke-accent" strokeWidth="4" fill="transparent" strokeDasharray="150" strokeDashoffset="0" />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-accent font-sans">100%</span>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 text-[10px] text-gray-500 pt-2 border-t border-white/5">
                <span>Coverage:</span>
                <span className="text-primary font-semibold">100% Web UI</span>
                <span>|</span>
                <span>Active:</span>
                <span className="text-secondary font-semibold">React, Postman, Playwright</span>
              </div>
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
