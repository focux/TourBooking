import styled from 'styled-components';
import { Grid } from 'material-ui';

export const CustomGrid = styled(Grid)`
  background-color: #fff;
  opacity: .8;
  box-shadow: 0 5px 6px rgba(0,0,0,.3);
`;

export const Link = styled.a`
  padding: ${props => props.theme.gap.small} ${props => props.theme.gap.small};
  letter-spacing: .5px;
  font-weight: 300;
  font-size: 1.6rem;
  text-decoration: none;
  color: #000;
  display: inline-block;
  width: 100%;
  transition: all .2s ease-out;

  &:hover, &:focus {
    background-color: #000;
    color: #fff;
  }
`;
