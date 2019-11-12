import React from 'react';
import styled from 'styled-components/macro';

import PricingImage from 'assets/pricing-phone.png';

import Container from 'components/Container';

import { Flex, Text, Image } from 'design-system';

const HeaderText = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900;

  min-width: 100px;
  max-width: 600px;

  @media (max-width: 500px) {
    font-size: 24px;
  }


`;

const HeaderTextSmall = styled(Text)`
  font-size: 24px;
  font-family: MuseoSansRounded-500;
  min-width: 100px;
  max-width: 600px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Description = styled(Text)`
  font-size: 19px;
  font-family: MuseoSansRounded-500;

  min-width: 100px;
  max-width: 600px;


  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const PricesHeader = styled(Text)`
  font-size: 34px;
  font-family: MuseoSansRounded-900;
  color: #222d5f;

  min-width: 100px;
  max-width: 600px;


  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const FeatureCard = styled(Flex)`
  flex-direction: column;
  box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
  min-height: 100px;
`;

const CardTitle = styled(Text)`
  font-family: MuseoSansRounded-900;
  font-size: 60px;
  color: #71cfeb;
  text-align: center;
  

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

const CardDescription = styled(Text)`
  font-family: MuseoSansRounded-300;
  font-size: 19px;
  text-align: center;
  color: #6a7e8f;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const cards = [
  {
    title: '$50',
    description: '30 minutes treatment',
  },
  {
    title: '$70',
    description: '45 minutes treatment',
  },
  {
    title: '$100',
    description: '60 minutes treatment',
  },
];

const Card = ({ title, description }) => (
  <FeatureCard
    p={4}
    my={4}
    mr={[3, 3, 3]}
    alignItems="center"
    width={[200, 200, 100]}
  >
    <CardTitle>{title}</CardTitle>
    <CardDescription mt={2}>{description}</CardDescription>
  </FeatureCard>
);

const PricingSection = () => (
  <Container centerMobile bg="lighterBlue">
    <Flex
      mt={4}
      ml={[0, 0, -6]}
      mr={[0, 0, 6]}
      width={[1, 1, 1 / 2]}
      justifyContent={['center', 'center', 'flex-start']}
    >
      <Image
        width={[400, 539, 539]}
        height={[600, 716, 716]}
        src={PricingImage}
      />
    </Flex>
    <Flex
      flexDirection="column"
      width={[1, 1, 1 / 2]}
      mt={4}
      alignItems={['center', 'center', 'flex-start']}
      style={{ boxSizing: 'border-box' }}
    >
      <HeaderText
        color="primary"
        textAlign={['center', 'center', 'left']}
      >
        PROVIDING A
        {' '}
        <span style={{ color: '#71cfeb' }}>PATIENT</span>
        {' '}
        AND
        {' '}
        <span style={{ color: '#71cfeb' }}>THERAPIST</span>
        {' '}
        DRIVEN MARKET.
      </HeaderText>
      <HeaderTextSmall
        color="grey"
        mt={5}
        textAlign={['center', 'center', 'left']}
      >
        MOCA’s goal is for you to received great returns for your service by
        removing the barriers of working for a clinic
      </HeaderTextSmall>
      <PricesHeader
        mt={5}
        textAlign={['center', 'center', 'left']}
      >
        Average pricing ranges:

      </PricesHeader>
      <Flex
        mt={5}
        flexWrap="wrap"
        justifyContent={['center', 'center', 'flex-start']}
      >
        {cards.map((c) => (
          <Card key={c.title} {...c} />
        ))}
      </Flex>
      <Description
        mt={4}
        color="grey"
        textAlign={['center', 'center', 'left']}
      >
        MOCA’s goal is to provide a patient
        and therapist driven market that provides
        affordable treatment for everyone. Further
        , MOCA’s goal is for you to receive great returns
        for your services by removing the barriers of working for a clinic.
      </Description>
    </Flex>
  </Container>
);

export default PricingSection;
