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

export const Divisor = styled.div`
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.gap.small} 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    text-transform: uppercase;
    background-color: #000;
  }
`;

export const DivisorText = styled.span`
  position: relative;
  background-color: #fff;
  letter-spacing: 1px;
  padding: 0 ${props => props.theme.gap.small};
`;
