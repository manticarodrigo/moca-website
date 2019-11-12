import React from 'react';
import styled from 'styled-components/macro';

import HeaderImage from 'assets/about-us.png';


import { Flex, Text, Image } from 'design-system';


const HeaderText = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900;
  
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const HeaderTextSmall = styled(Text)`
  font-size: 24px;
  font-family: MuseoSansRounded-500;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Hero = () => (
  <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
    <Flex
      flexDirection="column"
      height="100%"
      width={[1, 1, 1 / 2]}
      mb={[4]}
      pr={[3, 3, 0]}
      pl={[3, 3, 6]}
      alignItems={['center', 'center', 'flex-start']}

    >
      <HeaderText
        color="blue"
        mt={5}
        mr={[0, 0, 4]}
        textAlign={['center', 'center', 'left']}
      >
        Mission:
      </HeaderText>
      <HeaderTextSmall
        color="darkerGrey"
        mt={4}
        mr={[0, 0, 4]}
        textAlign={['center', 'center', 'left']}
      >
        To bridge the existing gaps for patients
        and providers, creating a more effective and
         equitable physical therapy experience.
      </HeaderTextSmall>
      <HeaderText
        color="blue"
        mt={5}
        mr={[0, 0, 4]}
        textAlign={['center', 'center', 'left']}
      >
        Vision:
      </HeaderText>
      <HeaderTextSmall
        color="darkerGrey"
        mt={4}
        mr={[0, 0, 4]}
        textAlign={['center', 'center', 'left']}
      >
        To elevate people’s quality of life by revolutionizing the healthcare system.
      </HeaderTextSmall>
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
