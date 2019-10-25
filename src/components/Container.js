import React from 'react';
import styled from 'styled-components/macro';

import { Box, Flex } from 'design-system';

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  background: ${({ background }) => background};
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 500px) {
    overflow: hidden;
  }
`;

const WrapperInner = styled(Flex)`
  box-sizing: border-box;
`;

const Container = ({
  centerMobile, children, background, ...otherProps
}) => (
  <Wrapper background={background} {...otherProps}>
    <WrapperInner
      py={[4, 4, 6]}
      px={[3, 4, 5]}
      flexWrap="wrap"
      justifyContent={[centerMobile && 'center', centerMobile && 'center']}
      maxWidth={1350}
    >
      {children}
    </WrapperInner>
  </Wrapper>
);

export default Container;
