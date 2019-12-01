import React from 'react';


import AppIconImage from 'assets/svgs/app-icon.svg';
import CalendarScreenImage from 'assets/pngs/screenshot-calendar.png';
import SearchScreenImage from 'assets/pngs/screenshot-filtered-search.png';
import HeroBgImage from 'assets/jpgs/map-bg.jpg';

import TwoColumnHero from 'components/TwoColumnHero';
import MocaSection from 'components/MocaSection';
import Faq from 'components/Faq';
import MocaWaySection from 'components/MocaWaySection';
import ContactForm from 'components/ContactForm';

import FeaturesSection from './FeaturesSection';

const heroTitle = (
  <>
    PHYSICAL THERAPY
    {' '}
    <span style={{ color: '#71cfeb' }}>DELIVERED</span>
    {' '}
    TO YOU
  </>
);

const heroDescription = 'Available soon in Salt Lake City and surrounding areas.';

const HomeScreen = () => (
  <>
    <TwoColumnHero
      bgImage={HeroBgImage}
      leftImage={AppIconImage}
      title={heroTitle}
      description={heroDescription}
      rightBackImage={CalendarScreenImage}
      rightFrontImage={SearchScreenImage}
    />
    <FeaturesSection />
    <MocaSection />
    <MocaWaySection />
    <Faq />
    <ContactForm />
  </>
);

export default HomeScreen;
