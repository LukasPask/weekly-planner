import React from 'react';
// Components
import LoginForm from '../components/Form/LoginForm';
import RegisterForm from '../components/Form/RegisterForm';
// Style
import { StyledMain, StyledWrapper } from './Style/LoginRegisterPage.style';

const LoginRegisterPage = () => {
  return (
    <StyledMain>
      <StyledWrapper>
        <LoginForm />
        <RegisterForm />
      </StyledWrapper>
    </StyledMain>
  );
};

export default LoginRegisterPage;
