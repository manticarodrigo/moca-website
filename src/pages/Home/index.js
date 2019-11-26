import React from 'react';

import MocaSection from 'components/MocaSection';
import Faq from 'components/Faq';
import MocaWaySection from 'components/MocaWaySection';
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
