import React from 'react';
import styled, { css } from 'styled-components/macro';

import { Flex, Box, Text } from 'design-system';

import Container from 'components/Container';

import FAQImage from 'assets/jpgs/faq.jpg';
import FAQAltImage from 'assets/jpgs/faq-alt.jpg';

const faqs = [
  {
    question: 'Where does my treatment occur?',
    answers: `You choose the location that works best for you, whether it be work,
      home or the gym. Our therapists always come to you.`,
  },
  {
    question: 'What equipment do I need?',
    answers: 'Our therapist will come with all the necessary equipment and tools to treat you.',
  },
  {
    question: 'What do I wear?',
    answers: 'MOCA suggests loose-fitting clothing for exercising and moving comfortably.',
  },
  {
    question: 'Will I always see the same physical therapist?',
    answers: `Yes. You can set up an appointment with the same physical therapist based on 
      their availability, or another therapist of your choice.`,
  },
  {
    question: 'How do I pay?',
    answers: `You will enter your payment information prior to selecting a therapist. After 
    each treatment is completed, your payment is automatically deducted at the agreed-upon 
    pricing.`,
  },
];

const faqsTwo = [
  {
    question: 'What do I do if I am charged the wrong price or without receiving treatment?',
    answers: 'Reach out to MOCA here. In the meantime, please review our payment and cancellation policies here.',
  },
  {
    question: 'What if I have to cancel my appointment? ',
    answers: `Click here to view our cancellation policy. We understand emergencies happen that may
    affect your session. Contact us here if you would like MOCA to consider rescheduling a sessin or
    refunding a cancellation charge.`,
  },
  {
    question: 'How do I know if the right person is coming to treat me?',
    answers: `MOCA does not release your address nor any information to anyone except your therapist(s).
    We do suggest you follow best safety practices, including asking therapists to identify their vehicle,
    clothing, review their profile picture, and ask that they identify themselves before inviting therapists 
    into your home.`,
  },
  {
    question: 'Is my information protected? ',
    answers: `MOCA abides by all HIPPA requirements and MOCA prioritizes the security of your information
    with data integrity.`,
  },
];

const TitleText = styled(Text)`
  font-family: MuseoSansRounded-700;
  font-size: 44px;
`;

const ColumnContainer = styled(Flex)`
  ${({ reverse }) => reverse && css`
    @media (min-width: ${({ theme }) => theme.maxWidths[6] + 1}px) {
      & > *:first-child {
        order: 1;
        justify-content: flex-end;
      }
    }
  `}
`;

const ListContainer = styled(Box)`
  box-sizing: border-box;
`;

const ListItem = styled(Box)`
  &:not(:last-child) {
    border-bottom: dashed 2px #DEDEDE;
  }
`;

const QuestionText = styled(Text)`
  font-family: MuseoSansRounded-700;
  font-size: 21px;
`;

const AnswerText = styled(Text)`
  font-family: MuseoSansRounded-500;
  font-size: 18px;
`;

const Faq = ({ alt }) => (
  <Container>
    {!alt && <TitleText py={4} color="primary">FAQ</TitleText>}
    <ColumnContainer reverse={alt} my={4} flexWrap="wrap">
      <ListContainer width={[1, 1, 1 / 2]} pr={!alt && [0, 0, 5]} pl={alt && [0, 0, 5]}>
        {(alt ? faqsTwo : faqs).map((item, index) => (
          <ListItem key={index} mt={3} pt={2} pb={3}>
            <QuestionText color="primary">{item.question}</QuestionText>
            <AnswerText mt={2} color="grey">{item.answers}</AnswerText>
          </ListItem>
        ))}
      </ListContainer>
      <Flex
        my={4}
        p={[0, 0, 4]}
        height={536}
        width={[1, 1, 1 / 2]}
        justifyContent="center"
        style={{
          boxSizing: 'border-box',
          background: `url(${alt ? FAQAltImage : FAQImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    </ColumnContainer>
  </Container>
);

export default Faq;
