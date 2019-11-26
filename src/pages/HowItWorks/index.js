import React from 'react';

import MocaSection from 'components/MocaSection';
import MocaWaySection from 'components/MocaWaySection';
import ReviewsSection from 'components/ReviewsSection';
import ContactUs from '../Home/ContactUs';
import Hero from './Hero';

const HowItWorksScreen = () => (
  <>
    <Hero />
    <MocaSection />
    <MocaWaySection />
    <ReviewsSection />
    <ContactUs />
  </>
);

export default HowItWorksScreen;
