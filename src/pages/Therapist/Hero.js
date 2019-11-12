import React from 'react';
import styled from 'styled-components/macro';

import HeaderImage from 'assets/therapist-header.png';
// import AppleStoreImage from 'assets/apple-store.svg';
// import GooglePlayImage from 'assets/google-play.png';


import { Flex, Text, Image } from 'design-system';


const HeaderText = styled(Text)`
  font-size: 54px;
  font-family: MuseoSansRounded-900;
  min-width: 200px;
  max-width: 600px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const HeaderTextSmall = styled(Text)`
  font-size: 24px;
  font-family: MuseoSansRounded-500;

  min-width: 200px;
  max-width: 600px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Hero = () => (
  <Flex
    flexWrap={['wrap', 'wrap', 'nowrap']}
    bg="ligthGrey"
  >
    <Flex
      flexDirection="column"
      height="100%"
      width={[1, 1, 1 / 2]}
      mb={6}
      pr={[3, 3, 0]}
      pl={[3, 3, 6]}
      alignItems="center"

    >
      <HeaderText
        color="primary"
        mt={5}
        mr={[0, 0, 4]}
        textAlign={['center', 'center', 'left']}
      >
        <span style={{ color: '#71cfeb' }}>By A</span>
        {' '}
        PHYSICAL THERAPIST
        {' '}
        <span style={{ color: '#71cfeb' }}>For</span>
        {' '}
        PHYSICAL THERAPIST
      </HeaderText>
      <HeaderTextSmall
        color="grey"
        mt={5}
        mr={[0, 0, 4]}
        textAlign={['center', 'center', 'left']}
      >
        By creating the best experience for you, we create the best experince
        for our patients.
        {' '}
      </HeaderTextSmall>
      {/* <Flex
        width={1}
        pt={6}
        justifyContent={['center', 'center', 'flex-start']}
      >
        <Flex mr={4}>
          <Image src={AppleStoreImage} />
        </Flex>
        <Flex>
          <Image src={GooglePlayImage} />
        </Flex>
      </Flex> */}
    </Flex>
    <Flex
      width={[1, 1, 1 / 2]}
      mt={[4, 4, 0]}
    >
      <Image
        width="100%"
        height="100%"
        src={HeaderImage}
      />
    </Flex>
  </Flex>
);

export default Hero;
