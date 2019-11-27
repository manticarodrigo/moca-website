import React from 'react';
import styled from 'styled-components/macro';

import BagImage from 'assets/bag.svg';
import BackgroundTherapist from 'assets/background-therapist.svg';
import Dashboard from 'assets/dashboard.png';
import Profile from 'assets/profile.png';
import SignUp from 'assets/sign-up.png';


import Container from 'components/Container';

import { Flex, Text, Image } from 'design-system';

const Title = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const SubTitle = styled(Text)`
font-size: 34px;
font-family: MuseoSansRounded-300;

@media (max-width: 500px) {
  font-size: 20px;
}
`;


const HeaderText = styled(Text)`
font-size: 34px;
font-family: MuseoSansRounded-700;

@media (max-width: 500px) {
  font-size: 20px;
}
`;

const SectionNumber = styled(Text)`
font-size: 30px;
font-family: MuseoSansRounded-300;
border: solid 3.6px #71cfeb;
border-radius: 50%;

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

const DottedBox = styled(Flex)`
  border: dotted 3.6px #71cfeb;
  flex-direction: column;
  alignItems: center;
`;


const Background = styled(Flex)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${BackgroundTherapist});
  background-repeat: no-repeat;

`;


const HowItWorks = () => (
  <Container>
    <Flex flexDirection="column" alignItems="center">
      <Title color="primary">How to Join MOCA</Title>
      <SubTitle color="grey" mt={4}>3 Easy Steps</SubTitle>
    </Flex>
    <Background flexDirection="column" mt={[2, 2, 7]}>
      <Flex justifyContent="center" flexWrap="wrap">
        <Flex
          mt={[2, 2, -6]}
          ml={[0, 0, -3]}
          mr={[0, 0, 3]}
          width={[1, 1, 1 / 2]}
          justifyContent={['center', 'center', 'flex-start']}
        >
          <Image
            width={[350, 350, 467]}
            height={[600, 600, 796]}
            src={SignUp}
          />
        </Flex>
        <Flex
          flexDirection="column"
          width={[1, 1, 1 / 2]}
          mt={[2, 2, 6]}
          alignItems={['center', 'center', 'flex-start']}
          style={{ boxSizing: 'border-box' }}
        >
          <Flex alignItems="center">
            <SectionNumber color="secondaryLight" mr={3} px={3} py={2}>1</SectionNumber>
            <HeaderText
              color="secondaryLight"
            >
              Sign Up
            </HeaderText>
          </Flex>
          <SectionDescription
            color="grey"
            mt={4}
            textAlign={['center', 'center', 'left']}
          >
            Download the MOCA app and fill in your name,
            email, license number, and contact information.
            MOCA will follow up with you via email to complete
            your background check and attain copies of any required documentation.
          </SectionDescription>
        </Flex>
      </Flex>
      <Flex justifyContent="center" flexWrap="wrap">
        <Flex
          flexDirection="column"
          width={[1, 1, 1 / 2]}
          mt={[5, 5, 7]}
          alignItems={['center', 'center', 'flex-start']}
          style={{ boxSizing: 'border-box' }}
        >
          <Flex alignItems="center">
            <SectionNumber
              color="secondaryLight"
              mr={3}
              px={3}
              py={2}
            >
              2
            </SectionNumber>
            <HeaderText
              color="secondaryLight"
            >
              Create your profile
            </HeaderText>
          </Flex>
          <SectionDescription
            textAlign={['center', 'center', 'left']}
            color="grey"
            mt={4}
          >
            Download the MOCA app and fill in your name,
            email, license number, and contact information.
            MOCA will follow up with you via email to complete
            your background check and attain copies of any required documentation.
          </SectionDescription>
        </Flex>
        <Flex
          mt={[4, 4, -6]}
          width={[1, 1, 1 / 2]}
          justifyContent={['center', 'center', 'flex-start']}
        >
          <Image
            width={[350, 350, 467]}
            height={[600, 600, 796]}
            src={Profile}
          />
        </Flex>
        <Flex justifyContent="center" flexWrap="wrap">
          <Flex
            mt={[4, 4, 5]}
            ml={[0, 0, -3]}
            mr={[0, 0, 3]}
            width={[1, 1, 1 / 2]}
            justifyContent={['center', 'center', 'flex-start']}
          >
            <Image
              width={[350, 350, 467]}
              height={[600, 600, 796]}
              src={Dashboard}
            />
          </Flex>
          <Flex
            flexDirection="column"
            width={[1, 1, 1 / 2]}
            mt={[2, 2, 7]}
            alignItems={['center', 'center', 'flex-start']}
            style={{ boxSizing: 'border-box' }}
          >
            <Flex alignItems="center" mt={2}>
              <SectionNumber px={3} py={2} color="secondaryLight" mr={3}>3</SectionNumber>
              <HeaderText
                color="secondaryLight"
              >
                Meet Patients
              </HeaderText>
            </Flex>
            <SectionDescription
              color="grey"
              mt={4}
              textAlign={['center', 'center', 'left']}
            >
              Once you have been verified, patients will be able to view
              your profile through the physical therapist search and reach out
              to you for treatment.
            </SectionDescription>
          </Flex>
        </Flex>
        <DottedBox p={4} mt={5}>
          <Image src={BagImage} />
          <HeaderText mt={4} color="primary" textAlign="center">
            We acknowledge hard work and determination.
          </HeaderText>
          <SectionDescription color="grey" textAlign="center" mt={3}>
            Receive THE MOCA WAY KIT after your 50th patient visit.
          </SectionDescription>
        </DottedBox>
      </Flex>
    </Background>
  </Container>
);

export default HowItWorks;
