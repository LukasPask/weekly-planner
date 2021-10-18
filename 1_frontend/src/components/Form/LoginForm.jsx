import React from 'react';
// components
import Input from './Input';
import Label from './Label';
// Style
import {
  StyledForm,
  StyledHeadText,
  StyledLabelAndInputBox,
  StyledSubmitButton,
} from './Style/Form.style';

const LoginForm = () => {
  return (
    <StyledForm>
      <StyledHeadText>Login</StyledHeadText>
      <StyledLabelAndInputBox>
        <Label text='Email' />
        <Input inputType='email' />
      </StyledLabelAndInputBox>

      <StyledLabelAndInputBox>
        <Label text='Password' />
        <Input inputType='password' />
      </StyledLabelAndInputBox>

      <StyledSubmitButton type='submit' value='Submit' />
    </StyledForm>
  );
};

export default LoginForm;
