// Em ‘app.js’, crie uma variável chamada ‘arrayNumeros’, ela é um vetor que possui valores de 1 a 9 (ex.: [1, 2, 3, 4, 5, 6, 7, 8, 9]). Criar outra variável chamada ‘arrayInvertido’ inicializada como um vetor vazio (ex.: []). Em seguida, crie e execute uma arrow function que inverta a ordem dos números de ‘arrayNumeros’, armazenando a lista invertida em ‘arrayInvertido’. Apresente no console os dois vetores e verifique se funcionou.

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayInvertido = [];

const inverteOrdem = lista => [...lista].reverse();

arrayInvertido = inverteOrdem(arrayNumeros)

console.log(arrayNumeros)
console.log(arrayInvertido)