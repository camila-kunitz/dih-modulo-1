import React from 'react';
import UserContext from '../UserContext';

const Botao = () => {
  const { autenticado, login, logout } = React.useContext(UserContext);

  const handleClick = () => {
    if (autenticado) {
      logout();
    } else {
      login('Camila');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{!autenticado ? 'Login' : 'Logout'}</button>
    </div>
  );
};

export default Botao;
