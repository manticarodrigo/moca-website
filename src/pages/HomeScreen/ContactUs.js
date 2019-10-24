import React, { useState } from 'react';
import styled from 'styled-components/macro';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import SectionImage from 'assets/contactUsSection.png';

import { Flex, TextInput } from 'design-system';

import Text from 'components/Text';

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
    font-family: MuseoSansRounded-300;
    font-size: 21.6px;
    font-weight: 500;
    color: #8ba5b9;
  }
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

const formU = '8e54069b62814584cde15825f';
const formId = 'ec77fcd5f9';
const formUrl = `https://approdite.us20.list-manage.com/subscribe/post?u=${formU}&id=${formId}`;

const ContactFields = ({ onSubmit }) => {
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
  <Section p={50}>
    <Flex flexDirection="column" width={460} m={100}>
      <Text primary fontSize={5} fontWeight={8} lineHeight={1.56}>
          Want to help bring MOCA to your area?
      </Text>
      <Text primaryLight fontSize={3} fontWeight={6} lineHeight={1.56} my={30}>
          We are looking to build a coalition of professionals and patients to transform the
          healthcare industry.
          And we want you to be part of this vision.
      </Text>
      <Text primaryLight fontSize={3} fontWeight={6} lineHeight={1.56}>
          Leave your contact information below and become a MOCA cohort leader for your area.
      </Text>
    </Flex>
    <Flex>
      <MailchimpSubscribe
        url={formUrl}
        render={({ subscribe, status, message }) => (
          <Card p={20} flexDirection="column">
            <ContactFields onSubmit={(data) => subscribe(data)} />
            {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
            {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
          </Card>
        )}
      />
    </Flex>
  </Section>
);

export default ContactUs;
