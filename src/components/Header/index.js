import React, { Component } from 'react';
import { RoundedButton } from 'Components/Buttons';
import {
  Container,
  Navigation,
  NavItem,
  Logo,
  RightSide,
  LeftSide
} from './style';
import AuthModal from './AuthModal/';

class Header extends Component {
  state = {
    openAuthModal: true
  };

  handleOpenLoginModal = () => this.setState({ openAuthModal: true });

  handleCloseLoginModal = () => this.setState({ openAuthModal: false });

  render() {
    return (
      <Container>
        <AuthModal
          handleCloseLoginModal={this.handleCloseLoginModal}
          openAuthModal={this.state.openAuthModal}
        />
        <LeftSide>
          <Logo>Driscovery</Logo>
          <Navigation>
            <NavItem to="" onClick={this.handleOpenLoginModal}>Log In</NavItem>
            <NavItem to="">Sign Up</NavItem>
            <NavItem to="">Help</NavItem>
          </Navigation>
        </LeftSide>
        <RightSide>
          <RoundedButton type="solid" fill="tertiary">
            Host a tour
          </RoundedButton>
        </RightSide>
      </Container>
    );
  }
}

export default Header;
