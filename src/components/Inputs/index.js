import React from 'react';
import { StyledBottomLineInput, InputContainer, BottomLine, Placeholder, StyledSelect } from './style';

export const BottomLineInput = ({ iconComponent, ...others }) => (
<InputContainer>
  <StyledBottomLineInput {...others} />
  <Placeholder>{others.placeholder}</Placeholder>
  {iconComponent}
  <BottomLine />
</InputContainer>
);

export const SelectInput = ({ children, ...others }) => (
  <StyledSelect
    {...others}
  >
    {children}
  </StyledSelect>
);

export { StyledMenuItem } from './style';
