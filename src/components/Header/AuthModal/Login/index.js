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
    <Grid item xs={12}>
      <SocialBtn type="fb" link={`/api/v1/auth/facebook?returnTo=${window.location.pathname}`} action="login" />
    </Grid>
    <Grid item xs={12}>
      <SocialBtn type="google" link={`/api/v1/auth/google?returnTo=${window.location.pathname}`} action="login" />
    </Grid>
    <Grid item xs={12}>
      <Divisor> <DivisorText>or</DivisorText> </Divisor>
    </Grid>
    <Grid item container justify="center" alignItems="center" xs={12}>
      <span style={{ fontSize: '1.4rem', fontWeight: '400' }}>Por el momento, sólo está habilitado el social login</span>
    </Grid>
    <Grid item xs={12}>
      <LoginForm onSubmit={() => {}} onError={() => {}} />
    </Grid>
    <Grid container item justify="center" xs={12}>
      <ModalLink size={1.4} href="#">Olvidaste tu contraseña?</ModalLink>
    </Grid>
    <Grid item xs={12}>
      <Divisor />
    </Grid>
    <Grid container item justify="center" xs={12}>
      <ModalText>No tienes una cuenta?</ModalText>
      <ModalLink size={1.6} onClick={onChangePage}>Registrate</ModalLink>
    </Grid>
  </Fragment>
);

export default Login;
