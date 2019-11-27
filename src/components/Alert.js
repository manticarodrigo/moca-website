import React from 'react';
import styled from 'styled-components/macro';

import { Flex, Text } from 'design-system';
import Container from './Container';

const DottedBox = styled(Flex)`
  flex-direction: column;
  align-items: center;
  border: dotted 3.6px #71cfeb;
`;

const HeaderText = styled(Text)`
  font-size: 34px;
  font-family: MuseoSansRounded-700;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const SectionDescription = styled(Text)`
  font-family: Helvetica;
  font-size: 24px;

  min-width:150px;


  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const Alert = ({ icon, title, description }) => (
  <Container>
    <DottedBox p={5} m={5}>
      {icon}
      <HeaderText mt={4} color="primary" textAlign="center">
        {title}
      </HeaderText>
      <SectionDescription color="grey" textAlign="center" mt={3}>
        {description}
      </SectionDescription>
    </DottedBox>
  </Container>
);

export default Alert;
