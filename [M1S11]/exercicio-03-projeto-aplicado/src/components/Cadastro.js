import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Botao = styled.button`
  height: 40px;
  width: 40px;
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.corPrimaria};
  background: ${(props) => props.theme.corSecundaria};
  border: 1px solid ${(props) => props.theme.corPrimaria};
  border-radius: 50px;
  &:hover {
    color: ${(props) => props.theme.corPrimaria};
    background-color: ${(props) => props.theme.backgroundColor1};
  }
  &:active {
    color: ${(props) => props.theme.corSecundaria};
    background-color: ${(props) => props.theme.backgroundColor2};
  }
`;

const Cadastro = ({ cadastrar }) => {
  return (
    <Container>
      <Botao onClick={cadastrar}>+</Botao>
    </Container>
  );
};

export default Cadastro;
