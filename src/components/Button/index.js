import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const Button = ({ children, ...others }) => (
  <StyledButton {...others}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default Button;
