import React from 'react';
import styled from 'styled-components/macro';

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

const FeatureGrid = ({ title, features }) => (
  <Container>
    <Flex py={3} flexDirection="column" alignItems="center" bg="#fff">
      <TitleText textAlign="center" color="primaryDark">{title}</TitleText>
      <Flex justifyContent="center" pt={5} flexWrap="wrap">
        {Object.entries(features).map(([key, value]) => (
          <FeatureCard key={key} m={3} px={4} pt={5} pb={3}>
            {value.icon}
            <CardDescription color="grey" pt={30}>{value.description}</CardDescription>
          </FeatureCard>
        ))}
      </Flex>
    </Flex>
  </Container>
);

export default FeatureGrid;
