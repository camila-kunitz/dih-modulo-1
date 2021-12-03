//Ainda utilizando a classe Funcionario. Faça com que a função ‘calcularSalarios’ (exercício 8) seja um método estático da classe Funcionario (no arquivo ‘Funcionario.js’) e utilize a funcionalidade de arrays ‘reduce’ para calcular a soma total dos salários. Após isso, no arquivo ‘app.js’, ajuste a chamada da função ‘calcularSalarios’ para que seja chamada a partir do método estático da classe Funcionario.


import Funcionario from "./domain/Funcionario.js"

const funcionarios = [
  new Funcionario("João", "123", "Professor", 5000),
  new Funcionario("José", "456", "Gestor", 6000),
  new Funcionario("Maria", "789", "Empresaria", 7000)
];

console.log(
  Funcionario.calcularSalarios(funcionarios)
);