// Para treinar os conceitos de Rest / Spread.

// Desenvolva uma função que receba dois arrays e realize a concatenação entre eles utilizando o operador Spread.

// Apresente o resultado no console.log(novoArray).

const novoArray = (array1, array2) => [...array1, ...array2]

console.log(novoArray([1, 2, 3], [4, 5, 6]));