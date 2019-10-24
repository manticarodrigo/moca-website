import React from 'react';

import { Flex } from 'design-system';
import Header from './Header';
import FeaturesSection from './FeaturesSection';
import MocaSection from './MocaSection';
import MocaWaySection from './MocaWaySection';
import Faq from './Faq';
import ContactUs from './ContactUs';


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
