import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { StyledModal } from './components/StyledModal';
import { ModalProvider } from 'styled-react-modal';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, temaLight, temaDark } from './themes/tema';
import Formulario from './components/Formulario/Formulario';
import Cadastro from './components/Cadastro';

let data = [
  {
    id: 1,
    nome: 'Camila Kunitz',
    iniciais: 'CK',
    descricao: 'Programadora Front-end em formação',
    seguindo: true,
  },
  {
    id: 2,
    nome: 'João da Silva',
    iniciais: 'JS',
    descricao: 'Desenvolvedor Back-end',
    seguindo: false,
  },
  {
    id: 3,
    nome: 'Maria da Paz',
    iniciais: 'MP',
    descricao: 'Programadora mobile',
    seguindo: false,
  },
];

const App = () => {
  const [dados, setDados] = React.useState(data);
  const [tema, setTema] = React.useState('dark');
  const [cadastroAtivo, setCadastroAtivo] = React.useState(false);

  const handleTema = () => {
    tema === 'dark' ? setTema('light') : setTema('dark');
  };

  const handleSeguir = (id, seguindo) => {
    const novosDados = [...dados];
    novosDados.forEach((usuario) => {
      if (usuario.id === id) {
        usuario.seguindo = !seguindo;
      }
    });

    setDados(novosDados);
  };

  const handleSalvar = (valores) => {
    const novoPerfil = {
      id: Math.floor(Math.random() * 100),
      nome: valores.nome,
      descricao: valores.descricao,
      iniciais: '??',
      seguindo: false,
    };
    setDados([...dados, novoPerfil]);
    setCadastroAtivo(false);
  };

  const handleCadastrar = () => {
    setCadastroAtivo(true);
  };

  const handleCancelarCadastro = () => {
    setCadastroAtivo(false);
  };

  return (
    <>
      <ThemeProvider theme={tema === 'dark' ? temaDark : temaLight}>
        <GlobalStyle />
        <ModalProvider>
          <Navbar tema={tema} handleTema={handleTema} />

          <Cadastro cadastrar={handleCadastrar} />
          {dados.map((usuario) => (
            <Card
              key={usuario.id}
              id={usuario.id}
              nome={usuario.nome}
              iniciais={usuario.iniciais}
              descricao={usuario.descricao}
              seguindo={usuario.seguindo}
              handleSeguir={handleSeguir}
            />
          ))}
          <StyledModal isOpen={cadastroAtivo}>
            <Formulario
              salvar={handleSalvar}
              cancelar={handleCancelarCadastro}
            />
          </StyledModal>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
