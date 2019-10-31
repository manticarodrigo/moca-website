import React from 'react';
import styled from 'styled-components/macro';

import BackgroundImage from 'assets/back.png';

import {
  Flex, Text, Image,
} from 'design-system';

const JoinMocaSection = () => {
  const MainContainer = styled(Flex)`
    flex-direction: column;
    padding: 150px;
    background-color: #FFFFFF;
    align-items: center;
  `;

  const HeaderText = styled(Text)`
    font-size: 44px;
    font-family: MuseoSansRounded-900; 
    line-height: 54px;

    @media (max-width: 500px) {
      font-size: 42px;
    }
  `;

  const SubHeaderText = styled(Text)`
    font-size: 34px;
    font-family: MuseoSansRounded-300; 
    line-height: 38px;
    padding: 30px;

    @media (max-width: 500px) {
      font-size: 42px;
    }
  `;

  return (
    <MainContainer>
      <HeaderText color="primaryDark">How to Join MOCA</HeaderText>
      <SubHeaderText color="grey">3 Easy Steps</SubHeaderText>
      <Image src={BackgroundImage} />
    </MainContainer>
  );
};

export default JoinMocaSection;
