// Utilizando o mesmo vetor ‘arrayNumeros’, que possui valores de 1 a 9. Crie agora uma variável chamada ‘arrayQuadrados’. Utilizando a funcionalidade de arrays ‘map’ em ‘arrayNumeros’, crie uma arrow function que calcule o quadrado de um valor passado por parâmetro e passe esta função como parâmetro de ‘map’. Por fim, confira se o vetor ‘arrayQuadrados’ possui todos os quadrados dos números presentes em ‘arrayNumeros’ e exiba-os no console.

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayQuadrados = arrayNumeros.map(valor => valor * valor); // ou ** 2

console.log(arrayQuadrados);

