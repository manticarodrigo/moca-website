import React from 'react';
import styled from 'styled-components/macro';

import BackgroundImage from 'assets/back.png';
import SignupScreenImage from 'assets/phone-signup.png';
import FilterScreenImage from 'assets/phone-filter.png';
import BookAppointmentScreenImage from 'assets/phone-book-appointment.png';

import Container from 'components/Container';

import {
  Flex, Text, Image,
} from 'design-system';

const JoinMocaSection = () => {
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

  const SubTitle = styled(Text)`
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


  const List = styled(Text)`
    font-size: 16px;
    font-family: MuseoSansRounded-500;
    line-height: 30px;
    color: #6a7e8f;
  `;

  return (
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
              src={SignupScreenImage}
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
              Download the MOCA app and fill in your name, email, and preferred addresses for treatment.
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
                Search for a Physical Therapist
              </HeaderText>
            </Flex>
            <SectionDescription
              textAlign={['center', 'center', 'left']}
              color="grey"
              mt={4}
            >
              Use filters for availability, ratings, specialties, and pricing to choose the therapist that suits you best.
            </SectionDescription>
            <Flex>
              <List>
                <li>Neck</li>
                <li>Shoulder</li>
                <li>Elbow</li>
                <li>Wrist/Hand</li>
              </List>
              <List ml={25}>
                <li>Low Back</li>
                <li>Hip/Pelvis</li>
                <li>Knee</li>
                <li>Ankle/Foot</li>
              </List>
            </Flex>
          </Flex>
          <Flex
            mt={[4, 4, -6]}
            width={[1, 1, 1 / 2]}
            justifyContent={['center', 'center', 'flex-start']}
          >
            <Image
              width={[350, 350, 467]}
              height={[600, 600, 796]}
              src={FilterScreenImage}
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
                src={BookAppointmentScreenImage}
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
                  Book Your Appointment
                </HeaderText>
              </Flex>
              <SectionDescription
                color="grey"
                mt={4}
                textAlign={['center', 'center', 'left']}
              >
                Message with the physical therapist of your choice to schedule a treatment session
                   at a time, price, and location convenient to you. Do not forget to always rate your therapist!
              </SectionDescription>
            </Flex>
          </Flex>
        </Flex>
      </Background>
    </Container>
  );
};

export default JoinMocaSection;
