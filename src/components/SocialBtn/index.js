import React from 'react';
import { Grid } from 'material-ui';
import { Facebook, Google } from 'mdi-material-ui';
import { StyledGrid, Button } from './style';

const SocialBtn = ({ type, action, link, ...others }) => (
  <a href={link}>
    <Button {...others}>
      <StyledGrid bgColor={type === 'fb' ? '#3b5999' : '#dd4b39'} container justify="center" alignItems="center">
        <Grid item container justify="center" alignItems="center" sm={1}>
          {type === 'fb' ? <Facebook /> : <Google />}
        </Grid>
        <Grid item container justify="center" alignItems="center" sm={5}>
          {action === 'login' ? 'Log in with ' : 'Sign up with '}{type === 'fb' ? 'Facebook' : 'Google'}
        </Grid>
      </StyledGrid>
    </Button>
  </a>
);

export default SocialBtn;
