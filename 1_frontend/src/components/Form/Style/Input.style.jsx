import styled from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  padding: 5px;
  color: var(--dark-color);
  font-size: 16px;
  &:focus {
    outline-width: 0;
    border-bottom: 1px solid var(--accent-color);
  }
`;
