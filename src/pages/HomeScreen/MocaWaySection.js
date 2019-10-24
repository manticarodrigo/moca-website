import React from 'react';

import styled from 'styled-components/macro';

import SectionImage from 'assets/therapist.png';

import IconOne from 'assets/1.svg';
import IconTwo from 'assets/2.svg';
import IconThree from 'assets/3.svg';
import IconFour from 'assets/4.svg';
import IconFive from 'assets/5.svg';
import IconSix from 'assets/6.svg';
import IconSeven from 'assets/7.svg';
import IconEight from 'assets/8.svg';
import IconNine from 'assets/9.svg';

import Text from 'components/Text';
import { Flex, Image } from 'design-system';

const MocaWaySection = () => {
  const Section = styled(Flex)`
    background-image: url(${SectionImage});
    background-position: center;
    background-repeat: no-repeat;
  `;

  const Block = styled(Flex)`
    display:block;
    margin-top: 16px;
    margin-bottom: 12px;
  `;

  const Circle = styled(Flex)`
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 10px;
    border-radius: 50%;
    box-shadow: 0 19px 17px 0 rgba(0, 0, 0, 0.17);
    width: 45px;
    height: 45px;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.14);
    background-color: #ffffff;
  `;

  const Icons = [IconOne, IconTwo, IconThree, IconFour, IconFive, IconSix, IconSeven,
    IconEight, IconNine];

  const mocaWay = [
    'Direct access to physical therapists',
    'Provider and patient driven marketplace',
    'Transparent pricing (Agreed-upon pricing based on time intervals)',
    'No insurance needed',
    'Therapists come to you',
    'Optimized physical therapist search and filters based on your location',
    'Direct messaging',
    'Built-in scheduling based on your availability',
    'Physical therapist driven documentation',
  ];

  const oldWay = [
    'Visit the doctor, then the orthopedist, then the physical therapist (Higher Costs)',
    'Insurance and clinic set pricing',
    'Variable pricing (high premiums, hidden fees)',
    'Insurance requirements and paperwork',
    'Excessive wait time at a clinic',
    'Physical therapists chosen for you',
    'Lengthy call back and wait time',
    'Rigid schedule based on clinic availability',
    'Insurance driven documentation',
  ];

  const Card = styled(Flex)`
    border-radius: 10px;
    box-shadow: 0 19px 17px 0 rgba(0, 0, 0, 0.17);
    background-color: #ffffff;
  `;


  return (
    <Section flexDirection="column">
      <Card flexDirection="column" mx={200} my={120} bg="white">
        <Flex justifyContent="end" mx={270} my={45}>
          <Text primary fontSize={3} mx={50} fontWeight={8}>The MOCA Way</Text>
          <Text grey fontSize={3} mx={50} fontWeight={8}>The Old Way</Text>
        </Flex>
        <Flex px={80}>
          <Flex flexDirection="column">
            {mocaWay.map((item) => (
              <Block justifyContent="start" textAlign="right">
                <Text primary my={10} fontSize={0} fontWeight={6} mr={20}>{item}</Text>
              </Block>
            ))}
          </Flex>
          <Flex flexDirection="column">
            {Icons.map((icon) => (
              <Circle>
                <Image width={30} height={30} src={icon} />
              </Circle>
            ))}
          </Flex>
          <Flex flexDirection="column">
            {oldWay.map((item) => (
              <Block>
                <Text grey my={10} fontSize={0} fontWeight={2} ml={20}>{item}</Text>
              </Block>
            ))}
          </Flex>
        </Flex>
      </Card>
    </Section>
  );
};

export default MocaWaySection;
