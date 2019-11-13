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
      font-size: 35px;
    }
  `;

  const HeaderTextSmall = styled(Text)`
    font-size: 18px;
    font-family: MuseoSansRounded-300; 
    line-height: 38px;

    @media (max-width: 500px) {
      font-size: 18px;
      line-height: 30px;
    }
  `;

  const HeroContainer = styled(Flex)`
    background-color: #e7eff9;
    box-sizing: border-box;

    @media (max-width: 500px) {
      flex-direction: column;
      overflow: hidden;
    }
  `;

  const TextContainer = styled(Flex)`
    flex-direction: column;
    padding: 120px 50px 70px 150px;
   
    @media (max-width: 500px) {
      flex-direction: column;
      padding: 20px;
      overflow: hidden;
    }
  `;

  const HeroImage = styled(Image)`
    width: 50%;

    @media (max-width: 500px) {
      width: 100%;
    }
  `;

  return (
    <HeroContainer maxWidth={1350} width={1}>
      <TextContainer>
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
      </TextContainer>
      <HeroImage src={HeroBackgroundImage} />
    </HeroContainer>
  );
};

export default Hero;
