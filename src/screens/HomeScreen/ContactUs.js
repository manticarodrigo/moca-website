import React from 'react';

import styled from 'styled-components';

import SectionImage from '../../assets/contactUsSection.png';

import Text from '../../components/Text';
import { Flex, TextInput } from '../../design-system';

const ContactUs = () => {

  const Section = styled(Flex)`
    background-image: url(${SectionImage});
    background-position: center;
    background-repeat: no-repeat;
    justify-content: space-between;
  `;

  const Card = styled(Flex)`
    width: 300px;
    height: 550px;
    border-radius: 10px;
    box-shadow: -11px 12px 10px 0 rgba(7, 42, 68, 0.13);
    background-color: #ffffff;
  `;

  const FormField = styled(TextInput)`
    width: 270px;
    height: 35px;
    padding: 10px;
    margin: 5px;
    border-radius: 10.8px;
    border-width: 0px;
    background-color: #f3f2f7;
    ::placeholder {
      width: 104px;
      height: 26px;
      font-family: MuseoSansRounded;
      font-size: 21.6px;
      font-weight: 500;
      color: #8ba5b9;
    }
`;

  const Patient = styled('button')`
    width: 209px;
    height: 46px;
    margin: 5px;
    border-radius: 10.8px;
    border: solid 1.4px #e2e9ee;
    font-family: MuseoSansRounded;
    font-size: 21.6px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #8ba5b9;
  `;

  const Therapist = styled('button')`
    width: 221px;
    height: 46px;
    margin: 5px;
    border-radius: 10.8px;
    border: solid 1.4px #e2e9ee;
    background-color: #143d6c;
    font-family: MuseoSansRounded;
    font-size: 21.6px;
    font-weight: 500;
    color: #ffffff;
`;

  const Send = styled('button')`
    width: 290px;
    height: 50px;
    padding: 5px;
    margin: 5px;
    border-radius: 10.8px;
    background-color: #71cfeb;
    font-family: MuseoSansRounded;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
  `;

  return (
    <Section p={50}>
      <Flex flexDirection="column" width={460} m={100}>
        <Text primary fontSize={5} fontWeight={8} lineHeight={1.56}>Want to help bring MOCA to your area? </Text>
        <Text primaryLight fontSize={3} fontWeight={6} lineHeight={1.56} my={30}>
          We are looking to build a coalition of professionals and patients to transform the healthcare industry.
          And we want you to be part of this vision.
        </Text>
        <Text primaryLight fontSize={3} fontWeight={6} lineHeight={1.56}>
          Leave your contact information below and become a MOCA cohort leader for your area.
        </Text>
      </Flex>
      <Flex>
        <Card p={20} flexDirection="column">
          <FormField placeholder="Name" />
          <FormField placeholder="Last Name" />
          <FormField placeholder="Email Address" />
          <Flex>
            <Patient>Patient</Patient>
            <Therapist>Therapist</Therapist>
          </Flex>
          <FormField placeholder="Phone Number" />
          <FormField placeholder="City" />
          <FormField placeholder="City" />
          <FormField placeholder="City" />
          <Send>Send</Send>
        </Card>
      </Flex>
    </Section>
  );
}

export default ContactUs;