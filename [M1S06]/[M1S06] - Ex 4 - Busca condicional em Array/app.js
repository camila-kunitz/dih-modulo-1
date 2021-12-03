// Utilizando o mesmo vetor ‘arrayNumeros’, que possui valores de 1 a 9. Crie agora uma variável chamada ‘encontrado’. Utilizando a funcionalidade de arrays ‘find’ em ‘arrayNumeros’, crie uma arrow function que sirva para encontrar o primeiro valor em ‘arrayNumeros’ que seja maior do que 5 (cinco). Por fim, confira se a variável ‘encontrado’ possui o primeiro valor maior do que 5 presente em ‘arrayNumeros’, apresente no console.

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const encotrado = arrayNumeros.find(num => num > 5);

console.log(encotrado);

  