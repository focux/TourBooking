import React from 'react';
import MaskedInput from 'react-text-mask';
import { StyledBottomLineInput, InputContainer, BottomLine, Placeholder, StyledSelect, StyledMaskedBottomLineInput } from './style';

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

export const BottomLineMaskedInput = ({ inputRef, iconComponent, type, ...others }) => {
  const mask = type === 'tel' ? ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] : '';
  return (
    <InputContainer>
      <StyledMaskedBottomLineInput
        {...others}
        ref={inputRef}
        mask={mask}
        placeholderChar={'\u2000'}
        showMask
      />
      <Placeholder>{others.placeholder}</Placeholder>
      {iconComponent}
      <BottomLine />
    </InputContainer>
  );
};

export { StyledMenuItem } from './style';
