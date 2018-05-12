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

export const Divisor = styled.div`
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.gap.small} 0;
  backface-visibility: hidden;

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

export const ModalLink = styled.a`
  color: ${props => props.theme.tertiaryColor};
  font-size: ${props => props.size}rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin-left: ${props => props.theme.gap.tiny};
  &:hover, &:focus {
    text-decoration: underline;
  }
`;

export const ModalText = styled.a`
  color: ${props => props.theme.black};
  font-size: 16px;
  font-weight: 300;
  text-align: center;
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
