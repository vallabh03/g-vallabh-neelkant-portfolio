/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030712',      // Very dark gray/black
          card: '#0b1528',    // Deep navy card bg
          border: '#1f2937',  // Slate border
          text: '#f3f4f6'     // White text
        },
        light: {
          bg: '#f8fafc',      // Slate-50 light bg
          card: '#ffffff',    // White card bg
          border: '#e2e8f0',  // Light border
          text: '#0f172a'     // Slate-900 text
        },
        primary: {
          DEFAULT: '#06b6d4', // Teal/Cyan accent
          hover: '#0891b2',
          light: '#22d3ee'
        },
        secondary: {
          DEFAULT: '#6366f1', // Indigo/Purple accent
          hover: '#4f46e5',
          light: '#818cf8'
        },
        accent: {
          DEFAULT: '#10b981', // Emerald for QA/Success
          hover: '#059669',
          light: '#34d399'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.2), 0 0 10px rgba(6, 182, 212, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.6), 0 0 20px rgba(6, 182, 212, 0.4)' },
        }
      },
      boxShadow: {
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-primary': '0 0 15px rgba(6, 182, 212, 0.5)',
        'glow-secondary': '0 0 15px rgba(99, 102, 241, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
