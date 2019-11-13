import React from 'react';

import ReviewsSection from 'components/shared/ReviewsSection';
import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import JoinMocaSection from './JoinMocaSection';
import ContactUS from '../Home/ContactUs';

const PatientScreen = () => (
  <>
    <Hero />
    <FeaturesSection />
    <PricingSection />
    <JoinMocaSection />
    <ReviewsSection />
    <ContactUS />
  </>
);

export default PatientScreen;
