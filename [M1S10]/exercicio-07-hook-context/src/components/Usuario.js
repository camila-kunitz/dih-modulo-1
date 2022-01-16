import React from 'react';
import UserContext from '../UserContext';

const Usuario = () => {
  const { usuario, autenticado } = React.useContext(UserContext);

  return <>{autenticado && <h3>{usuario}</h3>}</>;
};

export default Usuario;
