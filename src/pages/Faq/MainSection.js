import React from 'react';
import styled from 'styled-components/macro';

import FaqsFirstSection from 'components/shared/Faq';

import {
  Flex, Box, Text,
} from 'design-system';

import Container from 'components/Container';
import FAQImageTwo from 'assets/faqs-image-two.png';

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

const QuestionText = styled(Text)`
  font-family: MuseoSansRounded-700;
  font-size: 21px;
`;

const AnswerText = styled(Text)`
  font-family: MuseoSansRounded-500;
  font-size: 18px;
`;

const MainSection = () => (
  <Flex flexDirection="column">
    <FaqsFirstSection />
    <Flex py={[4, 4, 6]} px={[3, 4, 5]} my={4} flexWrap="wrap">
      <Flex
        my={[4, 4, 0]}
        p={[0, 0, 4]}
        height={536}
        width={[1, 1, 1 / 2]}
        justifyContent="center"
        style={{
          boxSizing: 'border-box',
          background: `url(${FAQImageTwo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Box style={{ boxSizing: 'border-box' }} width={[1, 1, 1 / 2]} pl={[0, 0, 5]}>
        {faqsTwo.map((item) => (
          <Box borderBottom="dashed 2px #DEDEDE" mt={3} pt={2} pb={3}>
            <QuestionText color="primary">{item.question}</QuestionText>
            <AnswerText mt={2} color="grey">{item.answers}</AnswerText>
          </Box>
        ))}
      </Box>
    </Flex>
  </Flex>
);

export default MainSection;
