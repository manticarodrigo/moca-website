import React from 'react';
import styled from 'styled-components/macro';

import Bitmap from 'assets/bitmap.png';
import {
  Flex, Box, Image, Text,
} from 'design-system';

const Faq = () => {
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

  const QuestionText = styled(Text)`
    font-family: MuseoSansRounded-700;
    font-size: 21px;
  `;

  const AnswerText = styled(Text)`
  font-family: MuseoSansRounded-500;
  font-size: 18px;
`;


  return (
    <Flex width={1}>
      <Box m="10%">
        <TitleText color="primary">FAQ</TitleText>
        <Flex my={4} flexWrap="wrap">
          <Box width={[1, 1, 1 / 2]}>
            {faqs.map((item) => (
              <Box borderBottom="dashed 2px #DEDEDE" mt={3} pt={2} pb={3}>
                <QuestionText color="primary">{item.question}</QuestionText>
                <AnswerText mt={2} color="grey">{item.answers}</AnswerText>
              </Box>
            ))}
          </Box>
          <Flex width={[1, 1, 1 / 2]} justifyContent="center">
            <Image width={562} src={Bitmap} />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Faq;
