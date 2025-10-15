import React from 'react';
import Hero from '../../components/Home/Hero';
import AboutMentor from '../../components/Home/AboutMentor';
import WhatIsForex from '../../components/Home/ForexCard';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutMentor />
      <WhatIsForex />
    </div>
  );
};

export default Home;