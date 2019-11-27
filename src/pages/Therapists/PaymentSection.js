import React from 'react';
import styled from 'styled-components/macro';

import CashImage from 'assets/cash.svg';
import TimeImage from 'assets/time.svg';
import TransactionImage from 'assets/trans.svg';
import PaymentImage from 'assets/payment-image.png';


import {
  Flex, Text, Image,
} from 'design-system';


const Title = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Description = styled(Text)`
  font-size: 17px;
  font-family: MuseoSansRounded-500;
  min-width: 200px;
  max-width: 400px;
`;


const PaymentSection = () => (
  <Flex flexWrap="wrap" bg="#f2f2f2">
    <Flex
      flexDirection="column"
      width={[1, 1, 1 / 2]}
      height="100%"
      mt={2}
      mb={4}
      px={[3, 3, 0]}
      alignItems="center"
    >
      <Title mt={4} color="primary">Payment Structure</Title>

      <Flex mt={[5, 5, 6]}>
        <Flex mx={4}>
          <Image src={CashImage} width={[40, 40, 76]} height={76} />
        </Flex>
        <Flex>
          <Description color="grey" mr={3}>
            Cash-based services allow you to get
            automatic reimbursements without the
            wait and runaround from insurance companies
            . MOCA will collect all payments immediately
            and reflect them in your therapy wallet.
          </Description>
        </Flex>
      </Flex>

      <Flex mt={4}>
        <Flex mx={4}>
          <Image src={TimeImage} width={[40, 40, 76]} height={76} />
        </Flex>
        <Flex>
          <Description color="grey" mr={3}>
            By choosing cash payments, you aren’t restricted by
            insurance-mandated documentation. Document only the
            information you deem important as a clinician and gain valuable
            time back to generate more appointments.
          </Description>
        </Flex>
      </Flex>

      <Flex mt={4}>
        <Flex mx={4}>
          <Image src={TransactionImage} width={[40, 40, 76]} height={76} />
        </Flex>
        <Flex>
          <Description color="grey" mr={3}>
            Compared with traditional providers,
            MOCA charges a small service fee for each transaction
            conducted through the platform, allowing you to earn more
            per visit.
          </Description>
        </Flex>
      </Flex>
    </Flex>
    <Flex
      width={[1, 1, 1 / 2]}
      mt={[4, 4, 0]}
    >
      <Image
        width="100%"
        height="100%"
        src={PaymentImage}
      />
    </Flex>
  </Flex>
);

export default PaymentSection;
