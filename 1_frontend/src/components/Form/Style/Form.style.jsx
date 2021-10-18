import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 8px;
  margin: 25px;
`;

export const StyledHeadText = styled.h3`
  padding: 5px;
  color: var(--primary-color);
`;

export const StyledLabelAndInputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const StyledSubmitButton = styled.input`
  background-color: var(--accent-color);
  color: var(--secondary-color);
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  margin-top: 8px;
  width: 50%;
  transition: 1s;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--accent-color);
    cursor: pointer;
  }
`;
