import React from 'react';
import styled from 'styled-components/macro';

import BackgroundImage from 'assets/back.png';
import SignupScreenImage from 'assets/phone-signup.png';
import FilterScreenImage from 'assets/phone-filter.png';
import BookAppointmentScreenImage from 'assets/phone-book-appointment.png';

import {
  Box, Flex, Text, Image,
} from 'design-system';

const JoinMocaSection = () => {
  const MainContainer = styled(Flex)`
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #FFFFFF;
    align-items: center;
  `;

  const HeaderTextContainer = styled(Flex)`
    flex-direction: column;
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

  const NumberContainer = styled(Flex)`
    width: 20px;
    height: 20px;
    line-height: 20px;
    border: solid 2.5px #71cfeb;
    border-radius: 50%;
    padding: 10px;
    justify-content: center;
    font-family: MuseoSansRounded-700;
    font-size: 25px;
    color: #71cfeb;
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

  const Title = styled(Text)`
    font-size: 30px;
    font-family: MuseoSansRounded-700; 
    color: #71cfeb;
  `;

  const Description = styled(Text)`
    width: 400px;
    height: 114px;
    margin-top: 15px;
    font-family: Helvetica;
    font-size: 20px;
    line-height: 1.58;
    color: #6a7e8f;
  `;

  const List = styled(Text)`
    font-size: 16px;
    font-family: MuseoSansRounded-500;
    line-height: 30px;
    color: #6a7e8f;
  `;

  return (
    <MainContainer>
      <HeaderTextContainer>
        <HeaderText color="primaryDark">How to Join MOCA</HeaderText>
        <SubHeaderText color="grey">3 Easy Steps</SubHeaderText>
      </HeaderTextContainer>
      <Flex>
        <Flex>
          <Box position="absolute" ml={100}>
            <Image width={423} maxWidth={['90vw', '90vw']} src={SignupScreenImage} />
          </Box>
          <Flex position="absolute" ml={600} mt={200}>
            <NumberContainer>
              1
            </NumberContainer>
            <Flex flexDirection="column" px={10} py={2}>
              <Title>Sign Up:</Title>
              <Description>
                Download the MOCA app and fill in your name, email, and preferred addresses for treatment.
              </Description>
            </Flex>
          </Flex>
          <Box position="absolute" ml={690} mt={700}>
            <Image width={423} maxWidth={['90vw', '90vw']} src={FilterScreenImage} />
          </Box>
          <Flex position="absolute" ml={130} mt={1050}>
            <NumberContainer>
              2
            </NumberContainer>
            <Flex flexDirection="column" px={10} py={2}>
              <Title>Search for a Physical Therapist</Title>
              <Description>
                Use filters for availability, ratings, specialties, and pricing to choose the therapist that suits you best.
              </Description>
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
          </Flex>
          <Flex>
            <Box position="absolute" ml={100} mt={1500}>
              <Image width={423} maxWidth={['90vw', '90vw']} src={BookAppointmentScreenImage} />
            </Box>
            <Flex position="absolute" ml={600} mt={1800}>
              <NumberContainer>
                3
              </NumberContainer>
              <Flex flexDirection="column" px={10} py={2}>
                <Title>Book Your Appointment</Title>
                <Description>
                  Message with the physical therapist of your choice to schedule a treatment session
                  at a time, price, and location convenient to you. Do not forget to always rate your therapist!
                </Description>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex ml={50} pt={150}>
          <Image src={BackgroundImage} />
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default JoinMocaSection;
