import React from 'react';
import styled from 'styled-components/macro';

import {
  Flex, Box, Text,
} from 'design-system';

import Container from 'components/Container';

import FAQImage from 'assets/faqs.png';

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

const TitleText = styled(Text)`
  font-family: MuseoSansRounded-700;
  font-size: 44px;
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

const Faq = () => (
  <Container>
    <TitleText py={4} color="primary">FAQ</TitleText>
    <Flex my={4} flexWrap="wrap">
      <ListContainer width={[1, 1, 1 / 2]} pr={[0, 0, 5]}>
        {faqs.map((item) => (
          <ListItem mt={3} pt={2} pb={3}>
            <QuestionText color="primary">{item.question}</QuestionText>
            <AnswerText mt={2} color="grey">{item.answers}</AnswerText>
          </ListItem>
        ))}
      </ListContainer>
      <Flex
        my={[4, 4, 0]}
        p={[0, 0, 4]}
        height={536}
        width={[1, 1, 1 / 2]}
        justifyContent="center"
        style={{
          boxSizing: 'border-box',
          background: `url(${FAQImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    </Flex>
  </Container>
);

export default Faq;
