import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, temaLight, temaDark } from './themes/tema';

const data = [
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

  return (
    <>
      <ThemeProvider theme={tema === 'dark' ? temaDark : temaLight}>
        <GlobalStyle />
        <Navbar tema={tema} handleTema={handleTema} />
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
      </ThemeProvider>
    </>
  );
};

export default App;
