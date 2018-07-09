import styled from 'styled-components';
import { Grid } from 'material-ui';

export const Bar = styled(Grid)`
&&&&&&&&& {
  position: fixed !important;
  top: 0;
  z-index: 9;
  padding: ${props => props.theme.gap.tiny};
  height: 7rem;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: .5px;
  background: linear-gradient(to right, #ff512f, #dd2476);
  color: #fff;
  position: relative;
}
`;

export const CloseText = styled.button`
  position: absolute;
  top: 50%;
  right: ${props => props.theme.gap.small};
  transform: translateY(-50%);
  color: inherit;
  font-size: 1.6rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
    text-decoration: underline;
  }
`;

export const BoldText = styled.span`
  font-weight: 400;
`;
