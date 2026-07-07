import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBg from './components/ParticleBg';
import LoadingScreen from './components/LoadingScreen';
import NotFound from './components/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync dark mode class with body/documentElement
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle path pop/back history
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const resetPath = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
  };

  // If path is not root, render custom 404 Page
  if (currentPath !== '/' && currentPath !== '/index.html') {
    return <NotFound resetPath={resetPath} />;
  }

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen dark:bg-dark-bg light:bg-light-bg text-slate-800 dark:text-gray-100 transition-colors duration-300 font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Dynamic Animated Particles background */}
      <ParticleBg isDarkMode={isDarkMode} />
      
      {/* Header Sticky Navigation */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
