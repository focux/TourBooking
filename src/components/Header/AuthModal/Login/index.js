import React, { Fragment } from 'react';
import { Grid } from 'material-ui';
import SocialBtn from 'Components/SocialBtn';
import { Divisor, DivisorText, ModalLink, ModalText } from './style';
import LoginForm from './LoginForm';

const Login = ({
  openAuthModal,
  handleCloseLoginModal,
  onChangePage
}) => (
  <Fragment>
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
      <ModalLink size={1.6} onClick={onChangePage}>Sign Up</ModalLink>
    </Grid>
  </Fragment>
);

export default Login;
