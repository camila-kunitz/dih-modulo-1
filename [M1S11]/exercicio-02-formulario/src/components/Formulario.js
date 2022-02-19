import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Erro from './Erro';

const Formulario = () => {
  const valoresIniciais = {
    nome: '',
    dataNasc: '',
    email: '',
    celular: '',
    endereco: {
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  };

  const validacao = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    endereco: Yup.object().shape({
      rua: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),
      bairro: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      estado: Yup.string().required('Campo obrigatório'),
    }),
  });

  // prettier-ignore
  return (
    <>
      <h1>Formulario com Forkik e Yup</h1>

      <Formik
        initialValues={valoresIniciais}
        validationSchema={validacao}
        onSubmit={(values) => console.log(values)}
      >
        {({ resetForm, isSubmitting, isValid }) =>
          <Form>
            <label htmlFor="nome">Nome</label>
            <Field id="nome" name="nome" component={Input} />
            <ErrorMessage name="nome" component={Erro} />

            <label htmlFor="dataNasc">Data de nascimento</label>
            <Field id="dataNasc" name="dataNasc" component={Input} />

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" component={Input} />
            <ErrorMessage name="email" component={Erro} />

            <label htmlFor="celular">Celular</label>
            <Field id="celular" name="celular" component={Input} />

            <h2>Endereço</h2>

            <label htmlFor="endereco.rua">Rua</label>
            <Field id="endereco.rua" name="endereco.rua" component={Input} />
            <ErrorMessage name="endereco.rua" component={Erro} />

            <label htmlFor="endereco.numero">Numero</label>
            <Field id="endereco.numero" name="endereco.numero" component={Input}/>
            <ErrorMessage name="endereco.numero" component={Erro} />

            <label htmlFor="endereco.complemento">Complemento</label>
            <Field id="endereco.complemento" name="endereco.complemento" component={Input} />

            <label htmlFor="endereco.bairro">Bairro</label>
            <Field id="endereco.bairro" name="endereco.bairro" component={Input} />
            <ErrorMessage name="endereco.bairro" component={Erro} />

            <label htmlFor="endereco.cidade">Cidade</label>
            <Field id="endereco.cidade" name="endereco.cidade" component={Input} />
            <ErrorMessage name="endereco.cidade" component={Erro} />

            <label htmlFor="endereco.estado">Estado</label>
            <Field id="endereco.estado" name="endereco.estado" component={Input} />
            <ErrorMessage name="endereco.estado" component={Erro} />
            
            <button type="submit" disabled={isSubmitting || !isValid} >Enviar</button>
            <button type="button" onClick={resetForm}>Limpar</button>
          </Form>
        }
      </Formik>
    </>
  );
};

export default Formulario;
