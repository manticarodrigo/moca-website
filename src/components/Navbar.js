
import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Sticky } from 'react-sticky';
import styled from 'styled-components/macro';
import { space } from 'styled-system';

import { Box, Flex, Image, HyperLink, Text } from 'design-system';

import Logo from 'assets/moca.svg';
import { ReactComponent as HamburgerIcon } from 'assets/svgs/hamburger.svg';
import { ReactComponent as EmailIcon } from 'assets/svgs/email.svg';
import { ReactComponent as TwitterIcon } from 'assets/svgs/twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/svgs/facebook.svg';
import { ReactComponent as LinkedinIcon } from 'assets/svgs/linkedin.svg';
import { ReactComponent as InstagramIcon } from 'assets/svgs/instagram.svg';

const Overlay = styled(Box)`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.75);

  @media (min-width: ${({ theme }) => theme.maxWidths[7] + 1}px) {
    display: none;
  }
`;

const Nav = styled(Flex)`
  z-index: 999;
  box-sizing: border-box;
  flex-direction: ${({ scrolled }) => (scrolled ? 'row' : 'column')};
  border-bottom: ${({ theme }) => theme.borders[1]};
  border-color: ${({ theme }) => theme.colors.secondaryLight};
  padding-top: ${({ theme, scrolled }) => theme.space[scrolled ? 3 : 4]}px;
  padding-bottom: ${({ theme, scrolled }) => theme.space[scrolled ? 3 : 4]}px;
  padding-right: ${({ theme, scrolled }) => theme.space[scrolled ? 6 : 4]}px;
  padding-left: ${({ theme, scrolled }) => theme.space[scrolled ? 6 : 4]}px;
  width: 100%;
  background-color: #fff;
  opacity: ${({ scrolled }) => (scrolled ? '0.95' : '1')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 4px rgba(0,0,0,0.17);' : 'none')};

  @media (max-width: ${({ theme }) => theme.maxWidths[7]}px) {
    flex-direction: row;
    padding-right: ${({ theme }) => theme.space[3]}px;
    padding-left: ${({ theme }) => theme.space[3]}px;
  }

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const LogoImage = styled(Image)`
  width: ${({ distance }) => Math.max(146, 243 + distance)}px;

  @media (max-width: ${({ theme }) => theme.maxWidths[7]}px) {
    width: 146px;
  }
`;

const SocialContainer = styled(Flex)`
  position: ${({ scrolled }) => (scrolled ? 'relative' : 'absolute')};
  top: ${({ scrolled }) => (scrolled ? 0 : 32)}px;
  right: ${({ scrolled }) => (scrolled ? 0 : 32)}px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.maxWidths[7]}px) {
    display: none;
  }
`;

const ToggleContainer = styled(Flex)`
  display: none;

  @media (max-width: ${({ theme }) => theme.maxWidths[7]}px) {
    display: flex;
    justify-content: flex-end;
    width: 100%
  }
`;

const ToggleClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  font-family: MuseoSansRounded-900;
  font-size: 22px;
  text-align: center;
  line-height: 0;
`;

const LinksContainer = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.maxWidths[7]}px) {
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
    transform: ${({ open }) => (open ? 'none' : 'translateX(120%)')};
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding-top: ${({ theme }) => theme.space[4]}px;
    background-color: #fff;
    min-width: 350px;
    max-width: 90%;
    height: 100vh;
    box-shadow: -5px 0px 31px -9px rgba(0,0,0,0.5);
    transition: transform 0.25s ease-in-out;
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

const socialLinks = {
  twitter: { icon: TwitterIcon, href: 'https://twitter.com/joinmoca' },
  facebook: { icon: FacebookIcon, href: 'https://facebook.com/JoinMOCA' },
  linkedin: { icon: LinkedinIcon, href: 'https://linkedin.com/company/joinmoca' },
  instagram: { icon: InstagramIcon, href: 'https://instagram.com/joinmoca' },
};

const navLinks = {
  home: { title: 'Home', to: '/', exact: true },
  patients: { title: 'Patients', to: '/patients' },
  therapists: { title: 'Therapists', to: '/therapists' },
  howItWorks: { title: 'How it Works', to: '/how-it-works' },
  faq: { title: 'FAQ', to: '/faq' },
  contact: { title: 'Contact', to: '/contact' },
  about: { title: 'About Us', to: '/about' },
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {menuOpen && <Overlay onClick={toggleMenu} />}
      <Sticky stickyClassName="foo">
        {({ style, distanceFromTop }) => {
          const isScrolled = distanceFromTop <= -50;

          return (
            <Nav
              scrolled={isScrolled}
              style={style}
              alignItems="center"
              justifyContent={isScrolled ? 'space-between' : undefined}
            >
              <Flex alignItems="center">
                <Flex p={2} justifyContent="center">
                  <Link to="/">
                    <LogoImage distance={distanceFromTop} src={Logo} />
                  </Link>
                </Flex>
              </Flex>
              <ToggleContainer onClick={toggleMenu}>
                <HamburgerIcon color="#143D6C" width={40} height={40} />
              </ToggleContainer>
              <LinksContainer
                open={menuOpen}
                mt={isScrolled ? 1 : 4}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
              >
                {menuOpen && <ToggleClose onClick={toggleMenu}>×</ToggleClose>}
                {Object.entries(navLinks).map(([key, value]) => (
                  <Link
                    key={key}
                    mx={isScrolled ? 2 : 4}
                    px={isScrolled ? 1 : 2}
                    py={2}
                    exact={value.exact}
                    to={value.to}
                  >
                    {value.title}
                  </Link>
                ))}
              </LinksContainer>
              <SocialContainer scrolled={isScrolled}>
                <HyperLink
                  mr={3}
                  color={isScrolled ? 'secondaryLight' : 'primary'}
                  target="_blank"
                  href="mailto:hello@joinmoca.com"
                >
                  <EmailIcon width={20} height={20} />
                </HyperLink>
                <Text
                  mt={-1}
                  mr={3}
                  color={isScrolled ? 'secondaryLight' : 'primary'}
                  fontFamily="MuseoSansRounded-700"
                >
                  Contact Us
                </Text>
                {Object.entries(socialLinks).map(([key, value]) => (
                  <HyperLink
                    key={key}
                    mr={3}
                    color={isScrolled ? 'secondaryLight' : 'primary'}
                    target="_blank"
                    href={value.href}
                  >
                    <value.icon width={20} height={20} />
                  </HyperLink>
                ))}
              </SocialContainer>
            </Nav>
          );
        }}
      </Sticky>
    </>
  );
};

export default withRouter(NavBar);
