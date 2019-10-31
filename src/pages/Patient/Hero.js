import React from 'react';
import styled from 'styled-components/macro';

import {
  Box, Flex, Text,
} from 'design-system';

import HeroBackgroundImage from 'assets/patientHeroBackground.png';

const Hero = () => {
  const HeaderText = styled(Text)`
    font-size: 54px;
    font-family: MuseoSansRounded-900; 

    @media (max-width: 500px) {
      font-size: 42px;
    }
  `;

  const HeaderTextSmall = styled(Text)`
    font-size: 24px;
    font-family: MuseoSansRounded-300; 
    line-height: 38px;

    @media (max-width: 500px) {
      font-size: 18px;
    }
  `;

  const HeroBackground = styled(Box)`
    background-image: url(${HeroBackgroundImage});
  `;

  const HeroContainer = styled(Flex)`
    background-color: #e7eff9;
  `;

  return (
    <HeroContainer py={5} px={[3, 4, 5]} maxWidth={1350} width={1}>
      <Flex flexDirection="column">
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
      <HeroBackground />
    </HeroContainer>
  );
};

export default Hero;
