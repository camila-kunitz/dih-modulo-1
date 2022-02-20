import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputTexto from './Input';
import Erro from './Erro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  background: ${(props) => props.theme.backgroundColor2};
`;

const Titulo = styled.h2`
  margin: 10px;
  color: ${(props) => props.theme.corPrimaria};
`;

const Label = styled.label`
  margin: 10px;
  color: ${(props) => props.theme.corPrimaria};
`;

const Botao = styled.button`
  margin: 10px;
  padding: 5px 10px;
  color: ${(props) => props.theme.corPrimaria};
  background: ${(props) => props.theme.backgroundColor2};
  &:hover {
    background: ${(props) => props.theme.corSecundaria};
  }
  &:disabled {
    color: #777;
    background: ${(props) => props.theme.backgroundColor2};
  }
`;

const Formulario = ({ salvar, cancelar }) => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
  };

  const validacao = Yup.object().shape({
    nome: Yup.string()
      .max(100, 'Nome deve ter no máximo 100 caracteres')
      .required('Campo obrigatório'),
    descricao: Yup.string()
      .min(10, 'Descrição deve ter no mínimo 10 caracteres')
      .required('Campo obrigatório'),
  });

  return (
    <Container>
      <Titulo>Cadastrar Perfil</Titulo>

      <Formik
        initialValues={valoresIniciais}
        validationSchema={validacao}
        onSubmit={(values) => salvar(values)}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Label htmlFor="nome">Nome</Label>
            <Field id="nome" name="nome" component={InputTexto} />
            <ErrorMessage name="nome" component={Erro} />

            <Label htmlFor="descricao">Descricao</Label>
            <Field id="descricao" name="descricao" component={InputTexto} />
            <ErrorMessage name="descricao" component={Erro} />

            <Botao type="submit" disabled={isSubmitting || !isValid}>
              Salvar
            </Botao>
            <Botao type="button" onClick={cancelar}>
              Cancelar
            </Botao>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Formulario;
