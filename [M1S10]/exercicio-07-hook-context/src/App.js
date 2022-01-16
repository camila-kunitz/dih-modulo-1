import Botao from './components/Botao';
import React from 'react';
import Usuario from './components/Usuario';
import UserContext from './UserContext';

const App = () => {
  const [usuario, setUsuario] = React.useState('');
  const [autenticado, setAutenticado] = React.useState(false);

  const login = (usuario) => {
    setUsuario(usuario);
    setAutenticado(true);
  };

  const logout = () => {
    setUsuario('');
    setAutenticado(false);
  };

  return (
    <UserContext.Provider value={{ usuario, autenticado, login, logout }}>
      <Usuario />
      <Botao />
    </UserContext.Provider>
  );
};

export default App;
