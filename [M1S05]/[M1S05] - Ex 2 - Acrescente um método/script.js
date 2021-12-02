// Na mesma classe Retangulo do exercício anterior, crie o método calcularArea(). Este método deve multiplicar a altura e largura do Retangulo e retornar o valor do cálculo. Após acrescentado o método, com ajuda de uma estrutura de repetição à sua escolha, imprima cada um dos valores das áreas de todos os retângulos da lista (pelo menos três).

import { Retangulo } from "./Retangulo.js";

const retangulos = [
  new Retangulo(5, 2),
  new Retangulo(4, 6),
  new Retangulo(9, 3)
]

retangulos.forEach(retangulo => 
  console.log(retangulo.calcularArea())
);


