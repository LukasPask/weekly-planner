import React from 'react';
// Style
import { StyledHeader, StyledHeaderText } from './Style/Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <StyledHeaderText>Weekly planner</StyledHeaderText>
      </div>
    </StyledHeader>
  );
};

export default Header;
