import React from 'react';
import styled from 'styled-components/macro';

import {
  Image, Flex, Text,
} from 'design-system';

import HeroBackgroundImage from 'assets/patient-hero-image.png';

const Hero = () => {
  const HeaderText = styled(Text)`
    font-size: 44px;
    font-family: MuseoSansRounded-900; 

    @media (max-width: 500px) {
      font-size: 42px;
    }
  `;

  const HeaderTextSmall = styled(Text)`
    font-size: 18px;
    font-family: MuseoSansRounded-300; 
    line-height: 38px;

    @media (max-width: 500px) {
      font-size: 18px;
    }
  `;

  const HeroContainer = styled(Flex)`
    background-color: #e7eff9;
  `;

  return (
    <HeroContainer>
      <Flex flexDirection="column" pl={150} pt={120} pb={70} pr={50}>
        <HeaderText color="primaryDark">
          REGAIN CONTROL OF YOUR
          {' '}
          <span style={{ color: '#71cfeb' }}>SCHEDULE</span>
          .
        </HeaderText>
        <HeaderTextSmall color="grey">
          Our Physical Therapists tailor your experience by offering
          {' '}
          <span style={{ fontFamily: 'MuseoSansRounded-900' }}>personalized treatments</span>
          {' '}
          in your ideal environment. Regain control of your schedule while prioritizing your health
          among personal and professional demands.
        </HeaderTextSmall>
      </Flex>
      <Image src={HeroBackgroundImage} width="50%" />
    </HeroContainer>
  );
};

export default Hero;
