import React from 'react';

import RegistrationScreenImage from 'assets/pngs/screenshot-registration-success.png';
import FilterScreenImage from 'assets/pngs/screenshot-filters.png';
import AppointmentRequestScreenImage from 'assets/pngs/screenshot-appointment-request.png';

import OnboardingSteps from 'components/OnboardingSteps';

// import ReviewsSection from 'components/ReviewsSection';
import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';
import ContactUS from '../Home/ContactUs';

const onboardingSteps = {
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

const PatientsScreen = () => (
  <>
    <Hero />
    <FeaturesSection />
    <PricingSection />
    <OnboardingSteps sections={onboardingSteps} />
    {/* <ReviewsSection /> */}
    <ContactUS />
  </>
);

export default PatientsScreen;
