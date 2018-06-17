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
    <Grid item sm={12}>
      <SocialBtn link={`/api/v1/auth/facebook?returnTo=${window.location.pathname}`} type="fb" action="login" />
    </Grid>
    <Grid item sm={12}>
      <SocialBtn link={`/api/v1/auth/google?returnTo=${window.location.pathname}`} type="google" action="login" />
    </Grid>
    <Grid item sm={12}>
      <Divisor> <DivisorText>or</DivisorText> </Divisor>
    </Grid>
    <Grid item sm={12}>
      <BigButton onClick={onClickEmailSignUp}>
          <Grid item container justify="center" alignItems="center" sm={1}>
            <MailOutline />
          </Grid>
          <Grid item container justify="center" alignItems="center" sm={5}>
            Sign up with E-mail
          </Grid>
      </BigButton>
    </Grid>
    <Grid item sm={12}>
      <Divisor />
    </Grid>
    <Grid container item justify="center" sm={12}>
      <ModalText>Already have an {Constants.appName} account?</ModalText>
      <ModalLink size={1.6} onClick={onChangePage}>Log in</ModalLink>
    </Grid>
  </Fragment>
);

export default SignUp;
