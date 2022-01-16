## Quais são os argumentos que o useReducer recebe?

O _useReducer_ pode receber 3 argumentos:

- 1° argumento: uma função de nome **reducer** do tipo: `(state, action) => newState`
- 2° argumento: o estado inicial, o _state_ inicial para aquele redutor.
- 3° argumento: uma função `init` que pode vai setar o estado inicial `init(initialState)´.

## Todos são obrigatórios? se não cite quais são opcionais.

Somente o 3° argumento é opcional.
