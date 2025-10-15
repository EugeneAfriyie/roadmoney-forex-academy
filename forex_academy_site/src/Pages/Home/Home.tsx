import React from 'react';
import Hero from '../../components/Home/hero/Hero';
import AboutMentor from '../../components/Home/AboutMentor/AboutMentor';
import WhatIsForex from '../../components/Home/WhatIsForex/ForexCard';

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