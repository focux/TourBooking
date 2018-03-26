import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 1.5rem 5rem;
  font-size: 1.5rem;
  font-weight: 300;
  border-radius: 3rem;
  border: 0;
  ${props => {
    if (props.type === 'solid') {
      return `
        background-color: ${props.theme.primaryColor};
        color: ${props.theme.white};
        opacity: .8;
      `;
    }
  }};
`;
