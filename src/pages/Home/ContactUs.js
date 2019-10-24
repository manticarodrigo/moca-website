import React, { useState } from 'react';
import styled from 'styled-components/macro';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import ContactUsImg from 'assets/contactUsSection.png';

import {
  Flex, Text, Box, TextInput,
} from 'design-system';

const Section = styled(Flex)`
  background-image: url(${ContactUsImg});
  background-position: center;
  background-repeat: no-repeat;
`;

const TitleText = styled(Text)`
  font-family: MuseoSansRounded-900;
  font-size: 44px;
`;

const DescriptionText = styled(Text)`
  font-family: MuseoSansRounded-700;
  font-size: 24px;
  line-height: 1.58;
  color: #485c7a;
`;

const Card = styled(Flex)`
  min-width: 520px;
  height: 550px;
  border-radius: 10px;
  box-shadow: -11px 12px 10px 0 rgba(7, 42, 68, 0.13);
  background-color: #ffffff;
`;


const RadioButton = styled('button')`
  flex: 1;
  margin-right: 5px;
  border-radius: 10.8px;
  border: solid 1.4px #e2e9ee;
  color: ${({ checked }) => (checked ? '#fff' : '#8ba5b9')};
  background-color: ${({ checked }) => (checked ? '#143d6c' : 'transparent')};
  font-family: MuseoSansRounded-300;
  font-size: 21.6px;
  text-align: center;
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

const FormField = styled(TextInput)`
  height: 75px;
  padding: 10px;
  margin: 5px;
  border-radius: 10.8px;
  border-width: 0px;
  background-color: #f3f2f7;
  ::placeholder {
    width: 104px;
    height: 26px;
    font-family: MuseoSansRounded-300;
    font-size: 21.6px;
    color: #8ba5b9;
  }
`;


const formU = '8e54069b62814584cde15825f';
const formId = 'ec77fcd5f9';
const formUrl = `https://approdite.us20.list-manage.com/subscribe/post?u=${formU}&id=${formId}`;

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    FNAME: '',
    LNAME: '',
    EMAIL: '',
    TYPE: 'PATIENT',
    PHONE: '',
    CITY: '',
    STATE: '',
    ZIPCODE: '',
  });

  const onChangeField = (key) => ({ currentTarget }) => setFormData((prev) => ({
    ...prev,
    [key]: currentTarget.value,
  }));

  const onChangeRadio = (value) => setFormData((prev) => ({ ...prev, TYPE: value }));

  const onClickSend = () => onSubmit(formData);

  return (
    <>
      <FormField value={formData.FNAME} placeholder="Name" onChange={onChangeField('FNAME')} />
      <FormField value={formData.LNAME} placeholder="Last Name" onChange={onChangeField('LNAME')} />
      <FormField value={formData.EMAIL} placeholder="Email Address" onChange={onChangeField('EMAIL')} />
      <Flex>
        <RadioButton
          checked={formData.TYPE === 'PATIENT'}
          onClick={() => onChangeRadio('PATIENT')}
        >
          Patient
        </RadioButton>
        <RadioButton
          checked={formData.TYPE === 'THERAPIST'}
          onClick={() => onChangeRadio('THERAPIST')}
        >
          Therapist
        </RadioButton>
      </Flex>
      <FormField value={formData.PHONE} placeholder="Phone Number" onChange={onChangeField('PHONE')} />
      <FormField value={formData.CITY} placeholder="City" onChange={onChangeField('CITY')} />
      <FormField value={formData.STATE} placeholder="State" onChange={onChangeField('STATE')} />
      <FormField value={formData.ZIPCODE} placeholder="ZIP Code" onChange={onChangeField('ZIPCODE')} />
      <Send onClick={onClickSend}>Send</Send>
    </>
  );
};

const ContactUs = () => (
  <Section>
    <Flex mx="10%" my="5%">
      <Box mt={6} width={3.5 / 10}>
        <TitleText py={1} color="primary"> Want to help bring MOCA to your area? </TitleText>
        <DescriptionText color="primary" pt={4}>
          We are looking to build a coalition of professionals and patients to transform the
          healthcare industry.
          And we want you to be part of this vision.
        </DescriptionText>

        <DescriptionText color="primary" pt={4}>
        Leave your contact information below and become a MOCA cohort leader for your area.
        </DescriptionText>
      </Box>

      <Box width={6.5 / 10}>
        <Flex justifyContent="flex-end">
          <MailchimpSubscribe
            url={formUrl}
            render={({ subscribe, status, message }) => (
              <Card p={4} flexDirection="column">
                <ContactForm onSubmit={(data) => subscribe(data)} />
                {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
                {status === 'error' && (
                <div
                  style={{ color: 'red' }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
                {status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
              </Card>
            )}
          />
        </Flex>
      </Box>
    </Flex>
  </Section>
);

export default ContactUs;
