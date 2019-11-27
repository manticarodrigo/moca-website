import React from 'react';

import HeroBgImage from 'assets/jpgs/therapist-hero-bg.jpg';

import FooterForm from 'components/FooterForm';

import Hero from 'components/Hero';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import PaymentSection from './PaymentSection';
import HowItWorks from './HowItWorks';

const heroTitle = (
  <>
    <span style={{ display: 'inline', color: '#71cfeb' }}>BY A </span>
    PHYSICAL THERAPIST
    <br />
    <span style={{ display: 'inline', color: '#71cfeb' }}>FOR </span>
    PHYSICAL THERAPISTS
  </>
);

const heroDescription = 'By creating the best experience for you, we create the best experince for our patients.';

const TherapistsScreen = () => (
  <>
    <Hero
      bgImage={HeroBgImage}
      bgColor="#F7F8FA"
      title={heroTitle}
      description={heroDescription}
      textMaxWidth={600}
    />
    <FeaturesSection />
    <PricingSection />
    <PaymentSection />
    <HowItWorks />
    <FooterForm />
  </>
);

export default TherapistsScreen;
