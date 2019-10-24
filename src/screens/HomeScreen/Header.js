import React from "react";

import AppLogo from "../../assets/App-icon.svg";
import AppleStoreImage from "../../assets/apple-store.svg";
import GooglePlayImage from "../../assets/google-play.png";
import PhoneImage from "../../assets/phone.png";
import TherapistPhoneImage from "../../assets/therapist-phone.png";

import Text from "../../components/Text";
import Flex from "../../components/Flex";

import { Image } from "../../design-system";

const Header = () => {
  return (
    <Flex headerBackground justifyContent="space-around" px={5} py={4}>
      <Flex ml={7} flexDirection="column" alignItems="start">
        <Image src={AppLogo} />
        <Text headerTitle alignText="left" mt={4}>
          PHYSICAL THERAPY{" "}
        </Text>
        <Flex>
          <Text headerTitle color="secondaryLight" textAlign="left" mr={3}>
            DELIVERED{" "}
          </Text>
          <Text headerTitle alignText="left">
            TO YOU
          </Text>
        </Flex>
        <Text headerDescription mt={3}>
          Now available in Salt Lake City and surrounding areas.
        </Text>
        <Flex pt={6}>
          <Flex mr={4}>
            <Image src={AppleStoreImage} />
          </Flex>
          <Flex>
            <Image src={GooglePlayImage} />
          </Flex>
        </Flex>
      </Flex>
      <Flex zIndex={1} mt={2} mb={-8} mr={6}>
        <Image src={PhoneImage} height={600} />
        <Flex zIndex={2} mt={50} ml={-7}>
          <Image height={620} src={TherapistPhoneImage} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
