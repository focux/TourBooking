import styled from 'styled-components';
import { Button } from 'material-ui';

export const ModalContent = styled.div`
  position: absolute;
  width: 45%;
  background-color: #fff;
  padding: ${props => props.theme.gap.medium};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 5px rgba(0, 0, 0, .4);

  &:focus {
    outline: 0;
  }
`;

export const StyledButton = styled(Button)`
&& {
  background-color: transparent;
  color: ${props => props.theme.black};
  font-weight: 300;

  &:hover {
    background-color: rgba(0, 0, 0,.06);
  }
}
`;
