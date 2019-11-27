import React from 'react';

import MocaSection from 'components/MocaSection';
import MocaWaySection from 'components/MocaWaySection';
import ReviewsSection from 'components/ReviewsSection';
import FooterForm from 'components/FooterForm';

import Hero from './Hero';

const HowItWorksScreen = () => (
  <>
    <Hero />
    <MocaSection />
    <MocaWaySection />
    <ReviewsSection />
    <FooterForm />
  </>
);

export default HowItWorksScreen;
