import React from 'react';
// Style
import { StyledFooter } from './Style/Footer.style';

const Footer = () => {
  const current = new Date();
  return (
    <StyledFooter>
      {current.getFullYear() +
        '/' +
        (current.getMonth() + 1) +
        '/' +
        current.getDate()}
    </StyledFooter>
  );
};

export default Footer;
