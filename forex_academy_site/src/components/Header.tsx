import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-navy/90 backdrop-blur-md border-b border-gold/30 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-neonGreen">RoadMoney Forex Academy</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-neonGreen transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-neonGreen transition-colors">About Mentor</a></li>
            <li><a href="#mentorship" className="hover:text-neonGreen transition-colors">Mentorship</a></li>
            <li><a href="#contact" className="hover:text-neonGreen transition-colors">Contact</a></li>
          </ul>
          <button className="bg-neonGreen text-navy px-4 py-2 rounded-md font-bold hover:bg-neonGreen/80 transition">
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-navy overflow-hidden">
        {/* Background 3D/Visual Placeholder - We'll add Three.js later */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-black opacity-70"></div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight">
            Embark on Your Road to <span className="text-neonGreen">Forex Mastery</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            From Ghana's streets to global markets—transform your future with expert mentorship.
          </p>
          <button className="bg-neonGreen text-navy px-8 py-4 rounded-md font-bold text-lg hover:shadow-neonGreen hover:shadow-md transition-shadow">
            Join Mentorship Now
          </button>
        </div>

        {/* Live Forex Ticker Animation */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy/50 py-2 overflow-hidden">
          <div className="flex animate-ticker space-x-8 text-sm text-gold">
            {/* Static placeholders; replace with real data via API later */}
            <span>EUR/USD: 1.0952 ↑</span>
            <span>GBP/USD: 1.3054 ↓</span>
            <span>USD/JPY: 149.32 ↑</span>
            <span>AUD/USD: 0.6735 ↓</span>
            {/* Duplicate for seamless loop */}
            <span>EUR/USD: 1.0952 ↑</span>
            <span>GBP/USD: 1.3054 ↓</span>
            <span>USD/JPY: 149.32 ↑</span>
            <span>AUD/USD: 0.6735 ↓</span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;