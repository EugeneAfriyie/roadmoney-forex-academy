import React from 'react';
import Hero from '../../components/Home/hero/Hero';
import AboutMentor from '../../components/Home/AboutMentor/AboutMentor';
import WhatIsForex from '../../components/Home/WhatIsForex/ForexCard';
import Quotes from '../../components/Home/QuoteCard/QuoteCard';
import WhyForex from '../../components/Home/WhyForex/WhyForex';
// import Testimonials from '../../components/Testimonials';
import WhyMentorshipMatters from '../../components/WhyMentorshipMatters';
// import ContinuousWhyMentorship from '../../components/Test/ContinuousWhyMentorship';
// import FullScreenWhyMentorship from '../../components/Test/FullScreenWhyMentorship';
// import WhatYouGet from '../../components/Home/WhatYouGet/WhatYouGet';
// import WhatYouGet from '../../components/Test/WhatYouGet';
import WhatYouGetSplit from '../../components/Home/WhatYouGet/WhatYouGetSplit';
import Services from '../../components/Home/Services/Services';
// import JoinCommunity from '../../components/Home/JoinCommunity/JoinCommunity';
// import JoinCommunityAnimated from '../../components/Home/JoinCommunity/JoinCommunityAnimated';
import JoinCommunity3D from '../../components/Home/JoinCommunity/JoinCommunity3D';
import TradingAcademyAd from '../../components/Home/TradingAcademyAd/TradingAcademyAd';
import AcademyPopupAd from '../../components/Home/TradingAcademyAd/AcademyPopupAd';
import ContactInvite from '../../components/Home/ContactInvite/ContactInvite';
import FreeValueHook from '../../components/Home/TradingAcademyAd/FreeValueHook/FreeValueHook';
// import SmartTradingQuiz from '../../components/Home/TradingAcademyAd/FreeValueHook/SmartTradingQuiz';
import FAQSection from '../../components/Home/FAQSection/FAQSection';
// import JoinCommunitySwitcher from '../../components/Home/JoinCommunity/JoinCommunitySwitcher';

const Home: React.FC = () => {
  return (
    <div>
      {/* const globeImage = theme === 'dark' ? '/assets/globe/dark.png' : '/assets/globe/light.png'; */}

      <Hero />
      <Services />
      <AboutMentor />
      <WhatIsForex />
      <Quotes />
       <WhyForex />
       {/* <Testimonials /> */}
       <WhyMentorshipMatters />
       {/* <ContinuousWhyMentorship /> */}
       {/* <FullScreenWhyMentorship /> */}
       <WhatYouGetSplit />

       {/* <JoinCommunity /> */}
       {/* <JoinCommunityAnimated /> */}
       <JoinCommunity3D />

       {/* <JoinCommunitySwitcher /> */}
       {/* <WhatYouGet /> */}

       <TradingAcademyAd />
       <AcademyPopupAd />
       <ContactInvite />
       <FreeValueHook />
       {/* <SmartTradingQuiz /> */}
       <FAQSection />
    </div>                                   
  );
};

export default Home;