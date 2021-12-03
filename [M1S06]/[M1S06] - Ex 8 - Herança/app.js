// A empresa QueroQueijo gostaria de cadastrar todos os seus funcionários e através de uma única função calcular o quanto ela gasta em sua folha de pagamento.

// Em um novo arquivo ‘Funcionario.js’ importe a classe Pessoa (do arquivo ‘Pessoa.js’) e crie a classe Funcionario que herda (extends) os atributos de pessoa e também possui mais os os atributos: ‘cargo’ e ‘salario’ (ambos públicos). Faça com que a classe Funcionario seja exportada como padrão.

// Em outro arquivo (‘app.js’), importe a classe Funcionario e crie um array (vetor) com três instâncias de Funcionario. Após, crie uma função ‘calcularSalarios’ que receba um vetor de objetos da classe Funcionario (um array de funcionários) e retorne a soma de todos os salários.


import Funcionario from "./domain/Funcionario.js"

const funcionarios = [
  new Funcionario("João", "123", "Professor", 5000),
  new Funcionario("José", "456", "Gestor", 6000),
  new Funcionario("Maria", "789", "Empresaria", 7000)
];

const calcularSalarios = (funcionarios) => {
  return funcionarios.reduce((total, funcionario) =>
    total + funcionario.salario, 0);
}

console.log(calcularSalarios(funcionarios));