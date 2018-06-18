import styled from 'styled-components';
import { Button, Modal } from 'material-ui';

export const ModalContent = styled.div`
  width: 45%;
  background-color: #fff;
  padding: ${props => props.theme.gap.medium};
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

export const StyledModal = styled(Modal)`
&& {
  display: flex;
  justify-content: center;
  align-items: center;
}

&& div[role=document] {
  @media (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
}
`;
