import React from 'react';
import Responsive from 'react-responsive';
import styled from 'styled-components/macro';

import {
  Flex, Text, Box, Image,
} from 'design-system';

import Container from 'components/Container';

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

const list = [
  {
    new: 'Direct access to physical therapists',
    old: 'Visit the doctor, then the orthopedist, then the physical therapist (Higher Costs)',
    icon: IconOne,
  }, {
    new: 'Provider and patient driven marketplace',
    old: 'Insurance and clinic set pricing',
    icon: IconTwo,
  }, {
    new: 'Transparent pricing (Agreed-upon pricing based on time intervals)',
    old: 'Variable pricing (high premiums, hidden fees)',
    icon: IconThree,
  }, {
    new: 'No insurance needed',
    old: 'Insurance requirements and paperwork',
    icon: IconFour,
  }, {
    new: 'Therapists come to you',
    old: 'Excessive wait time at a clinic',
    icon: IconFive,
  }, {
    new: 'Optimized physical therapist search and filters based on your location',
    old: 'Physical therapists chosen for you',
    icon: IconSix,
  }, {
    new: 'Direct messaging',
    old: 'Lengthy call back and wait time',
    icon: IconSeven,
  }, {
    new: 'Built-in scheduling based on your availability',
    old: 'Rigid schedule based on clinic availability',
    icon: IconEight,
  }, {
    new: 'Physical therapist driven documentation',
    old: 'Insurance driven documentation',
    icon: IconNine,
  },
];

const MocaWaySection = () => {
  const Circle = styled(Flex)`
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 73px;
    height: 73px;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.14);
    background-color: #ffffff;
  `;

  const Card = styled(Box)`
    border-radius: 10px;
    box-shadow: 0 19px 17px 0 rgba(0, 0, 0, 0.17);
    background-color: #ffffff;
  `;

  const OldWayText = styled(Text)`
    font-family: MuseoSansRounded-300;
    font-size: 18px;
    color: #6a7e8f;
  `;

  const NewWayText = styled(Text)`
    font-family: MuseoSansRounded-700;
    font-size: 18px;
    color: #143d6c;
  `;

  const DescriptionBox = styled(Box)`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: dashed 2px #DEDEDE;
  `;

  const TitleText = styled(Text)`
    font-family: MuseoSansRounded-900;
    font-size: 34px;
  `;

  const DesktopView = (props) => <Responsive {...props} minWidth={1351} />;
  const MobileView = (props) => <Responsive {...props} maxWidth={1350} />;

  return (
    <Container centerMobile background={`url(${SectionImage})`}>

      <Flex flexDirection="column">

        <Card p={4}>
          <Flex>
            <DesktopView>
              <Box width={1 / 2}>
                <TitleText color="primary" textAlign="right">The MOCA Way</TitleText>
              </Box>
              <Circle mx={4} style={{ visibility: 'hidden' }} />
              <Box width={1 / 2}>
                <TitleText color="grey" textAlign="left">The Old Way</TitleText>
              </Box>
            </DesktopView>
            <MobileView>
              <Box width={1}>
                <TitleText color="primary" textAlign="left">The MOCA Way</TitleText>
                <TitleText color="grey" textAlign="left">The Old Way</TitleText>
              </Box>
              <Circle mx={4} style={{ visibility: 'hidden' }} />
            </MobileView>
          </Flex>

          {list.map((item) => (
            <>
              <DesktopView>
                <Flex py={3}>
                  <DescriptionBox width={1 / 2}>
                    <NewWayText textAlign="right">{item.new}</NewWayText>
                  </DescriptionBox>
                  <Box alignItems="center">
                    <Circle mx={4}>
                      <Image width={35} src={item.icon} />
                    </Circle>
                  </Box>
                  <DescriptionBox width={1 / 2}>
                    <OldWayText>{item.old}</OldWayText>
                  </DescriptionBox>
                </Flex>
              </DesktopView>
              <MobileView>
                <Flex py={3} justifyContent="space-between" >
                  <DescriptionBox width={1 / 2}>
                    <NewWayText>{item.new}</NewWayText>
                    <OldWayText>{item.old}</OldWayText>
                  </DescriptionBox>
                  <Box alignItems="center">
                    <Circle mx={4}>
                      <Image width={35} src={item.icon} />
                    </Circle>
                  </Box>
                </Flex>
              </MobileView>
            </>
          ))}
        </Card>

      </Flex>

    </Container>
  );
};

export default MocaWaySection;
