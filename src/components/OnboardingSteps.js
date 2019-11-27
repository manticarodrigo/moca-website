import React from 'react';
import styled from 'styled-components/macro';

import { Flex, Text, Image } from 'design-system';

import BackgroundImage from 'assets/svgs/icon-bg.svg';

import Container from 'components/Container';


const HeaderText = styled(Text)`
  font-size: 34px;
  font-family: MuseoSansRounded-700;
  
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const SectionContainer = styled(Flex)`
  @media (min-width: ${({ theme }) => theme.maxWidths[6] + 1}px) {

    &:nth-child(even) {

      & > *:first-child {
        order: 1;
        justify-content: flex-end;
      }
    }
  }
`;

const SectionNumber = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: MuseoSansRounded-700;
  border: solid 3.6px #71cfeb;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const SectionDescription = styled(Text)`
  min-width: 150px;
  font-family: Helvetica;
  font-size: 24px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const Subtitle = styled(Text)`
  font-size: 34px;
  font-family: MuseoSansRounded-300;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const Background = styled(Flex)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
`;

const Title = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;


const List = styled.ul`
  font-size: 16px;
  font-family: MuseoSansRounded-500;
  line-height: 30px;
  color: #6a7e8f;
  columns: 2;
  list-style-position: inside;
`;


const JoinMocaSection = ({ sections }) => (
  <Container>
    <Flex flexDirection="column" alignItems="center" width="100%">
      <Title color="primary">How to Join MOCA</Title>
      <Subtitle color="grey" mt={4}>3 Easy Steps</Subtitle>
    </Flex>
    <Background flexDirection="column" mt={[2, 2, 7]}>
      {Object.entries(sections).map(([key, value], index) => (
        <SectionContainer key={key} justifyContent="center" flexWrap="wrap" mb={5}>
          <Flex
            mt={[2, 2, -6]}
            ml={[0, 0, -3]}
            mr={[0, 0, 3]}
            width={[1, 1, 1 / 2]}
            justifyContent={['center', 'center', 'flex-start']}
          >
            <Image style={{ maxWidth: '100%', objectFit: 'contain' }} src={value.image} />
          </Flex>
          <Flex
            flexDirection="column"
            width={[1, 1, 1 / 2]}
            mt={[2, 2, 6]}
            alignItems={['center', 'center', 'flex-start']}
            style={{ boxSizing: 'border-box' }}
          >
            <Flex alignItems="center">
              <SectionNumber color="secondaryLight" mr={3}>{index + 1}</SectionNumber>
              <HeaderText color="secondaryLight">{value.title}</HeaderText>
            </Flex>
            <SectionDescription color="grey" mt={4} textAlign={['center', 'center', 'left']}>
              {value.description}
            </SectionDescription>
            {value.listItems && (
              <Flex mt={3}>
                <List>
                  {value.listItems.map((item) => <li>{item}</li>)}
                </List>
              </Flex>
            )}
          </Flex>
        </SectionContainer>
      ))}
    </Background>
  </Container>
);

export default React.memo(JoinMocaSection);
