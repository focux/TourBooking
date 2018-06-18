import React from 'react';
import styled from 'styled-components';
import { Grid } from 'material-ui';

export const StyledGrid = styled(({ bgColor, ...others }) => <Grid {...others} />)`
  color: #fff;
  background-color: ${props => props.bgColor};
  padding: ${props => props.theme.gap.small};
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  transition: opacity .2s ease-out;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: .5px;
  box-shadow: 0 3px 9px rgba(0,0,0,.3);
  border-radius: .5rem;
  overflow: hidden;
  cursor: pointer;

  &:hover, &:focus {
    outline: 0;
    opacity: .9;
  }
`;
