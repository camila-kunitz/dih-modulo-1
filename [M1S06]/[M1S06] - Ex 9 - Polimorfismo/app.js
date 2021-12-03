// No arquivo ‘Funcionario.js’, semelhante à classe Pessoa, implemente na classe Funcionario um método ‘imprime’, mas desta vez, faça com que ele mostre no console o nome e o cargo da instância de Funcionario (ex.: “Livia - gerente”). Aproveite o mesmo array com as três instâncias de Funcionario criadas no exercício anterior e implemente um loop forEach que, para cada item do array, execute o método ‘imprime’, exibindo os respectivos nomes e cargos.

// Dica: item => item.imprime()

import Pessoa from "./domain/Pessoa.js";
import Funcionario from "./domain/Funcionario.js"

const pessoas = [
  new Pessoa("João", "123"),
  new Pessoa("José", "456"),
  new Pessoa("Maria", "789")
];

const funcionarios = [
  new Funcionario("João", "123", "Professor", 5000),
  new Funcionario("José", "456", "Gestor", 6000),
  new Funcionario("Maria", "789", "Empresaria", 7000)
];

// método imprime da classe Pessoa
pessoas.forEach(item => item.imprime())

// método imprime da classe Funcionario, sobrescreve o método imprime de Pessoa
funcionarios.forEach(item => item.imprime())
