import React from 'react';
import styled from 'styled-components/macro';

import PricingScreenImage from 'assets/phone-pricing.png';

import {
  Flex, Text, Image,
} from 'design-system';

const PricingSection = () => {
  const MainContainer = styled(Flex)`
    padding: 50px;
    background-color: #F6FDFF;
  `;

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

  return (
    <MainContainer>
      <Flex>
        <Image src={PricingScreenImage} />
      </Flex>
      <Flex flexDirection="column" p={50}>
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
        <Flex>
          {priceRange.map((range) => (
            <PriceCard>
              <PriceText color="secondaryLight">
                $
                {range.price}
              </PriceText>
              <SessionDurationText color="grey">{range.sessionDuration}</SessionDurationText>
            </PriceCard>
          ))}
        </Flex>

      </Flex>
    </MainContainer>
  );
};

export default PricingSection;
