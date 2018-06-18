import styled from 'styled-components';
import { Grid } from 'material-ui';
/* eslint-disable import/prefer-default-export */
export const StyledButton = styled.button`
  padding: 1.5rem 5rem;
  font-size: 1.3rem;
  font-weight: ${props => props.theme.font.weight.light};
  border-radius: 3rem;
  border: 0;
  letter-spacing: 1px;
  cursor: pointer;
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

        &:focus {
          outline: 0;
          opacity: 1;
        }

        @media (max-width: 700px) {
          display: none;
        }
        `;
      case 'border':
        return `
        transition: background-color .2s ease-out;
        background-color: transparent;
        color: ${props.theme.white};
        border: 1.2px solid;
        border-color: ${
  props.borderFill === 'tertiary'
    ? props.theme.tertiaryColor
    : props.theme.white
};

        &:hover {
          color: ${props.theme.black};
          background-color: ${
  props.borderFill === 'tertiary'
    ? props.theme.tertiaryColor
    : props.theme.white
};
        }
        `;
      default:
        return '';
    }
  }};
  `;

export const StyledGrid = styled(Grid)`
  color: #fff;
  background-color: ${props => props.theme.primaryColor};
  padding: ${props => props.theme.gap.small};
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  transition: opacity .2s ease-out;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: .5px;
  box-shadow: 0 3px 9px rgba(0,0,0,.3);
  border-radius: .5rem;
  overflow: hidden;

  &:hover, &:focus {
    outline: 0;
    opacity: .9;
  }
`;

