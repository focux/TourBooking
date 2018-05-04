import React from 'react';
import styled from 'styled-components';
import { CardMedia, Grid, CardContent } from 'material-ui';

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
  padding: ${props => props.theme.gap.referenceVal + 0.5}rem;
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.primaryColor};
  letter-spacing: 1px;
  font-weight: 400;
  padding: ${props => props.theme.gap.referenceVal - 0.2}rem ${props => props.theme.gap.tiny};
  text-align: center;
  color: ${props => props.theme.black};
`;

export const HoverGrid = styled(Grid)`
  padding: ${props => props.theme.gap.tiny};
  text-align: center;
  &:hover {
   background-color: rgba(0,0,0,.1);
  }
`;

export const StyledCardContent = styled(CardContent)`
  &&&& {
    padding: 2rem 0 0 0;
  }
`;
