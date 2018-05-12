import styled from 'styled-components';

export const BottomLine = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.black};
  transition: background-color .2s ease-out;
`;

export const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1rem;
  font-weight: 400;
  transition: all .2s ease-out;
  pointer-events: none;
  color: ${props => props.theme.black};
`;

export const InputContainer = styled.div`
  width: 100%;
  max-height: 5rem;
  position: relative;

  & input:focus ~ ${BottomLine} {
    background-color: ${props => props.theme.primaryColor};
  }

  & input:placeholder-shown + ${Placeholder} {
    left: ${props => props.theme.gap.tiny};
    top: 50%;
    transform: translateY(-50%);
    color: rgba(0,0,0,.5);
    font-weight: 100;
    font-size: 1.6rem;
  }
`;

export const StyledBottomLineInput = styled.input`
  width: 90%;
  max-height: 5rem;
  border: 0;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 1px;
  transition: border-bottom .2s ease-out;
  padding: 1rem ${props => props.theme.gap.tiny};

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #fff;

  }
`;
