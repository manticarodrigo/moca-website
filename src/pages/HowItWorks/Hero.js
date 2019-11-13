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
      line-height: 30px;
    }
  `;

  const HeroContainer = styled(Flex)`
    background-color: #e7eff9;

    @media (max-width: 500px) {
      flex-direction: column;
    }
  `;

  const HeroImage = styled(Image)`
    width: 50%;

    @media (max-width: 500px) {
      width: 100%;
    }
  `;

  const TextContainer = styled(Flex)`
    padding: 120px 50px 70px 150px;

    @media (max-width: 500px) {
      padding: 20px;
    }
  `;

  return (
    <HeroContainer>
      <TextContainer flexDirection="column">
        <HeaderText color="primaryDark">
          PHYSICAL THERAPY DELIVERED TO
          {' '}
          <span style={{ color: '#71cfeb' }}>YOU</span>
          .
        </HeaderText>
        <HeaderTextSmall color="grey">
          MOCA was created to meet the needs of both patient and the therapist,
          empowering them with time and capacity, ability to manage their own schedule
          and aid in facilitating a high-quality medical service at a location most convenient to you.
        </HeaderTextSmall>
      </TextContainer>
      <HeroImage src={HeroBackgroundImage} />
    </HeroContainer>
  );
};

export default Hero;
