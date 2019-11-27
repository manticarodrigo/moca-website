import React from 'react';

import HeroBgImage from 'assets/jpgs/patient-hero-bg.jpg';

import { ReactComponent as AddressIcon } from 'assets/svgs/address.svg';
import { ReactComponent as CostIcon } from 'assets/svgs/cost.svg';
import { ReactComponent as MedicalDocumentsIcon } from 'assets/svgs/medical-document.svg';
import { ReactComponent as MessagingIcon } from 'assets/svgs/messaging.svg';
import { ReactComponent as LocationIcon } from 'assets/svgs/pin.svg';
import { ReactComponent as ScheduleIcon } from 'assets/svgs/schedule.svg';
import { ReactComponent as TimeIntervalsIcon } from 'assets/svgs/time-intervals.svg';
import { ReactComponent as WaitingIcon } from 'assets/svgs/waiting.svg';

import RegistrationScreenImage from 'assets/pngs/screenshot-registration-success.png';
import FilterScreenImage from 'assets/pngs/screenshot-filters.png';
import AppointmentRequestScreenImage from 'assets/pngs/screenshot-appointment-request.png';
import PaymentsScreenImage from 'assets/pngs/screenshot-payments.png';

import Hero from 'components/Hero';
import OnboardingSteps from 'components/OnboardingSteps';
import PricingInfo from 'components/PricingInfo';
import FeatureGrid from 'components/FeatureGrid';
import FooterForm from 'components/FooterForm';

// import ReviewsSection from 'components/ReviewsSection';

const heroTitle = (
  <>
    REGAIN CONTROL OF YOUR
    {' '}
    <span style={{ color: '#71cfeb' }}>SCHEDULE</span>
    .
  </>
);

const heroDescription = (
  <>
    Our Physical Therapists tailor your experience by offering
    {' '}
    <span style={{ fontFamily: 'MuseoSansRounded-900' }}>personalized treatments</span>
    {' '}
    in your ideal environment. Regain control of your schedule while prioritizing your health
    among personal and professional demands.
  </>
);

const features = {
  location: {
    icon: <LocationIcon />,
    description: 'Optimized physical therapist search and filters based on your location',
  },
  intervals: {
    icon: <TimeIntervalsIcon />,
    description: 'Personalized physical therapy treatments with flexible time intervals',
  },
  calendar: {
    icon: <ScheduleIcon />,
    description: 'Built-in scheduling based on your availability',
  },
  messaging: {
    icon: <MessagingIcon />,
    description: 'Direct messaging with your physical therapist',
  },
  address: {
    icon: <AddressIcon />,
    description: 'Choose your preferred addresses for treatment',
  },
  pricing: {
    icon: <CostIcon />,
    description: 'No hidden fees or insurance needed',
  },
  waiting: {
    icon: <WaitingIcon />,
    description: 'No wait times between doctor referrals and provider visits',
  },
  documentation: {
    icon: <MedicalDocumentsIcon />,
    description: 'Ability to upload injury documentation',
  },
};

const featureGridProps = {
  title: 'Empowering our patients on their road to improvement',
  features,
};

const steps = {
  signup: {
    image: RegistrationScreenImage,
    title: 'Sign Up',
    description: 'Download the MOCA app and fill in your name, email, and preferred addresses for treatment.',
  },
  search: {
    image: FilterScreenImage,
    title: 'Search for a Physical Therapist',
    description: 'Download the MOCA app and fill in your name, email, and preferred addresses for treatment.',
    listItems: ['Neck', 'Shoulder', 'Elbow', 'Wrist/Hand', 'Low Back', 'Hip/Pelvis', 'Knee', 'Ankle/Foot'],
  },
  book: {
    image: AppointmentRequestScreenImage,
    title: 'Book Your Appointment',
    description: 'Message with the physical therapist of your choice to schedule a treatment session at a time, price, and location convenient to you. Do not forget to always rate your therapist!',
  },
};

const pricingInfoProps = {
  image: PaymentsScreenImage,
  description: 'We intend for this market-driven platform to decrease your overall cost of care. We will stream-line your experience by removing unnecessary steps and paperwork that comes with insurance companies. This is why MOCA selects cash-based services by accepting all major credit or banking cards.',
};

const PatientsScreen = () => (
  <>
    <Hero bgImage={HeroBgImage} title={heroTitle} description={heroDescription} />
    <FeatureGrid {...featureGridProps} />
    <PricingInfo {...pricingInfoProps} />
    <OnboardingSteps steps={steps} />
    {/* <ReviewsSection /> */}
    <FooterForm />
  </>
);

export default PatientsScreen;
