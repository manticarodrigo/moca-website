import React, { useState } from 'react';
import styled from 'styled-components/macro';


import { Flex, Text, TextInput } from 'design-system';

import Container from 'components/Container';


const HeaderText = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900;


  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const HeaderTextSmall = styled(Text)`
  font-size: 24px;
  font-family: MuseoSansRounded-500;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const FormField = styled(TextInput)`
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10.8px;
  border-width: 0px;
  font-family: MuseoSansRounded-300;
  font-size: 21.6px;
  background-color: #f3f2f7;
  color: #485c7a;
  max-width: 400px;


  ::placeholder {
    color: #8ba5b9;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Submit = styled.button`
  max-width: 200px;
  width: 200px;
  padding: 10px;
  border-width: 0;
  border-radius: 10.8px;
  background-color: #143d6c;
  font-family: MuseoSansRounded-700;
  font-size: 24px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 500px) {
    font-size: 20px;
  }

`;


const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {

  };


  return (
    <Container centerMobile bg="#f6fdff">
      <Flex flexDirection="column">
        <HeaderText mx={[4, 4, 0]} color="primary" textAlign="center">
          Want more information before getting started?
        </HeaderText>
        <HeaderTextSmall mx={[4, 4, 0]} color="dark" mt={5} textAlign="center">
          Leave your contact information below and a MOCA specialist will contact you directly.
        </HeaderTextSmall>
        <Flex mt={5} alignItems="center" justifyContent="center" ml={[0, 0, -5]} flexDirection={['column', 'column', 'row']}>
          <FormField
            height={['60px', '60px', '80px']}
            width={['200px', '200px', '400px']}
            mb={[4, 4, 0]}
            mx={2}
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Submit onClick={() => handleSubmit()}>Send</Submit>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Contact;
