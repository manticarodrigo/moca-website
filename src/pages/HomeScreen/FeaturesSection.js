import React from 'react';

import ReliableImage from '../../assets/reliable.svg';
import HassalFreeImage from '../../assets/hassle.svg';
import PersonImage from '../../assets/person.svg';

import Text from '../../components/Text';
import Flex from '../../components/Flex';

import { Image } from '../../design-system';

const FeaturesSection = () => (
  <Flex p={6} justifyContent="center">
    <Flex card p={4} mr={3} flexDirection="column" justifyContent="center">
      <Flex height="50px" justifyContent="center">
        <Image src={ReliableImage} />
      </Flex>
      <Text mt={3} cardHeader>
          Reliable
      </Text>
      <Text cardTitle mt={2}>
          Licensed physical therapists
      </Text>
      <Text cardDescription mt={3}>
          We believe that healthcare should be transparent, in every aspect of
          the word. All MOCA providers go through an extensive screening process
          including license verification and background check
      </Text>
    </Flex>
    <Flex
      mr={3}
      card
      p={4}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex height="50px" justifyContent="center">
        <Image src={HassalFreeImage} />
      </Flex>
      <Text mt={3} cardHeader>
          Hassel-free
      </Text>
      <Text cardTitle mt={2}>
          Licensed physical therapists
      </Text>
      <Text cardDescription mt={3}>
          We believe that healthcare should be transparent, in every aspect of
          the word. All MOCA providers go through an extensive screening process
          including license verification and background check
      </Text>
    </Flex>
    <Flex
      mr={3}
      card
      p={4}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Flex height="50px" justifyContent="center">
        <Image src={PersonImage} />
      </Flex>
      <Text mt={3} cardHeader>
          Reliable
      </Text>
      <Text cardTitle mt={2}>
          Licensed physical therapists
      </Text>
      <Text cardDescription mt={3}>
          We believe that healthcare should be transparent, in every aspect of
          the word. All MOCA providers go through an extensive screening process
          including license verification and background check
      </Text>
    </Flex>
  </Flex>
);

export default FeaturesSection;
