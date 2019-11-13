import React from 'react';

import styled from 'styled-components/macro';

import {
  Flex, TextInput, Text,
} from 'design-system';

const MainContainer = styled(Flex)`
  background-color: #f6fdff;

  @media (max-width: 500px) {
    padding: 0px;
  }
`;

const SubContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 0px;
  }
`;

const HeaderText = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-700;
  width: 60%;
  margin: 15px;
  line-height: 54px;
  color: #143d6c;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 32px;
    width: 100%;
    line-height: 40px;
  }
`;

const SubHeaderText = styled(Text)`
  font-size: 24px;
  font-family: MuseoSansRounded-500;
  width: 45%;
  margin: 15px;
  line-height: 38px;
  color: #485c7a;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 18px;
    width: 100%;
    line-height: 25px;
  }
`;

const EmailField = styled(TextInput)`
  width: 400px;
  box-sizing: border-box;
  box-shadow: 0 2px 2px 0 rgba(0, 42, 68, 0.5);
  padding: 20px;
  margin-right: 10px;
  border-radius: 10.8px;
  border-width: 0px;
  font-family: MuseoSansRounded-300;
  font-size: 21.6px;
  background-color: #f3f2f7;
  color: #485c7a;

  ::placeholder {
    color: #8ba5b9;
  }

  @media (max-width: 500px) {
    width: 350px;
    margin-bottom: 20px;
  }
`;

const EmailContainer = styled(Flex)`
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 76px;
  padding: 20px;
  border-radius: 10.8px;
  border: solid 1.4px #e2e9ee;
  color: #ffffff;
  background-color: #143d6c;
  font-family: MuseoSansRounded-300;
  font-size: 21.6px;
  text-align: center;
`;

const Contact = () => (
  <MainContainer py={100} px={150}>
    <SubContainer>
      <HeaderText>Want more information before getting started?</HeaderText>
      <SubHeaderText>Leave your contact information below and a MOCA specialist will contact you directly.</SubHeaderText>
      <EmailContainer m={40}>
        <EmailField placeholder="Email Address" />
        <Button>Send</Button>
      </EmailContainer>
    </SubContainer>
  </MainContainer>
);

export default Contact;
