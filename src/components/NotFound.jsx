import React from 'react';
import { Terminal, ShieldAlert, ArrowLeft } from 'lucide-react';

const NotFound = ({ resetPath }) => {
  return (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center font-mono text-gray-300 p-6 selection:bg-cyan-500 selection:text-black">
      
      <div className="w-full max-w-xl bg-[#0b1528] rounded-xl border border-red-500/30 overflow-hidden shadow-glass-dark shadow-red-500/5">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-[#070e1b] px-4 py-3 border-b border-red-500/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-gray-500 font-semibold select-none">system_diagnostics.sh</span>
          <div className="w-10"></div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 space-y-4 text-sm leading-relaxed">
          <div className="flex items-center space-x-2 text-red-400 font-semibold">
            <ShieldAlert size={16} />
            <span>CRITICAL ERROR: ROUTE_NOT_FOUND (404)</span>
          </div>

          <div className="space-y-1 bg-slate-900/50 p-4 rounded-xl border border-white/5 font-mono text-xs text-gray-400">
            <p>$ diagnose --path={window.location.pathname}</p>
            <p className="text-red-400">➔ GET {window.location.pathname} [FAIL]</p>
            <p>➔ Analyzing system directories...</p>
            <p>➔ File system status: PATHS_AVAILABLE = ['/home', '/about', '/projects']</p>
            <p className="text-emerald-400">➔ Recommendation: Return to primary route gateway.</p>
          </div>

          <p className="text-gray-400 text-xs">
            The path you are trying to reach doesn't exist or has been refactored in the pipeline.
          </p>

          {/* Action to go home */}
          <button
            onClick={resetPath}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2.5 px-5 rounded-xl hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-xs w-fit"
          >
            <ArrowLeft size={14} />
            <span>cd /home</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
