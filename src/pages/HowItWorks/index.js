import React from 'react';

import MocaSection from 'components/shared/MocaSection';
import MocaWaySection from 'components/shared/MocaWaySection';
import ReviewsSection from 'components/shared/ReviewsSection';
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
