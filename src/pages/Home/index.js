import React from 'react';

import MocaSection from 'components/MocaSection';
import Faq from 'components/Faq';
import MocaWaySection from 'components/MocaWaySection';
import FooterForm from 'components/FooterForm';

import Hero from './Hero';
import FeaturesSection from './FeaturesSection';


const HomeScreen = () => (
  <>
    <Hero />
    <FeaturesSection />
    <MocaSection />
    <MocaWaySection />
    <Faq />
    <FooterForm />
  </>
);

export default HomeScreen;
