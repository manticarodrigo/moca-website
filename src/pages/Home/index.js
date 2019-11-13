import React from 'react';

import MocaSection from 'components/shared/MocaSection';
import Faq from 'components/shared/Faq';
import MocaWaySection from 'components/shared/MocaWaySection';
import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import ContactUs from './ContactUs';


const HomeScreen = () => (
  <>
    <Hero />
    <FeaturesSection />
    <MocaSection />
    <MocaWaySection />
    <Faq />
    <ContactUs />
  </>
);

export default HomeScreen;
