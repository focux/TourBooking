import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Navigation,
  NavItem,
  Logo,
  activeClassName,
  RightSide,
  LeftSide
} from './style';
import Button from '../Button';

const Header = () => (
  <Container>
    <LeftSide>
      <Logo>Driscovery</Logo>
      <Navigation>
        <NavItem to="">Log In</NavItem>
        <NavItem to="">Sign Up</NavItem>
        <NavItem to="">Help</NavItem>
      </Navigation>
    </LeftSide>
      <RightSide>
        <Button type="solid" fill="tertiary">
          Host a tour
        </Button>
      </RightSide>
  </Container>
);

export default Header;
