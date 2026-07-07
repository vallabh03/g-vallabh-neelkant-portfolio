import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [percent, setPercent] = useState(0);

  const logs = [
    { text: "$ init portfolio-pipeline --user=G_Vallabh_Neelkant", delay: 100 },
    { text: "➔ Connecting to secure digital forensic vault...", delay: 400 },
    { text: "➔ Loading technical skills matrices: Python, JS, React.js...", delay: 800 },
    { text: "➔ Loading QA automation tools: Selenium, Playwright, Postman...", delay: 1100 },
    { text: "➔ Executing integration & smoke tests... [OK]", delay: 1400 },
    { text: "➔ Initializing custom glassmorphic rendering engines...", delay: 1700 },
    { text: "$ npm run start:neelkant-portfolio --prod", delay: 2000 },
    { text: "✔ System status: ACTIVE. Compiling dashboard...", delay: 2200 }
  ];

  useEffect(() => {
    // Log animations
    logs.forEach((log) => {
      setTimeout(() => {
        setLines(prev => [...prev, log.text]);
      }, log.delay);
    });

    // Percentage counter
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 90);

    // Fade out complete
    const finishTimeout = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] font-mono text-gray-300 p-6 selection:bg-cyan-500 selection:text-black">
      <div className="w-full max-w-2xl bg-[#0b1528] rounded-lg border border-cyan-500/30 overflow-hidden shadow-glass-dark shadow-cyan-500/10">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-[#070e1b] px-4 py-3 border-b border-cyan-500/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-gray-500 font-semibold select-none">bash - g-vallabh-neelkant-terminal</span>
          <div className="w-10"></div>
        </div>

        {/* Terminal Content */}
        <div className="p-5 h-80 overflow-y-auto text-sm leading-relaxed scrollbar-thin scrollbar-thumb-cyan-500/20">
          {lines.map((line, index) => (
            <div 
              key={index} 
              className={`mb-2 font-mono ${
                line.startsWith('$') 
                  ? 'text-cyan-400 font-medium' 
                  : line.includes('✔') || line.includes('[OK]') 
                    ? 'text-emerald-400' 
                    : 'text-gray-400'
              }`}
            >
              {line}
            </div>
          ))}
          {percent < 100 && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-cyan-400 animate-pulse">⚡</span>
              <span className="text-gray-400">Compiling assets: {percent}%</span>
              <span className="w-32 bg-slate-800 h-2 rounded-full overflow-hidden inline-block">
                <span 
                  className="bg-cyan-500 h-full block rounded-full transition-all duration-100" 
                  style={{ width: `${percent}%` }}
                ></span>
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex flex-col items-center">
        <h2 className="text-xl font-display font-bold tracking-wider text-cyan-400 animate-pulse">
          G VALLABH NEELKANT
        </h2>
        <p className="text-xs text-gray-500 tracking-widest mt-1">PORTFOLIO PIPELINE</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
