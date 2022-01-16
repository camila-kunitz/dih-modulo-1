import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'somar':
      return { result: state.result + action.payload };
    case 'subtrair':
      return { result: state.result - action.payload };
    case 'multiplicar':
      return { result: state.result * action.payload };
    case 'dividir':
      if (action.payload === 0) {
        alert('Não é possível dividir por 0.');
        return { result: state.result };
      }
      return { result: state.result / action.payload };
    default:
      return { result: state.result };
  }
};

const App = () => {
  const [numero, setNumero] = React.useState(0);
  const [select, setSelect] = React.useState('');
  const [state, dispatch] = React.useReducer(reducer, { result: 0 });

  return (
    <>
      <h2>Digite um número e escolha uma operação</h2>

      <div>
        <h4>Número:</h4>
        <input
          type="number"
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
        />
      </div>

      <div>
        <h4>Operação:</h4>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="somar">Somar</option>
          <option value="subtrair">Subtrair</option>
          <option value="multiplicar">Multiplicar</option>
          <option value="dividir">Dividir</option>
        </select>
      </div>

      <br />
      <br />
      <button onClick={() => dispatch({ type: select, payload: +numero })}>
        Calcular
      </button>

      <h4>Resultado: </h4>
      <p>{state.result}</p>
    </>
  );
};

export default App;
