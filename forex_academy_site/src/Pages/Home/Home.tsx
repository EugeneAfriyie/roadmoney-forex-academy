import React from 'react';
import Hero from '../../components/Home/hero/Hero';
import AboutMentor from '../../components/Home/AboutMentor/AboutMentor';
import WhatIsForex from '../../components/Home/WhatIsForex/ForexCard';
import Quotes from '../../components/Home/QuoteCard/QuoteCard';
import WhyForex from '../../components/Home/WhyForex/WhyForex';
import Testimonials from '../../components/Testimonials';
import WhyMentorshipMatters from '../../components/WhyMentorshipMatters';
import ContinuousWhyMentorship from '../../components/Test/ContinuousWhyMentorship';
import FullScreenWhyMentorship from '../../components/Test/FullScreenWhyMentorship';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutMentor />
      <WhatIsForex />
      <Quotes />
       <WhyForex />
       {/* <Testimonials /> */}
       <WhyMentorshipMatters />
       {/* <ContinuousWhyMentorship /> */}
       <FullScreenWhyMentorship />
    </div>
  );
};

export default Home;