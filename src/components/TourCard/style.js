import React from 'react';
import styled from 'styled-components';
import { CardMedia, Grid } from 'material-ui';

export const Location = styled.div`
 position: absolute;
 bottom: 0;
 left: 50%;
 transform: translate(-50%, 50%);
 width: 90%;
 color: ${props => props.theme.white};
 display: flex;
 font-size: 1.2rem;
`;

export const StyledCardMedia = styled(CardMedia)`
  position: relative;
`;

export const StyledGrid = styled(({ bgColor, ...others }) => <Grid {...others} />)`
  background-color: ${props => props.bgColor === 'primary' 
                      ? props.theme.primaryColor
                      : '#000'
                    };
  opacity: .9;
  padding: ${props => props.theme.gap.referenceVal + .5}rem;
  text-align: center;
  transition: opacity .2s ease-out;

  &:hover {
    opacity: 1;
  }
`;
