import React from 'react';
// Style
import { StyledInput } from './Style/Input.style';

const Input = ({ inputType, inputValue, id }) => {
  return <StyledInput type={inputType} value={inputValue} />;
};

export default Input;
