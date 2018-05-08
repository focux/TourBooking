import React from 'react';
import { Modal, Grid } from 'material-ui';
import { ModalContent, Divisor, DivisorText } from './style';
import SocialBtn from '../../SocialBtn';
import LoginForm from './LoginForm';

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
          <Divisor> <DivisorText>or</DivisorText> </Divisor>
        </Grid>
        <Grid item sm={12}>
          <LoginForm onSubmit={() => {}} onError={() => {}} />
        </Grid>
      </Grid>
    </ModalContent>
  </Modal>);

export default AuthModal;
