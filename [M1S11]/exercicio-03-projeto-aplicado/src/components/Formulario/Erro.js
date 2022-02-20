import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  display: block;
  color: crimson;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 15px;
`;

const Erro = ({ children }) => {
  return <Span>{children}</Span>;
};

export default Erro;
