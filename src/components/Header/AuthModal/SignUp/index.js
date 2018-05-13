import React, { Fragment } from 'react';
import { Grid } from 'material-ui';
import SocialBtn from 'Components/SocialBtn';
import { BigButton } from 'Components/Buttons';
import { Divisor, DivisorText, ModalLink, ModalText } from './style';
import Constants from '../../../../config/constants';

const SignUp = ({
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
      <BigButton>
        Sign up with E-mail
      </BigButton>
    </Grid>
    <Grid container item justify="center" sm={12}>
      <ModalText>Already have an {Constants.appName} account?</ModalText>
      <ModalLink size={1.6} onClick={onChangePage}>Log in</ModalLink>
    </Grid>
  </Fragment>
);

export default SignUp;
