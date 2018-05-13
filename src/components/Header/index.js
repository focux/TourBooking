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
    openAuthModal: true,
    currentPage: 2
  };

  handleOpenLoginModal = () => this.setState({ openAuthModal: true });

  handleOpenSignUpModal = () => this.setState({ openAuthModal: true, currentPage: 1 });

  handleCloseLoginModal = () => this.setState({ openAuthModal: false, currentPage: 0 });

  handleProceedEmailSignUp = () => this.setState({ currentPage: 2 });

  handleChangeModalPage = () => this.setState((prevState) => ({
    currentPage: prevState.currentPage === 0 ? 1 : 0
  }));

  render() {
    return (
      <Container>
        <AuthModal
          handleCloseLoginModal={this.handleCloseLoginModal}
          openAuthModal={this.state.openAuthModal}
          currentPage={this.state.currentPage}
          onChangePage={this.handleChangeModalPage}
          onClickEmailSignUp={this.handleProceedEmailSignUp}
        />
        <LeftSide>
          <Logo>Driscovery</Logo>
          <Navigation>
            <NavItem to="" onClick={this.handleOpenLoginModal}>Log In</NavItem>
            <NavItem to="" onClick={this.handleOpenSignUpModal}>Sign Up</NavItem>
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
