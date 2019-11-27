import React from 'react';
import styled from 'styled-components/macro';

import PricingScreenImage from 'assets/phone-pricing.png';

import Container from 'components/Container';

import { Flex, Text, Image } from 'design-system';

const HeaderText = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900; 
  line-height: 62px;

  @media (max-width: 500px) {
    font-size: 42px;
  }
`;

const DescriptionText = styled(Text)`
  font-size: 24px;
  font-family: MuseoSansRounded-500;
  line-height: 34px;
  padding: 15px 0px 15px 0px;
`;

const SmallTitleText = styled(Text)`
  font-size: 34px;
  font-family: MuseoSansRounded-900; 
  line-height: 54px;

  @media (max-width: 500px) {
    font-size: 42px;
  }
`;

const PriceText = styled(Text)`
  font-size: 50px;
  font-family: MuseoSansRounded-900; 
  line-height: 54px;
`;

const SessionDurationText = styled(Text)`
  font-size: 16px;
  font-family: MuseoSansRounded-700; 
  text-align: center;
  padding: 6px;
`;

const PriceCard = styled(Flex)`
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
  border-radius: 10px;
  padding: 27px;
  margin: 24px;
  background-color: #ffffff;
  height: 100px;
  width: 100px;
`;

const ImageContainer = styled(Flex)`
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const TextContainer = styled(Flex)`
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 15px;
  }
`;

const CardContainer = styled(Flex)`
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MobileImage = styled(Image)`
  @media (max-width: 500px) {
    width: 370px;
  }
`;

const priceRange = [
  {
    price: 50,
    sessionDuration: '30 minutes treatment',
  },
  {
    price: 70,
    sessionDuration: '45 minutes treatment',
  },
  {
    price: 100,
    sessionDuration: '60 minutes treatment',
  },
];

const PricingSection = () => (
  <Container bg="lighterBlue">
    <ImageContainer width={[1 / 2]}>
      <MobileImage src={PricingScreenImage} />
    </ImageContainer>
    <TextContainer width={[1 / 2]} flexDirection="column" p={50}>
      <HeaderText color="primary">
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
      <DescriptionText color="grey">
        We intend for this market-driven platform to decrease your overall cost of care.
        We will stream-line your experience by removing unnecessary steps and paperwork
        that comes with insurance companies. This is why MOCA selects cash-based services
        by accepting all major credit or banking cards.
      </DescriptionText>
      <SmallTitleText color="primaryDark">
        Average pricing ranges:
      </SmallTitleText>
      <CardContainer>
        {priceRange.map((range) => (
          <PriceCard>
            <PriceText color="secondaryLight">
              $
              {range.price}
            </PriceText>
            <SessionDurationText color="grey">{range.sessionDuration}</SessionDurationText>
          </PriceCard>
        ))}
      </CardContainer>
    </TextContainer>
  </Container>
);

export default PricingSection;
