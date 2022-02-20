import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  height: 30px;
  width: 300px;
  margin: 10px;
`;

const InputTexto = ({ field }) => {
  return <Input type="text" {...field} />;
};

export default InputTexto;
