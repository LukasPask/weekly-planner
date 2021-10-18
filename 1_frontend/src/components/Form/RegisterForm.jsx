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

const RegisterForm = () => {
  return (
    <StyledForm>
      <StyledHeadText>Register</StyledHeadText>
      <StyledLabelAndInputBox>
        <Label text='Name' />
        <Input inputType='text' />
      </StyledLabelAndInputBox>
      <StyledLabelAndInputBox>
        <Label text='Email' />
        <Input inputType='email' />
      </StyledLabelAndInputBox>
      <StyledLabelAndInputBox>
        <Label text='Password' />
        <Input inputType='password' />
      </StyledLabelAndInputBox>
      <StyledLabelAndInputBox>
        <Label text='Confirm Password' />
        <Input inputType='password' />
      </StyledLabelAndInputBox>
      <StyledSubmitButton type='submit' value='Register' />
    </StyledForm>
  );
};

export default RegisterForm;
