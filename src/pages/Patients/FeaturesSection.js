import React from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as AddressIcon } from 'assets/svgs/address.svg';
import { ReactComponent as CostIcon } from 'assets/svgs/cost.svg';
import { ReactComponent as MedicalDocumentsIcon } from 'assets/svgs/medical-document.svg';
import { ReactComponent as MessagingIcon } from 'assets/svgs/messaging.svg';
import { ReactComponent as LocationIcon } from 'assets/svgs/pin.svg';
import { ReactComponent as ScheduleIcon } from 'assets/svgs/schedule.svg';
import { ReactComponent as TimeIntervalsIcon } from 'assets/svgs/time-intervals.svg';
import { ReactComponent as WaitingIcon } from 'assets/svgs/waiting.svg';

import Container from 'components/Container';

import { Flex, Text } from 'design-system';

const TitleText = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900;
  line-height: 54px;
  max-width: 600px;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const FeatureCard = styled(Flex)`
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px 0 rgba(7,42,68,0.1);
  border-radius: 10px;
  background-color: #fff;
  width: 200px;
  min-height: 200px;
`;

const CardDescription = styled(Text)`
  font-family: MuseoSansRounded-500;
  text-align: center;
  color: #6a7e8f;
`;

const features = [
  {
    icon: <LocationIcon />,
    description: 'Optimized physical therapist search and filters based on your location',
  },
  {
    icon: <TimeIntervalsIcon />,
    description: 'Personalized physical therapy treatments with flexible time intervals',
  },
  {
    icon: <ScheduleIcon />,
    description: 'Built-in scheduling based on your availability',
  },
  {
    icon: <MessagingIcon />,
    description: 'Direct messaging with your physical therapist',
  },
  {
    icon: <AddressIcon />,
    description: 'Choose your preferred addresses for treatment',
  },
  {
    icon: <CostIcon />,
    description: 'No hidden fees or insurance needed',
  },
  {
    icon: <WaitingIcon />,
    description: 'No wait times between doctor referrals and provider visits',
  },
  {
    icon: <MedicalDocumentsIcon />,
    description: 'Ability to upload injury documentation',
  },
];

const FeaturesSection = () => (
  <Container>
    <Flex py={3} flexDirection="column" alignItems="center" bg="#fff">
      <TitleText textAlign="center" color="primaryDark">
        Empowering our patients on their road to improvement
      </TitleText>
      <Flex justifyContent="center" pt={5} flexWrap="wrap">
        {features.map((feature, index) => (
          <FeatureCard key={index} m={3} px={4} pt={5} pb={3}>
            {feature.icon}
            <CardDescription color="grey" pt={30}>{feature.description}</CardDescription>
          </FeatureCard>
        ))}
      </Flex>
    </Flex>
  </Container>
);

export default FeaturesSection;
