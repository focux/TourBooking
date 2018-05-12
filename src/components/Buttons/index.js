import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import { StyledButton, StyledGrid, Button } from './style';

export const RoundedButton = ({ children, ...others }) => (
  <StyledButton {...others}>{children}</StyledButton>
);

RoundedButton.propTypes = {
  children: PropTypes.string.isRequired
};

export const BigButton = ({ children, ...others }) => (
  <Button {...others}>
    <StyledGrid container justify="center" alignItems="center">
      <Grid item container justify="center" alignItems="center" sm={5}>
        {children}
      </Grid>
    </StyledGrid>
  </Button>
);

BigButton.propTypes = {
  children: PropTypes.string.isRequired
};
