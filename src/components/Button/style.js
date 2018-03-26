import styled from 'styled-components';
/* eslint-disable import/prefer-default-export */
export const StyledButton = styled.button`
  padding: 1.5rem 5rem;
  font-size: 1.3rem;
  font-weight: ${props => props.theme.font.weight.light};
  border-radius: 3rem;
  border: 0;
  letter-spacing: 1px;
  ${props => {
    switch (props.type) {
      case 'solid':
        return `
        background-color: ${
  props.fill === 'tertiary'
    ? props.theme.tertiaryColor
    : props.theme.primaryColor
};
        color: ${props.theme.white};
        opacity: .8;
        transition: transform .2s ease-out, box-shadow .2s ease-out, opacity .2s ease-out;

        &:hover {
          opacity: 1;
          transform: scale(1.05, 1.05);
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.08);
        }
        `;
      case 'border':
        return `
        transition: background-color .2s ease-out;
        background-color: transparent;
        color: ${props.theme.white};
        border: 2px solid;
        border-color: ${
  props.borderFill === 'tertiary'
    ? props.theme.tertiaryColor
    : props.theme.primaryColor
};

        &:hover {
          background-color: ${
  props.borderFill === 'tertiary'
    ? props.theme.tertiaryColor
    : props.theme.primaryColor
};
        }
        `;
      default:
        return '';
    }
  }};
  `;
