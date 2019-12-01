import React from 'react';

import HeroBgImage from 'assets/jpgs/how-it-works-hero-bg.jpg';

import Hero from 'components/Hero';
import MocaSection from 'components/MocaSection';
import MocaWaySection from 'components/MocaWaySection';
// import ReviewsSection from 'components/ReviewsSection';
import ContactForm from 'components/ContactForm';

// import Hero from './Hero';

const heroTitle = (
  <>
    PHYSICAL THERAPY DELIVERED TO
    {' '}
    <span style={{ color: '#71cfeb' }}>YOU</span>
    .
  </>
);

const heroDescription = (
  <>
    MOCA was created to meet the needs of both patient and the therapist,
    empowering them with time and capacity, ability to manage their own schedule
    and aid in facilitating a high-quality medical service at a location most convenient to you.
  </>
);

const HowItWorksScreen = () => (
  <>
    <Hero bgImage={HeroBgImage} title={heroTitle} description={heroDescription} />
    <MocaSection />
    <MocaWaySection />
    {/* <ReviewsSection /> */}
    <ContactForm />
  </>
);

export default HowItWorksScreen;
