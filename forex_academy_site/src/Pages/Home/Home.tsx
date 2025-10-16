import React from 'react';
import Hero from '../../components/Home/hero/Hero';
import AboutMentor from '../../components/Home/AboutMentor/AboutMentor';
import WhatIsForex from '../../components/Home/WhatIsForex/ForexCard';
import Quotes from '../../components/Home/QuoteCard/QuoteCard';
import WhyForex from '../../components/Home/WhyForex/WhyForex';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutMentor />
      <WhatIsForex />
      <Quotes />
       <WhyForex />
    </div>
  );
};

export default Home;