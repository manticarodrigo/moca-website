import React from 'react';
import styled from 'styled-components/macro';

import { Flex, Text } from 'design-system';

import Container from 'components/Container';
import Image from 'components/Image';


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
  border-radius: 10px;
  width: 100px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px 0 rgba(7, 42, 68, 0.1);
`;

const ImageContainer = styled(Flex)`
  box-sizing: border-box;
`;

const TextContainer = styled(Flex)`
  box-sizing: border-box;
`;

const CardContainer = styled(Flex)`
  flex-wrap: wrap;
`;

const priceRange = [
  { price: 50, sessionDuration: '30 minute treatment' },
  { price: 70, sessionDuration: '45 minute treatment' },
  { price: 100, sessionDuration: '60 minute treatment' },
];

const PricingInfo = ({ image, description }) => (
  <Container bg="lighterBlue" py={5}>
    <ImageContainer width={[1, 1, 1, 1 / 2]}>
      <Image contain src={image} />
    </ImageContainer>
    <TextContainer width={[1, 1, 1, 1 / 2]} flexDirection="column" pl={[0, 0, 4]}>
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
      <DescriptionText color="grey">{description}</DescriptionText>
      <SmallTitleText color="primaryDark">
        Average pricing ranges:
      </SmallTitleText>
      <CardContainer pt={3}>
        {priceRange.map((range, index) => (
          <PriceCard key={index} p={4} mr={2} mb={2}>
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

export default PricingInfo;
