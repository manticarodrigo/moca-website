import React, { useState } from 'react';
import styled from 'styled-components/macro';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import mailchimp from 'constants/mailchimp';

import EmailIcon from 'assets/svgs/email-input.svg';

import { Flex, Text, Button } from 'design-system';

import Container from 'components/Container';
import FormField from 'components/FormField';
import MailchimpStatus from 'components/MailchimpStatus';

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

const EmailContainer = styled(Flex)`
  align-items: flex-start;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SubmitButton = styled(Button)`
  padding: 20px 35px;
  border-radius: 10.8px;
  border: solid 1.4px #e2e9ee;
  color: #ffffff;
  background-color: #143d6c;
  font-family: MuseoSansRounded-300;
  font-size: 21.6px;
  text-align: center;
`;

const EmailForm = () => {
  const [formData, setFormData] = useState({ EMAIL: '' });

  const onChangeField = (key) => ({ currentTarget }) => setFormData((prev) => ({
    ...prev,
    [key]: currentTarget.value,
  }));

  return (
    <Container bg="#f6fdff">
      <SubContainer>
        <HeaderText>Want more information before getting started?</HeaderText>
        <SubHeaderText>
          Leave your contact information below and a MOCA specialist will contact you directly.
        </SubHeaderText>
        <MailchimpSubscribe
          url={mailchimp.formUrl}
          render={({ subscribe, status, message }) => (
            <>
              <EmailContainer m={40}>
                <FormField
                  shadow
                  icon={EmailIcon}
                  value={formData.EMAIL}
                  placeholder="Email Address"
                  onChange={onChangeField('EMAIL')}
                />
                <SubmitButton ml={3} onClick={() => subscribe(formData)}>Send</SubmitButton>
              </EmailContainer>
              <MailchimpStatus status={status} message={message} />
            </>
          )}
        />
      </SubContainer>
    </Container>
  );
};

export default EmailForm;
