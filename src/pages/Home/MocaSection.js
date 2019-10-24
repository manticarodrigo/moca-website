import React from 'react';
import styled from 'styled-components/macro';

import StatusIcon from 'assets/status.svg';
import PinIcon from 'assets/pinn.svg';
import TherapistImage from 'assets/therapist.svg';

import PhoneImage from 'assets/phone-search.png';

import {
  Box, Flex, Text, Image,
} from 'design-system';

const Title = styled(Text)`
  font-family: MuseoSansRounded-900;
  font-size: 44px;
`;

const cards = [{
  img: TherapistImage,
  title: 'Choose your physical therapist:',
  description: `Personalize your search and find the right therapist 
    to treat you.`,
}, {
  img: StatusIcon,
  title: 'Schedule your visit:',
  description: 'Choose a date and time that align with your schedule.',
}, {
  img: PinIcon,
  title: 'Choose a location:',
  description: `Select the site for your session. A MOCA therapist will 
    meet you at your most convenient location, whether that is your office, 
    home or local park.`,
}];

const FeatureCard = styled(Flex)`
  padding: 10px 48px;
  min-height: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 15px 0 rgba(187, 228, 242, 0.4);
  border: solid 2px #bbe4f2;
  background-color: #ffffff;
`;

const CardTitle = styled(Text)`
  font-family: MuseoSansRounded-500;
  font-size: 24px;
  color: #71cfeb;
`;

const CardDescription = styled(Text)`
  font-family: MuseoSansRounded-300;
  font-size: 18px;
  color: #485c7a;
`;

const Card = ({ img, title, description }) => (
  <FeatureCard my={2} alignItems="center">
    <Box pr={4}>
      <Image src={img} />
    </Box>
    <Box>
      <CardTitle>{title}</CardTitle>
      <CardDescription mt={2}>{description}</CardDescription>
    </Box>
  </FeatureCard>
);


const MocaSection = () => (
  <Box width={1} bg="lighterBlue">
    <Flex flexDirection="column" alignItems="center">
      <Title color="primary" mt={5}>How does MOCA work?</Title>

      <Flex mx="10%" my={3} flexWrap="wrap">
        <Box width={[1, 1, 1 / 2]}>
          <Box pt={3} mt={6} flexDirection="column">
            {cards.map((c) => <Card {...c} />)}
          </Box>
        </Box>

        <Flex justifyContent="center" width={[1, 1, 1 / 2]}>
          <Image src={PhoneImage} />
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

export default MocaSection;
