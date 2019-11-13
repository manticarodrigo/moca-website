import React from 'react';
import styled from 'styled-components/macro';

import {
  Box, Flex, Image, Text,
} from 'design-system';

import DownloadMocaScreenImage from 'assets/faq-hero-image.png';
import HeaderImage from 'assets/map.png';

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
  line-height: 38px; 

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const HeroBackground = styled(Box)`
  display: flex;
  justify-content: center;
  background-image: url(${HeaderImage});
  background-size: cover;

  @media (max-width: 500px) {
    overflow: hidden;
  }
`;

const HeroContainer = styled(Flex)`
  box-sizing: border-box;
`;

const Hero = () => (
  <HeroBackground>
    <HeroContainer py={5} px={[3, 4, 5]} flexWrap="wrap" maxWidth={1350} width={1}>

      <Flex flex={1} width={[1, 1, 1 / 2]}>
        <Flex flexDirection="column" alignItems="start">
          <HeaderText color="primary" mt={4} mb={40}>
            DOWNLOAD
            {' '}
            <span style={{ color: '#71cfeb' }}>MOCA</span>
          </HeaderText>
          <HeaderTextSmall color="grey" mt={4}>
            MOCA was created to meet the needs of providers and therapists, empowering both with time and capacity,
            ability to control their schedules, and aid in high-quality medical service at a convenient location.
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

      <Flex width={[1, 1, 1 / 2]} mt={[4, 4]} height={600} position="relative">
        <Image width={423} maxWidth={['90vw', '90vw']} src={DownloadMocaScreenImage} />
      </Flex>

    </HeroContainer>
  </HeroBackground>
);

export default Hero;
