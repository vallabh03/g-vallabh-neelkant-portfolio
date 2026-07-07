import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll state for transparency
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120; // offset

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel bg-opacity-70 dark:bg-dark-bg/70 light:bg-light-bg/70 py-4 border-b border-white/5 shadow-md backdrop-blur-md' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center space-x-2 font-display font-bold text-xl tracking-tight cursor-pointer"
        >
          <span className="text-primary">&lt;</span>
          <span className="dark:text-white light:text-slate-900 font-sans tracking-wide">GVN</span>
          <span className="text-secondary">/&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === link.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary/20 shadow-md'
                  : 'dark:text-gray-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2.5 rounded-full glass-panel dark:hover:text-primary light:hover:text-secondary transition-all hover:-translate-y-0.5 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-800" />}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-3 md:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-panel dark:hover:text-primary transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-slate-800" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg glass-panel dark:text-gray-300 light:text-slate-700 transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[72px] glass-panel bg-opacity-95 dark:bg-dark-bg/95 light:bg-light-bg/95 border-b border-white/5 backdrop-blur-lg transition-all duration-300 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible h-auto py-6' : 'scale-y-0 opacity-0 invisible h-0 py-0'
        }`}
      >
        <div className="px-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full py-3 px-6 text-left text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeSection === link.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary/20 shadow-md'
                  : 'dark:text-gray-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
