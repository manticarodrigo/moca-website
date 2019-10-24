
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


import styled from 'styled-components';
import { space } from 'styled-system';


import Logo from 'assets/moca.svg';
import { Flex, Image } from 'design-system';


const Nav = styled(Flex)`
z-index: 1;
border-bottom: ${(props) => props.theme.borders[1]};
border-color: ${(props) => props.theme.colors.secondaryLight}
`;

const Link = styled(NavLink).attrs({ activeClassName: 'active' })`
  ${space}
  text-decoration: none;
  font-weight: ${(props) => props.theme.fontWeights[8]};
  color: ${(props) => props.theme.colors.primary};
  &.active {
    color: ${(props) => props.theme.colors.secondaryLight}
  }
`;


const NavBar = () => (
  <Nav alignItems="center" flexDirection="column" p={4}>
    <Image width={140} height={100} src={Logo} />
    <Flex my={4} justifyContent="center" alignItems="center">
      <Link mx={4} px={2} exact to="/">  Home </Link>
      <Link mx={4} px={2} to="/patient"> Patients </Link>
      <Link mx={4} px={2} to="/therapist"> Therapists </Link>
      <Link mx={4} px={2} to="/howitworks"> How it Works </Link>
      <Link mx={4} px={2} to="/faq"> FAQ  </Link>
      <Link mx={4} px={2} to="/contact"> Contact  </Link>
      <Link mx={4} px={2} to="/aboutus"> About Us  </Link>
    </Flex>
  </Nav>
);

export default withRouter(NavBar);
