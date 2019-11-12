import React from 'react';
import styled from 'styled-components/macro';

import Container from 'components/Container';
import BackgroundTherapist from 'assets/background-therapist.svg';


import { Flex, Text } from 'design-system';


const HeaderText = styled(Text)`
  font-size: 44px;
  font-family: MuseoSansRounded-900;
  
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const HeaderTextSmall = styled(Text)`
  font-size: 18px;
  font-family: MuseoSansRounded-500;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Background = styled(Flex)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${BackgroundTherapist});
  background-repeat: no-repeat;

`;


const HowItWorks = () => (
  <Container centerMobile>
    <Background flexDirection="column" mt={[0, 0, 6]}>
      <Flex
        mt={[0, 0, -6]}
        width={[1, 1, 1 / 2]}
        alignSelf={['center', 'center', 'flex-start']}
        flexDirection="column"
        alignItems={['center', 'center', 'flex-start']}
      >
        <HeaderText
          color="blue"
          mt={5}
          textAlign={['center', 'center', 'left']}
        >
          Phillip Hebert
        </HeaderText>
        <HeaderTextSmall
          mr={[0, 0, 5]}
          color="darkerGrey"
          mt={4}
          textAlign={['center', 'center', 'left']}
        >
          Phillip is a Physical Therapist with experience in home health,
          outpatient, and inpatient settings. He earned a Doctorate of Physical
           Therapy from the University of Saint Augustine for Health Sciences and
           has completed advanced manual certification courses. Early in his career,
            Phillip recognized barriers in the current system, limiting patients’
            access to physical therapy services. This led him to create MOCA to break down barriers
             and create a more effective way to connect patients with physical therapists.
        </HeaderTextSmall>
      </Flex>
      <Flex
        width={[1, 1, 1 / 2]}
        mt={[3, 3, 6]}
        alignSelf={['center', 'center', 'flex-end']}
        flexDirection="column"
        alignItems={['center', 'center', 'flex-start']}
      >
        <HeaderText
          color="blue"
          mt={5}
          textAlign={['center', 'center', 'left']}
        >
          Devin Girod
        </HeaderText>
        <HeaderTextSmall
          color="darkerGrey"
          mt={4}
          textAlign={['center', 'center', 'left']}
        >
          Devin has worked both in the public and private sector development
          for eight years, with a particular interest in raising private
          capital for public-private partnerships. His experiences include
           working for a former U.S. Congressman, higher education institutions,
           nd a national NGO. He holds a Master’s of Arts in Communication and a Bachelor’s
            of Arts in Mass Communication from the University of Louisiana at Monroe.
          Devin is passionate about MOCA’s approach to transforming healthcare, having
          experienced the impact of having family members navigate a cumbersome industry and
           rising medical debt for Americans. His wife, Angelica, is a Speech-Language Pathologist
           for Children’s Health.
        </HeaderTextSmall>
      </Flex>
      <Flex
        width={[1, 1, 1 / 2]}
        mt={[3, 3, 6]}
        alignSelf={['center', 'center', 'flex-start']}
        flexDirection="column"
        alignItems={['center', 'center', 'flex-start']}
      >
        <HeaderText
          color="blue"
          mt={5}
          textAlign={['center', 'center', 'left']}
        >
          Tatiana Chamorro
        </HeaderText>
        <HeaderTextSmall
          mr={[0, 0, 5]}
          color="darkerGrey"
          mt={4}
          textAlign={['center', 'center', 'left']}
        >
          A creative and energetic marketer with a background in visual
          communications, Tatiana leads marketing strategy through a
          thoughtful consideration and love for visual aesthetics.
          Her biggest pet peeves include the words “Comic Sans” and “Trajan”.
          Tatiana holds a Bachelors of Art in Liberal Studies and a Master’s
           of Science in Marketing from A&M-Commerce. She leads MOCA’s efforts
           in consistent branding and marketing strategies, and her passion lies in
           creating modern-day solutions that can empower each individual.
        </HeaderTextSmall>
      </Flex>
      <Flex
        width={[1, 1, 1 / 2]}
        mt={[3, 3, 6]}
        alignSelf={['center', 'center', 'flex-end']}
        flexDirection="column"
        alignItems={['center', 'center', 'flex-start']}
      >
        <HeaderText
          color="blue"
          mt={5}
          textAlign={['center', 'center', 'left']}
        >
          Carlos Rivers
        </HeaderText>
        <HeaderTextSmall
          color="darkerGrey"
          mt={4}
          textAlign={['center', 'center', 'left']}
        >
          Carlos has a cross-functional background in business planning, information technology,
          and research. He has worked both in the private and public sector with positions related
          to innovation. Carlos holds degrees in International Business and Economics from
           Mercyhurst University, an M.B.A from Texas A&M University-Commerce, and a Business
           Analytics certification from Harvard Business School.  A natural change agent, Carlos
           believes MOCA is the long-awaited disruption the healthcare industry needs, providing a
            better experience for both patients and providers.
        </HeaderTextSmall>
      </Flex>
      <Flex
        width={[1, 1, 1 / 2]}
        mt={[3, 3, 6]}
        alignSelf={['center', 'center', 'flex-start']}
        flexDirection="column"
        alignItems={['center', 'center', 'flex-start']}
      >
        <HeaderText
          color="blue"
          mt={5}
          textAlign={['center', 'center', 'left']}
        >
          David Arnold
        </HeaderText>
        <HeaderTextSmall
          mr={[0, 0, 5]}
          color="darkerGrey"
          mt={4}
          textAlign={['center', 'center', 'left']}
        >
          David’s career began in politics before transitioning to a private sector role in
          finance and project management.  His passion for helping others, combined with his
           expertise in operational management and development, brings value to the MOCA team.
            David believes everyone should have direct access to therapy services and that
             MOCA’s approach to healthcare will disrupt the marketplace, creating a dialogue
             about the future patient and provider experience.
        </HeaderTextSmall>
      </Flex>
    </Background>
  </Container>
);

export default HowItWorks;
