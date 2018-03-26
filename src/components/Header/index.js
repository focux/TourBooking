import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navigation, NavItem, Logo, activeClassName } from './style';

const Header = () => (
  <Container>
    <Logo>Driscovery</Logo>
    <Navigation>
      <NavItem to="/" activeClassName={activeClassName}>
        Log In
      </NavItem>
      <NavItem to="/lol" activeClassName={activeClassName}>
        Sign Up
      </NavItem>
    </Navigation>
  </Container>
);

export default Header;
