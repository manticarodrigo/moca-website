import React from 'react';
import styled from 'styled-components/macro';

import {
  Box, Flex, Image, Text,
} from 'design-system';

import AppLogo from 'assets/App-icon.svg';
import AppleStoreImage from 'assets/apple-store.svg';
import GooglePlayImage from 'assets/google-play.png';
import PhoneImage from 'assets/phone.png';
import TherapistPhoneImage from 'assets/therapist-phone.png';
import HeaderImage from 'assets/map.png';

// import Text from 'components/Text';


const HeaderText = styled(Text)`
  font-size: 64px;
  font-family: MuseoSansRounded-900; 
`;

const HeaderTextSmall = styled(Text)`
  font-size: 24px;
  font-family: MuseoSansRounded-500; 
`;


const HeroBackground = styled(Box)`
  background-image: url(${HeaderImage});
`;

const Header = () => (
  <HeroBackground>
    <Flex p={5}>
      <Flex width={7 / 12}>
        <Flex ml="30%" flexDirection="column" alignItems="start">
          <Image width={140} src={AppLogo} />
          <HeaderText color="primary" mt={4}>PHYSICAL THERAPY</HeaderText>
          <Flex>
            <HeaderText color="secondaryLight" mr={3}>DELIVERED</HeaderText>
            <HeaderText color="primary">TO YOU</HeaderText>
          </Flex>
          <HeaderTextSmall color="primary" mt={3}>
          Now available in Salt Lake City and surrounding areas.
          </HeaderTextSmall>

          <Flex width={1} pt={6}>
            <Flex mr={4}>
              <Image src={AppleStoreImage} />
            </Flex>
            <Flex>
              <Image src={GooglePlayImage} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex width={5 / 12}>
        <Box zIndex={1} position="absolute" width={423}>
          <Image src={PhoneImage} />
        </Box>
        <Box zIndex={1} ml={6} mt={5} position="absolute" width={423}>
          <Image width={423} src={TherapistPhoneImage} />
        </Box>
      </Flex>
    </Flex>
  </HeroBackground>
);

export default Header;
