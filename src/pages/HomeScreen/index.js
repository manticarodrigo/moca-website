import React from 'react';

import Header from './Header';
import FeaturesSection from './FeaturesSection';
import MocaSection from './MocaSection';
import MocaWaySection from './MocaWaySection';
import Faq from './Faq';
import ContactUs from './ContactUs';

import Flex from 'components/Flex';

const HomeScreen = () => (
  <Flex flexDirection="column">
    <Header />
    <FeaturesSection />
    <MocaSection />
    <MocaWaySection />
    <Faq />
    <ContactUs />
  </Flex>
);

export default HomeScreen;
