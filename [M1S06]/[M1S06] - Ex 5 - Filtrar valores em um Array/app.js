// Utilizando o mesmo vetor ‘arrayNumeros’, que possui valores de 1 a 9. Crie agora uma variável chamada ‘arrayImpares’. Utilizando a funcionalidade de arrays ‘filter’ em ‘arrayNumeros’, crie uma arrow function que teste se um valor passado por parâmetro é ímpar (retornando 1 ou true se for ímpar, 0 ou false se for par) e passe esta função como parâmetro de ‘filter’. Por fim, confira se o vetor ‘arrayImpares’ possui todos os números ímpares presentes em ‘arrayNumeros’.

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayImpares = arrayNumeros.filter(numero => numero % 2);
// const arrayPares = arrayNumeros.filter(numero => numero % 2 === 0);

console.log(arrayImpares);
// console.log(arrayPares);
