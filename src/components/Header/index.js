import React, { Component } from 'react';
import { RoundedButton } from 'Components/Buttons';
import {
  Container,
  Navigation,
  NavItem,
  Logo,
  RightSide,
  LeftSide,
  CustomLink
} from './style';
import AuthModal from './AuthModal/';

class Header extends Component {
  state = {
    openAuthModal: false,
    currentPage: 0
  };

  handleOpenLoginModal = () => this.setState({ openAuthModal: true, currentPage: 0 });

  handleOpenSignUpModal = () => this.setState({ openAuthModal: true, currentPage: 1 });

  handleCloseLoginModal = () => this.setState({ openAuthModal: false });

  handleProceedEmailSignUp = () => this.setState({ currentPage: 2 });

  handleChangeModalPage = () => this.setState((prevState) => ({
    currentPage: prevState.currentPage === 0 ? 1 : 0
  }));

  render() {
    return (
      <Container fixed={this.props.fixed}>
        <AuthModal
          handleCloseLoginModal={this.handleCloseLoginModal}
          openAuthModal={this.state.openAuthModal}
          currentPage={this.state.currentPage}
          onChangePage={this.handleChangeModalPage}
          onClickEmailSignUp={this.handleProceedEmailSignUp}
        />
        <LeftSide>
          <Logo><CustomLink to="/"><img src={`images/${!this.props.fixed ? 'logo.png' : 'logo-purple.png'}`} alt="Driscovery" style={{ maxWidth: 50 }} /></CustomLink></Logo>
          <Navigation>
            <NavItem onClick={this.handleOpenLoginModal}>Log In</NavItem>
            <NavItem onClick={this.handleOpenSignUpModal}>Sign Up</NavItem>
            <NavItem>Help</NavItem>
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
