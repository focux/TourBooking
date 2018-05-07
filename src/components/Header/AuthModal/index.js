import React from 'react';
import { Modal, Grid } from 'material-ui';
import { ModalContent } from './style';
import SocialBtn from '../../SocialBtn';

const AuthModal = ({
  openAuthModal,
  handleCloseLoginModal
}) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={openAuthModal}
    onClose={handleCloseLoginModal}
  >
    <ModalContent>
      <Grid container justify="center" spacing={8}>
        <Grid item sm={12}>
          <SocialBtn type="fb" action="login" />
        </Grid>
        <Grid item sm={12}>
          <SocialBtn type="google" action="login" />
        </Grid>
        <Grid item sm={12}>
          <h3>Icono Joogle</h3>
        </Grid>
      </Grid>
    </ModalContent>
  </Modal>);

export default AuthModal;
