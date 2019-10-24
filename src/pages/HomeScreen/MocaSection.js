import React from 'react';

import StatusIcon from '../../assets/status.svg';
import PinIcon from '../../assets/pinn.svg';
import TherapistImage from '../../assets/therapist.svg';

import PhoneImage from '../../assets/phone-search.png';

import { Image } from '../../design-system';

import Text from '../../components/Text';
import Flex from '../../components/Flex';

const MocaSection = () => (
  <Flex justifyContent="center" flex={1} bg="lighterBlue">
    <Flex flexDirection="column" alignItems="center">
      <Text title mt={5}>
          How does MOCA work?
      </Text>
      <Flex py={4} mr={7}>
        <Flex flexDirection="column">
          <Flex secandaryCard p={2} mt={6}>
            <Flex justifyContent="center" alignItems="center">
              <Flex ml={3}>
                <Image src={TherapistImage} />
              </Flex>
              <Flex ml={3} flexDirection="column">
                <Text secondaryCardTitle my={3} alignText="left">
                    Choose your physical therapist
                </Text>
                <Text secondaryCardDescription my={3} alignText="left">
                    Personalize your search and find the right therapist to
                    treat you.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex secandaryCard p={2} mt={3}>
            <Flex justifyContent="center" alignItems="center">
              <Flex ml={3}>
                <Image src={StatusIcon} />
              </Flex>
              <Flex ml={3} flexDirection="column">
                <Text secondaryCardTitle mt={3} alignText="left">
                    Schedule your visit
                </Text>
                <Text secondaryCardDescription mt={3} alignText="left">
                    Choose a date and time that align with your schedule
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex secandaryCard p={2} mt={3}>
            <Flex justifyContent="center" alignItems="center">
              <Flex ml={3}>
                <Image src={PinIcon} />
              </Flex>
              <Flex ml={3} flexDirection="column">
                <Text secondaryCardTitle mt={3} alignText="left">
                    Choose a location
                </Text>
                <Text secondaryCardDescription mt={3} alignText="left">
                    Select the site for your session. A MOCA therapist will meet
                    you at your most convenient location, whether that is your
                    office, home or local park.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex ml={6} height="800px" width="100px">
          <Image src={PhoneImage} />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default MocaSection;
