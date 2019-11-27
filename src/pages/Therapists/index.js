import React from 'react';

import FooterForm from 'components/FooterForm';

import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import PaymentSection from './PaymentSection';
import HowItWorks from './HowItWorks';

const TherapistsScreen = () => (
  <>
    <Hero />
    <FeaturesSection />
    <PricingSection />
    <PaymentSection />
    <HowItWorks />
    <FooterForm />
  </>
);

export default TherapistsScreen;
