import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { openAuthModal, closeAuthModal } from '../../actions';

class Header extends Component {

  render() {
    return (
      <Container fixed={this.props.fixed}>
        <AuthModal
          handleCloseLoginModal={this.props.handleCloseAuth}
          openAuthModal={this.props.openAuth}
          currentPage={this.props.modalPage}
          onChangePage={this.props.handleOpenAuth(this.props.modalPage === 0 ? 1 : 0)}
          onClickEmailSignUp={this.props.handleOpenAuth(2)}
        />
        <LeftSide>
          <Logo><CustomLink to="/"><img src={`/images/${!this.props.fixed ? 'logo.png' : 'logo-purple.png'}`} alt="Driscovery" style={{ maxWidth: 50 }} /></CustomLink></Logo>
          <Navigation>
            <NavItem onClick={this.props.handleOpenAuth()}>Log In</NavItem>
            <NavItem onClick={this.props.handleOpenAuth(1)}>Sign Up</NavItem>
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

const mapStateToProps = state => ({
  openAuth: state.ui.openAuthModal,
  modalPage: state.ui.authModalPage
});

const mapDispatchToProps = dispatch => ({
  handleOpenAuth: (page) => () => dispatch(openAuthModal(page)),
  handleCloseAuth: () => dispatch(closeAuthModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
