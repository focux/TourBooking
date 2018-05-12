import React from 'react';
import { Modal, Grid } from 'material-ui';
import { ModalContent, Divisor, DivisorText, ModalLink, ModalText, StyledButton } from './style';
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
      <Grid container justify="center" spacing={16}>
        <Grid item container justify="flex-end" sm={12}>
          <StyledButton onClick={handleCloseLoginModal} variant="fab" color="secondary" aria-label="close" mini>
            X
          </StyledButton>
        </Grid>
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
        <Grid container item justify="center" sm={12}>
          <ModalLink size={1.4} href="#">Forget password?</ModalLink>
        </Grid>
        <Grid item sm={12}>
          <Divisor />
        </Grid>
        <Grid container item justify="center" sm={12}>
          <ModalText>Don’t have an account?</ModalText>
          <ModalLink size={1.6}>Sign Up</ModalLink>
        </Grid>
      </Grid>
    </ModalContent>
  </Modal>);

export default AuthModal;
