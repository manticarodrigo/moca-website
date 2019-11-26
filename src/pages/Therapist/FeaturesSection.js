import React from 'react';
import styled from 'styled-components/macro';

import StatusImage from 'assets/status-blue.svg';
import SmartPhoneImage from 'assets/smartphone.svg';
import UploadImage from 'assets/upload.svg';
import MarketImage from 'assets/market.svg';
import PriceImage from 'assets/price.svg';
import MessageImage from 'assets/message.svg';

import { Image, Text, Flex } from 'design-system';

import Container from 'components/Container';

const FeatureCard = styled(Flex)`
  flex-direction: column;
  box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
  min-height: 200px;
  width: 250px;
`;

const CardDescription = styled(Text)`
  font-family: MuseoSansRounded-300;
  font-size: 19px;
  text-align: center;
  color: #6a7e8f;

`;

const Title = styled(Text)`
  font-family: MuseoSansRounded-900;
  font-size: 44px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const cards = [
  {
    img: StatusImage,
    description: 'Built-in scheduling based on your availability',
  },
  {
    img: PriceImage,
    description: 'Ability to choose what services and prices you want to offer',
  },
  {
    img: MessageImage,
    description: 'Direct messaging with your patient',
  },
  {
    img: SmartPhoneImage,
    description: 'Ability to document inside the application at an appointment',
  },
  {
    img: UploadImage,
    description: 'Upload patient relevant documents',
  },
  {
    img: MarketImage,
    description: 'Integrated marketing that connects you with new patients',
  },
];

const Card = ({ img, description }) => (
  <FeatureCard p={4} my={3} mr={[0, 3, 3]} alignItems="center">
    <Flex height="80px" justifyContent="center">
      <Image src={img} />
    </Flex>
    <CardDescription mt={4}>{description}</CardDescription>
  </FeatureCard>
);

const FeaturesSection = () => (
  <Container>
    <Flex justifyContent="center">
      <Title color="primary" py={2} textAlign="center">
        Empowering our providers to work for themselves and earn what they
        deserve
      </Title>
    </Flex>
    <Flex mt={5} flexWrap="wrap" justifyContent="center">
      {cards.map((c) => (
        <Card key={c.title} {...c} />
      ))}
    </Flex>
  </Container>
);

export default FeaturesSection;
