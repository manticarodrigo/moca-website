import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { space } from 'styled-system';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import mailchimp from 'constants/mailchimp';

import ContactBgImage from 'assets/jpgs/contact-form-bg.jpg';

import { Flex, Text, HyperLink } from 'design-system';

import Container from 'components/Container';
import FormField from 'components/FormField';
import MailchimpStatus from 'components/MailchimpStatus';

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
  width: 100%;
  border-radius: 10px;
  box-shadow: -11px 12px 10px 0 rgba(7, 42, 68, 0.13);
  background-color: #ffffff;
`;


const RadioButton = styled.button`
  ${space}
  flex: 1;
  padding: 20px;
  border-radius: 10.8px;
  border: solid 1.4px #e2e9ee;
  color: ${({ checked }) => (checked ? '#fff' : '#8ba5b9')};
  background-color: ${({ checked }) => (checked ? '#143d6c' : 'transparent')};
  font-family: MuseoSansRounded-300;
  font-size: 21.6px;
  text-align: center;
`;

const Send = styled.button`
  width: 100%;
  padding: 20px;
  border-width: 0;
  border-radius: 10.8px;
  background-color: #71cfeb;
  font-family: MuseoSansRounded-700;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;

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
      <Flex mb={3}>
        <RadioButton
          mr={2}
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

const ContactUs = ({ alt }) => (
  <Container background={`url(${ContactBgImage})`}>
    <Flex
      style={{ boxSizing: 'border-box' }}
      flexDirection="column"
      justifyContent="center"
      pr={[0, 0, 5]}
      width={[1, 1, 1 / 2]}
    >
      <TitleText py={1} color="primary">
        {alt ? 'NEED TO CONTACT THE MOCA TEAM?' : 'Want to help bring MOCA to your area?'}
      </TitleText>
      <DescriptionText color="primary" pt={4}>
        {alt
          ? (
            <>
              Email us at
              {' '}
              <HyperLink color="primary" target="_blank" rel="noopener noreferrer" href="mailto:hello@joinmoca.com">
                hello@joinmoca.com
              </HyperLink>
              {' '}
              or complete the contact form.
            </>
          )
          : 'We are looking to build a coalition of professionals and patients to transform the healthcare industry. And we want you to be part of this vision.\n\nLeave your contact information below and become a MOCA cohort leader for your area.'}
      </DescriptionText>
    </Flex>

    <Flex style={{ boxSizing: 'border-box' }} width={[1, 1, 1 / 2]} my={[4, 4, 0]}>
      <MailchimpSubscribe
        url={mailchimp.formUrl}
        render={({ subscribe, status, message }) => (
          <Card pt={5} px={4} pb={4} flexDirection="column">
            <ContactForm onSubmit={(data) => subscribe(data)} />
            <MailchimpStatus status={status} message={message} />
          </Card>
        )}
      />
    </Flex>
  </Container>
);

export default ContactUs;
