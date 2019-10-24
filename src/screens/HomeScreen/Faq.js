import React from 'react';

import styled from 'styled-components';

import Bitmap from '../../assets/bitmap.png';

import Text from '../../components/Text';
import { Flex, Image } from '../../design-system';

const Faq = () => {

  const questionsAndAnswers = [
    {
      question: 'Where does my treatment occur?',
      answers: 'You choose the location that works best for you, whether it be work, home or the gym. Our therapists always come to you.',
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
      answers: 'Yes. You can set up an appointment with the same physical therapist based on their availability, or another therapist of your choice.',
    },
    {
      question: 'How do I pay?',
      answers: 'You will enter your payment information prior to selecting a therapist. After each treatment is completed, your payment is automatically deducted at the agreed-upon pricing.'
    },
  ];

  return (
    <Flex mx={170} my={120} justifyContent="space-between">
      <Flex flexDirection="column" width={565}>
        <Text primaryDark fontSize={4} mb={20} fontWeight={8}>FAQ</Text>
        {questionsAndAnswers.map((item) => (
          <Flex flexDirection="column">
            <Text primary fontSize={2} my={10} fontWeight={6}>{item.question}</Text>
            <Text grey fontSize={1} my={10} fontWeight={4}>{item.answers}</Text>
          </Flex>
        ))}
      </Flex>
      <Flex alignItems="center" justifyContent="center" p={30}>
        <Image height={340} width={360} src={Bitmap} />
      </Flex>
    </Flex>
  );
};

export default Faq;