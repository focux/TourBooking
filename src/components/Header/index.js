import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navigation, NavItem, Logo, activeClassName } from './style';
import Button from '../Button';

const Header = () => (
  <Container>
    <Logo>Driscovery</Logo>
    <Navigation>
      <Button type="solid">
        Log In
      </Button>
      <Button type="solid">
        Sign Up
      </Button>
    </Navigation>
  </Container>
);

export default Header;
