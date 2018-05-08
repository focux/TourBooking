import React from 'react';
import { StyledBottomLineInput, InputContainer, BottomLine, Placeholder } from './style';

export const BottomLineInput = ({ iconComponent, ...others }) => (
<InputContainer>
  <StyledBottomLineInput {...others} />
  <Placeholder>{others.placeholder}</Placeholder>
  {iconComponent}
  <BottomLine />
</InputContainer>
);