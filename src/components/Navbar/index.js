
import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import { space } from 'styled-system';

import { Box, Flex, Image } from 'design-system';
import Logo from 'assets/moca.svg';
import MenuLogo from 'assets/hamburger-menu-icon.svg';


const Nav = styled(Flex)`
  z-index: 1;
  border-bottom: ${(props) => props.theme.borders[1]};
  border-color: ${(props) => props.theme.colors.secondaryLight};
  padding: 32px;

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const LogoContainer = styled(Flex)`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    padding-top: 70px;
    padding-left: 30px;
    justify-content: flex-end;
    width: 100%
  }
`;

const Link = styled(NavLink).attrs({ activeClassName: 'active' })`
  ${space}
  font-family: MuseoSansRounded-900;
  text-decoration: none;
  font-size: 19px;
  color: ${(props) => props.theme.colors.primary};
  &.active {
    color: ${(props) => props.theme.colors.secondaryLight}
  }
  &:hover {
    color: ${(props) => props.theme.colors.secondaryLight}
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
`;

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const LinksContainer = styled(Flex)`
    @media (max-width: 500px) {
      display: ${toggleMenu ? 'flex' : 'none'};
      flex-direction: column;
    }
  `;

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <Nav alignItems="center" flexDirection="column">
      <Flex>
        <Box py={2}>
          <Image width={243} src={Logo} />
        </Box>
        <LogoContainer onClick={handleToggleMenu}>
          <Image width={50} src={MenuLogo} />
        </LogoContainer>
      </Flex>
      <LinksContainer mt={4} justifyContent="center" alignItems="center">
        <Link mx={4} px={2} exact to="/">Home</Link>
        <Link mx={4} px={2} to="/patient">Patients</Link>
        <Link mx={4} px={2} to="/therapist">Therapists</Link>
        <Link mx={4} px={2} to="/howitworks">How it Works</Link>
        <Link mx={4} px={2} to="/faq">FAQ</Link>
        <Link mx={4} px={2} to="/contact">Contact</Link>
        <Link mx={4} px={2} to="/aboutus">About Us</Link>
      </LinksContainer>
    </Nav>
  );
};

export default withRouter(NavBar);
