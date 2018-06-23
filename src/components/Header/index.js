import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Fade, ListItemIcon, Hidden, Tooltip, Drawer, List, ListItemText, ListItem, Divider } from 'material-ui';
import { VpnKey, Landscape } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
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
  CustomTooltip,
  CustomMenuLink
} from './style';
import AuthModal from './AuthModal/';
import { openAuthModal, closeAuthModal } from '../../actions';

class Header extends Component {
  state = {
    anchorEl: null,
    drawerOpen: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawer = (open) => () => this.setState({ drawerOpen: open })

  goTo = (path) => () => this.props.history.push(path);

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
            <CustomMenuLink onClick={this.goTo('/profile/bookings')}>
              <ListItemIcon>
                <Landscape />
              </ListItemIcon>
              Mis reservas
            </CustomMenuLink>
          </CustomMenuItem>
          <CustomMenuItem onClick={this.handleClose}>
            <CustomMenuLink href="/api/v1/auth/logout">
              <ListItemIcon>
                <VpnKey />
              </ListItemIcon>
              Cerrar sesión
            </CustomMenuLink>
          </CustomMenuItem>
        </CustomMenu>
      </Fragment>
    );
  }

  // sideDrawer = () => {
  //   return (
  //     <Drawer
  //     anchor="right"
  //     open={this.state.drawerOpen}
  //     onClose={this.handleDrawer(false)}
  //     onOpen={this.handleDrawer(true)}
  //   >
  //   <div
  //       tabIndex={0}
  //       role="button"
  //       onClick={this.handleDrawer(false)}
  //       onKeyDown={this.handleDrawer(false)}
  //     >
  //     <List component="nav">
  //       <ListItem button>
  //         <ListItemText primary="Trash" />
  //       </ListItem>
  //       <ListItem button component="a" href="#simple-list">
  //         <ListItemText primary="Spam" />
  //       </ListItem>
  //     </List>
  //     </div>
  // </Drawer>
  //   )
  // }

  render() {
    return (
      <Container fixed={this.props.fixed}>
      {/* this.sideDrawer() */}
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
                <NavItem onClick={this.props.handleOpenAuth()}>Loguéate</NavItem>
                <NavItem onClick={this.props.handleOpenAuth(1)}>Registrate</NavItem>
              </Fragment>
            }
            <Hidden only="xs">
            <NavItem onClick={this.goTo('/contactus')}>Contáctanos</NavItem>
            </Hidden>
          </Navigation>
          {/* <IconButton onClick={this.handleDrawer(true)} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
        </LeftSide>
        <RightSide>
          {!(this.props.user && this.props.user.id) ?
            <RoundedButton onClick={this.goTo('/contactus')} type="solid" fill="tertiary">
              Agencias
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
