import React, { Fragment } from 'react';
import { Grid } from 'material-ui';
import { MailOutline } from '@material-ui/icons';
import SocialBtn from 'Components/SocialBtn';
import { BigButton } from 'Components/Buttons';
import { Divisor, DivisorText, ModalLink, ModalText } from './style';
import Constants from '../../../../config/constants';

const SignUp = ({
  openAuthModal,
  handleCloseLoginModal,
  onChangePage,
  onClickEmailSignUp
}) => (
  <Fragment>
    <Grid item xs={12}>
      <SocialBtn link={`/api/v1/auth/facebook?returnTo=${window.location.pathname}`} type="fb" />
    </Grid>
    <Grid item xs={12}>
      <SocialBtn link={`/api/v1/auth/google?returnTo=${window.location.pathname}`} type="google" />
    </Grid>
    <Grid item xs={12}>
      <Divisor> <DivisorText>or</DivisorText> </Divisor>
    </Grid>
    <Grid item container justify="center" alignItems="center" xs={12}>
      <span style={{ fontSize: '1.4rem', fontWeight: '400' }}>Por el momento, sólo está habilitado el registro con redes sociales.</span>
    </Grid>
    <Grid item xs={12}>
      <BigButton onClick={onClickEmailSignUp} disabled>
          <Grid item container justify="center" alignItems="center" xs={1}>
            <MailOutline />
          </Grid>
          <Grid item container justify="center" alignItems="center" xs={8}>
            Registrate con tu e-mail
          </Grid>
      </BigButton>
    </Grid>
    <Grid item xs={12}>
      <Divisor />
    </Grid>
    <Grid container item justify="center" xs={12}>
      <ModalText>Ya tienes una cuenta de {Constants.appName}?</ModalText>
      <ModalLink size={1.6} onClick={onChangePage}>Logeáte</ModalLink>
    </Grid>
  </Fragment>
);

export default SignUp;
