import styled from 'styled-components';

export const ModalContent = styled.div`
  position: absolute;
  width: 50%;
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
