// Utilizando o padrão de classes, crie uma classe Retangulo. Essa classe tem dois atributos: altura e largura. Lembre de utilizar o método constructor(). Depois de criada a classe, crie um vetor (Array “[]”) com três instâncias de Retangulo.

import { Retangulo } from "./Retangulo.js";

const retangulos = [
  new Retangulo(5, 2),
  new Retangulo(4, 6),
  new Retangulo(9, 3)
];

console.log(retangulos);