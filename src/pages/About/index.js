import React from 'react';

import HeroBgImage from 'assets/jpgs/about-hero-bg.jpg';

import Hero from 'components/Hero';
import EmailForm from 'components/EmailForm';

import Therapists from './Therapists';

const heroTitle = 'Mission:';
const heroDescription = 'To bridge the existing gaps for patients and providers, creating a more effective and equitable physical therapy experience.';
const heroTitle2 = 'Vision:';
const heroDescription2 = 'To elevate people\'s quality of life by revolutionizing the healthcare system.';

const AboutUsScreen = () => (
  <>
    <Hero
      bgImage={HeroBgImage}
      bgColor="#fff"
      title={heroTitle}
      description={heroDescription}
      title2={heroTitle2}
      description2={heroDescription2}
    />
    <Therapists />
    <EmailForm />
  </>
);

export default AboutUsScreen;
