import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Navigation,
  NavItem,
  Logo,
  activeClassName,
  RightSide
} from './style';
import Button from '../Button';

const Header = () => (
  <Container>
    <Logo>Driscovery</Logo>
    <Navigation>
      <RightSide>
        <Button type="border">Login</Button>
        <Button type="solid" fill="tertiary">
          Get started
        </Button>
      </RightSide>
    </Navigation>
  </Container>
);

export default Header;
