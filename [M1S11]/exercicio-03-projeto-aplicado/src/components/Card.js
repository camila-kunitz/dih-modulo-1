import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  background-color: ${(props) => props.theme.backgroundColor1};
  margin: 20px auto;
  border: 1px solid ${(props) => props.theme.backgroundColor2};
`;

const PerfilContainer = styled.div`
  padding: 20px;
  display: flex;
`;

const Iniciais = styled.div`
  color: ${(props) => props.theme.corPrimaria};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.corPrimaria};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const Nome = styled.h4`
  margin: 0 0 10px 0;
  color: ${(props) => props.theme.corPrimaria};
`;

const Descricao = styled.span`
  color: ${(props) => props.theme.corSecundaria};
`;

const Botao = styled.button`
  margin: 10px;
  height: 40px;
  width: 80px;
  color: ${(props) => props.theme.corPrimaria};
  background-color: ${(props) => props.theme.backgroundColor1};
  border: 1px solid ${(props) => props.theme.secondaryColor1};
  margin: 20px;
  &:hover {
    color: ${(props) => props.theme.corPrimaria};
    background-color: ${(props) => props.theme.corSecundaria};
  }
  &:active {
    color: ${(props) => props.theme.corSecundaria};
    background-color: ${(props) => props.theme.backgroundColor2};
  }
`;

const Card = ({ id, nome, iniciais, descricao, seguindo, handleSeguir }) => {
  return (
    <Container>
      <PerfilContainer>
        <Iniciais>{iniciais}</Iniciais>
        <Div>
          <Nome>{nome}</Nome>
          <Descricao>{descricao}</Descricao>
        </Div>
      </PerfilContainer>
      <Botao
        id={id}
        value={seguindo}
        onClick={() => handleSeguir(id, seguindo)}
      >
        {seguindo ? 'Desseguir' : 'Seguir'}
      </Botao>
    </Container>
  );
};

export default Card;
