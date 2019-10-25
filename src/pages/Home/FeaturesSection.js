import React from 'react';
import styled from 'styled-components/macro';

import ReliableImage from 'assets/reliable.svg';
import HasselFreeImage from 'assets/hassle.svg';
import PersonImage from 'assets/person.svg';

import {
  Image, Text, Flex, Box,
} from 'design-system';

import Container from 'components/Container';

const FeatureCard = styled(Flex)`
  flex-direction: column;
  box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
  min-height: 300px;
  width: 300px;
`;

const CardHeader = styled(Text)`
  font-family: MuseoSansRounded-900;
  font-size: 24px;
  text-align: center;
  color: #143d6c;
`;

const CardTitle = styled(Text)`
  font-family: MuseoSansRounded-500;
  text-align: center;
  font-size: 18px;
  color: #485c7a;
`;

const CardDescription = styled(Text)`
  font-family: MuseoSansRounded-300;
  font-size: 14px;
  text-align: center;
  color: #6a7e8f;
`;


const cards = [{
  img: ReliableImage,
  header: 'Reliable',
  title: 'Licensed physical therapists',
  description: `We believe that healthcare should be transparent, in every aspect of
    the word. All MOCA providers go through an extensive screening process
    including license verification and background check`,
}, {
  img: HasselFreeImage,
  header: 'Hassle-free',
  title: 'Fixed costs, no hidden fees, no insurance needed',
  description: `With MOCA, worrying about insurance paperwork, wait time at a clinic, 
    and extra charges are a thing-of-the-past. We protect both patients and providers 
    through market driven pricing.`,
}, {
  img: PersonImage,
  header: 'Personalized Care',
  title: 'Direct Medical Access at your most convenient location',
  description: `Setting up medical appointments should not be as painful as your lower 
    back pain. MOCA creates a seamless experience to manage your time and schedule at a 
    location most convenient to you. `,
}];

const Card = ({
  img, header, title, description,
}) => (
  <FeatureCard p={4} my={3} mr={[0, 0, 3]} alignItems="center">
    <Flex height="80px" justifyContent="center">
      <Image src={img} />
    </Flex>
    <CardHeader mt={3}>{header}</CardHeader>
    <Box minHeight="70px">
      <CardTitle mt={3}>{title}</CardTitle>
    </Box>
    <CardDescription mt={4}>{description}</CardDescription>
  </FeatureCard>
);

const FeaturesSection = () => (
  <Container centerMobile>
    {cards.map((c) => <Card key={c.title} {...c} />)}
  </Container>
);

export default FeaturesSection;
