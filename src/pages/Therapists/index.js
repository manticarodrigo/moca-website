import React from 'react';

import HeroBgImage from 'assets/jpgs/therapist-hero-bg.jpg';

import { ReactComponent as ScheduleIcon } from 'assets/svgs/schedule.svg';
import { ReactComponent as PriceIcon } from 'assets/svgs/price.svg';
import { ReactComponent as MessagingIcon } from 'assets/svgs/messaging.svg';
import { ReactComponent as SmartphoneIcon } from 'assets/svgs/smartphone.svg';
import { ReactComponent as UploadIcon } from 'assets/svgs/upload.svg';
import { ReactComponent as MarketIcon } from 'assets/svgs/market.svg';
import { ReactComponent as BagIcon } from 'assets/svgs/bag.svg';

import PaymentsScreenImage from 'assets/pngs/screenshot-payment-registration.png';
import BackgroundCheckScreenImage from 'assets/pngs/screenshot-background-check.png';
import ProfileScreenImage from 'assets/pngs/screenshot-profile.png';
import SearchScreenImage from 'assets/pngs/screenshot-search-card.png';

import Hero from 'components/Hero';
import FeatureGrid from 'components/FeatureGrid';
import PricingInfo from 'components/PricingInfo';
import OnboardingSteps from 'components/OnboardingSteps';
import Alert from 'components/Alert';
import ContactForm from 'components/ContactForm';

import PaymentSection from './PaymentSection';

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

const features = {
  calendar: {
    icon: <ScheduleIcon />,
    description: 'Built-in scheduling based on your availability',
  },
  pricing: {
    icon: <PriceIcon />,
    description: 'Ability to choose what services and prices you want to offer',
  },
  messaging: {
    icon: <MessagingIcon />,
    description: 'Direct messaging with your patient',
  },
  documentation: {
    icon: <SmartphoneIcon />,
    description: 'Ability to document inside the application at an appointment',
  },
  upload: {
    icon: <UploadIcon />,
    description: 'Upload relevant patient documents',
  },
  marketing: {
    icon: <MarketIcon />,
    description: 'Integrated marketing that connects you with new patients',
  },
};

const featureGridProps = {
  title: 'Empowering our providers to work for themselves and earn what they deserve',
  features,
};

const pricingInfoProps = {
  image: PaymentsScreenImage,
  description: 'MOCA\'s goal is for you to received great returns for your service by removing the barriers of working for a clinic',
  subText: 'MOCA\'s goal is to provide a patient and therapist driven market that provides affordable treatment for everyone. Further, MOCA\'s goal is for you to receive great returns for your services by removing the barriers of working for a clinic.',
};

const steps = {
  signup: {
    image: BackgroundCheckScreenImage,
    title: 'Sign Up',
    description: 'Download the MOCA app and fill in your name, email, license number, and contact information. MOCA will follow up with you via email to complete your background check and attain copies of any required documentation.',
  },
  search: {
    image: ProfileScreenImage,
    title: 'Create Your Profile',
    description: 'No need to wait on us while we verify your information. Go ahead and get started! Tell patients about your interests, certifications, and preferred treatment areas. You will choose what services you would like to offer as well as preferred pricing.',
  },
  book: {
    image: SearchScreenImage,
    title: 'Meet Patients',
    description: 'Once you have been verified, patients will be able to view your profile through the physical therapist search and reach out to you for treatment.',
  },
};

const alertProps = {
  icon: <BagIcon />,
  title: 'We acknowledge hard work and determination.',
  description: 'Receive THE MOCA WAY KIT after your 50th patient visit.',
};

const TherapistsScreen = () => (
  <>
    <Hero
      bgImage={HeroBgImage}
      bgColor="#F7F8FA"
      title={heroTitle}
      description={heroDescription}
      textMaxWidth={600}
    />
    <FeatureGrid {...featureGridProps} />
    <PricingInfo {...pricingInfoProps} />
    <PaymentSection />
    <OnboardingSteps steps={steps} />
    <Alert {...alertProps} />
    <ContactForm />
  </>
);

export default TherapistsScreen;
