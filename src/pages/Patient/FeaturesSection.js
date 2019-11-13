import React from 'react';
import styled from 'styled-components/macro';

import AddressIcon from 'assets/address.svg';
import CostIcon from 'assets/cost.svg';
import MedicalDocumentsIcon from 'assets/medical-document.svg';
import MessagingIcon from 'assets/messaging.svg';
import LocationIcon from 'assets/pin.svg';
import ScheduleIcon from 'assets/schedule.svg';
import TimeIntervalsIcon from 'assets/time-intervals.svg';
import WaitingIcon from 'assets/waiting.svg';

import {
  Flex, Text, Image,
} from 'design-system';

const FeaturesSection = () => {
  const HeroContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    padding: 130px;
    background-color: #ffffff;
  `;

  const TitleText = styled(Text)`
    font-size: 44px;
    font-family: MuseoSansRounded-900;
    line-height: 54px;

    @media (max-width: 500px) {
      text-align: center;
    }
  `;

  const FeatureCard = styled(Flex)`
    flex-direction: column;
    box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
    border-radius: 10px;
    padding: 27px;
    margin: 24px;
    background-color: #ffffff;
    height: 150px;
    width: 150px;
  `;

  const CardDescription = styled(Text)`
    font-family: MuseoSansRounded-500;
    font-size: 12px;
    text-align: center;
    color: #6a7e8f;
  `;

  const features = [
    {
      icon: <Image src={LocationIcon} />,
      description: 'Optimized physical therapist search and filters based on your location',
    },
    {
      icon: <Image src={TimeIntervalsIcon} />,
      description: 'Personalized physical therapy treatments with flexible time intervals',
    },
    {
      icon: <Image src={ScheduleIcon} />,
      description: 'Built-in scheduling based on your availability',
    },
    {
      icon: <Image src={MessagingIcon} />,
      description: 'Direct messaging with your physical therapist',
    },
    {
      icon: <Image src={AddressIcon} />,
      description: 'Choose your preferred addresses for treatment',
    },
    {
      icon: <Image src={CostIcon} />,
      description: 'No hidden fees or insurance needed',
    },
    {
      icon: <Image src={WaitingIcon} />,
      description: 'No wait times between doctor referrals and provider visits',
    },
    {
      icon: <Image src={MedicalDocumentsIcon} />,
      description: 'Ability to upload injury documentation',
    },
  ];

  return (
    <HeroContainer>
      <TitleText color="primaryDark">Empowering our patients on their road to improvement</TitleText>
      <Flex justifyContent="center" p={20} flexWrap="wrap">
        {features.map((feature) => (
          <FeatureCard>
            {feature.icon}
            <CardDescription color="grey" pt={30}>{feature.description}</CardDescription>
          </FeatureCard>
        ))}
      </Flex>
    </HeroContainer>
  );
};

export default FeaturesSection;
