import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  height: 30px;
  width: 300px;
  margin: 10px;
`;

const Input = ({ field }) => {
  return <StyledInput {...field} />;
};

export default Input;
