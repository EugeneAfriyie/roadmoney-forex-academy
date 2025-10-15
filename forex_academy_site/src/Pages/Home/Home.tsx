import React from 'react';
import Hero from '../../components/Home/Hero';
import AboutMentor from '../../components/Home/AboutMentor';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutMentor />
    </div>
  );
};

export default Home;