import React from 'react';
import styled from 'styled-components/macro';

import { Box, Flex, Image, Text } from 'design-system';

import AppLogo from 'assets/App-icon.svg';
import CalendarScreenImage from 'assets/pngs/screenshot-calendar.png';
import SearchScreenImage from 'assets/pngs/screenshot-filtered-search.png';
import HeroBgImage from 'assets/jpgs/map-bg.jpg';

const HeaderText = styled(Text)`
  font-size: 64px;
  font-family: MuseoSansRounded-900; 

  @media (max-width: 500px) {
    font-size: 42px;
  }
`;

const HeaderTextSmall = styled(Text)`
  font-size: 24px;
  font-family: MuseoSansRounded-500; 

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const HeroContainer = styled(Box)`
  display: flex;
  justify-content: center;
  background-image: url(${HeroBgImage});
  background-size: cover;
`;

const HeroInner = styled(Flex)`
  box-sizing: border-box;
`;

const Hero = () => (
  <HeroContainer>
    <HeroInner py={5} px={[3, 4, 5]} flexWrap="wrap" maxWidth={1350} width={1}>
      <Flex flex={1} width={[1, 1, 1 / 2]}>
        <Flex flexDirection="column" alignItems="start">
          <Image width={[80, 80, 117]} src={AppLogo} />
          <HeaderText color="primary" mt={4}>
            PHYSICAL THERAPY
            {' '}
            <span style={{ color: '#71cfeb' }}>DELIVERED</span>
            {' '}
            TO YOU
          </HeaderText>
          <HeaderTextSmall color="primary" mt={4}>
            Available soon in Salt Lake City and surrounding areas.
          </HeaderTextSmall>

          {/* <Flex width={1} pt={6}>
            <Flex mr={4}>
              <Image src={AppleStoreImage} />
            </Flex>
            <Flex>
              <Image src={GooglePlayImage} />
            </Flex>
          </Flex> */}
        </Flex>
      </Flex>

      <Flex width={[1, 1, 1 / 2]} mt={[4, 4, 0]} mb={[0, 0, 5]} height={600} position="relative">
        <Box position="absolute" ml={[-3, -3, 5]}>
          <Image width={[423, 423, 500]} maxWidth={['90vw', '90vw']} src={CalendarScreenImage} />
        </Box>
        <Box position="absolute" ml={[4, 4, 6]} mt={[4, 4, 5]}>
          <Image width={[423, 423, 500]} maxWidth={['90vw', '90vw']} src={SearchScreenImage} />
        </Box>
      </Flex>

    </HeroInner>
  </HeroContainer>
);

export default Hero;
