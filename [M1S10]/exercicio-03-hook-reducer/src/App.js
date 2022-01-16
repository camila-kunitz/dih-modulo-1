import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADICIONAR':
      const data = new Date();
      const dataFormatada = `${data.toLocaleDateString()} - ${data.toLocaleTimeString()}`;

      return [...state, dataFormatada];

    case 'REMOVER':
      return state.filter((element, index) => index < state.length - 1);

    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, []);

  return (
    <>
      <h1>Lista de datas:</h1>
      <button onClick={() => dispatch({ type: 'ADICIONAR' })}>
        Adicionar (+)
      </button>
      <button onClick={() => dispatch({ type: 'REMOVER' })}>Remover (-)</button>

      <ul>
        {state.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
