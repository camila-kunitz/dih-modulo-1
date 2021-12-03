// Em um novo arquivo ’Pessoa.js’ crie uma classe Pessoa, que possui os atributos ‘nome’ (do tipo público), ‘cpf’ (do tipo privado) e um método ‘imprime’ que mostra no console o nome e o cpf (ex.: “Patricia - 12345678901”) da pessoa. Após isso, faça com que a classe Pessoa seja exportada como padrão do módulo (export default class Pessoa). Em outro arquivo ‘app.js’ (type=”module”), importe a classe Pessoa, crie uma instância de pessoa e execute o método ‘imprime’.

import Pessoa from "./domain/Pessoa.js"

let novaPessoa = new Pessoa("Camila", "000.000.000-00");

novaPessoa.imprime();

