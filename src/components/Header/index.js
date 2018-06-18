import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { IconButton, Menu, MenuItem, Fade, ListItemIcon, Tooltip } from 'material-ui';
import { VpnKey } from '@material-ui/icons';
import { RoundedButton } from 'Components/Buttons';
import {
  Container,
  Navigation,
  NavItem,
  Logo,
  RightSide,
  LeftSide,
  CustomLink,
  StyledAccountIcon,
  CustomMenu,
  CustomMenuItem,
  CustomTooltip
} from './style';
import AuthModal from './AuthModal/';
import { openAuthModal, closeAuthModal } from '../../actions';

class Header extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  profileMenu = () => {
    const { anchorEl } = this.state;
    return (
      <Fragment>
        <CustomTooltip id="tooltip-fab" placement="left" title={this.props.user && this.props.user.firstName} style={{fontSize: '2rem'}}>
          <IconButton
            aria-owns={'menu-appbar'}
            aria-haspopup="true"
            onClick={this.handleClick}
            color="inherit"
          >
            <StyledAccountIcon />
          </IconButton>
        </CustomTooltip>
        <CustomMenu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <CustomMenuItem onClick={this.handleClose}>
            <ListItemIcon>
              <VpnKey />
            </ListItemIcon>
            <a href="/api/v1/auth/logout" style={{textDecoration: 'none', color: '#000'}}>Cerrar sesión</a>
          </CustomMenuItem>
        </CustomMenu>
      </Fragment>
    );
  }

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
            {!(this.props.user && this.props.user.id) &&
              <Fragment>
                <NavItem onClick={this.props.handleOpenAuth()}>Log In</NavItem>
                <NavItem onClick={this.props.handleOpenAuth(1)}>Sign Up</NavItem>
              </Fragment>
            }
            <NavItem>Help</NavItem>
          </Navigation>
        </LeftSide>
        <RightSide>
          {!(this.props.user && this.props.user.id) ?
            <RoundedButton type="solid" fill="tertiary">
              Host a tour
            </RoundedButton>
          :
            this.profileMenu()
          }
        </RightSide>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  openAuth: state.ui.openAuthModal,
  modalPage: state.ui.authModalPage,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  handleOpenAuth: (page) => () => dispatch(openAuthModal(page)),
  handleCloseAuth: () => dispatch(closeAuthModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
