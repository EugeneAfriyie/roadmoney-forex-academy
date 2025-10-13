import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode via class
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001F3F',
        darkNavy: '#001022',
        neonGreen: '#39FF14',
        gold: '#FFD700',
        lightBg: '#F5F5F5', // For future light mode
        lightText: '#333333', // For future light mode
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(90deg, #001F3F 0%, #001022 100%)',
        'hero-gradient': 'linear-gradient(to bottom, #001F3F 0%, #001022 100%)',
      },
      boxShadow: {
        'neon-glow': '0 0 10px rgba(57, 255, 20, 0.5)',
        'gold-glow': '0 0 10px rgba(255, 215, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // For glassmorphism
  ],
};

export default config;