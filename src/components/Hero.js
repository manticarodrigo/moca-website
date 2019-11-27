import React from 'react';
import styled from 'styled-components/macro';

import { Flex, Text } from 'design-system';

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
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #e7eff9;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: 55%;
  background-position: center right;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.maxWidths[7]}px) {
    background-size: cover;

    & > * {
      position: relative;
    }
  
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(231,239,249, 0.8);
      content: '';
    }
  }
`;

const HeroInner = styled(Flex)`
  box-sizing: border-box;
`;

const TextContainer = styled(Flex)`
  flex-direction: column;
  
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
  }
`;

const Hero = ({ image, title, description }) => (
  <HeroContainer bgImage={image}>
    <HeroInner py={5} px={[3, 4, 5]} maxWidth={1350} width={1}>
      <TextContainer py={4} px={[2, 3, 5]} maxWidth={450}>
        <HeaderText color="primaryDark">{title}</HeaderText>
        <HeaderTextSmall color="grey">{description}</HeaderTextSmall>
      </TextContainer>
    </HeroInner>
  </HeroContainer>
);

export default Hero;
