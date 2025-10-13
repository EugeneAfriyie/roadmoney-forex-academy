import type { Config } from 'tailwindcss';

const config: Config = {
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
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(90deg, #001F3F 0%, #001022 100%)',
      },
      boxShadow: {
        'neon-glow': '0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)',
        'gold-glow': '0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)',
      },
      backdropFilter: {
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // For backdrop blur
  ],
};

export default config;