// Crie um método estático (static) na classe Cliente chamada validaCPF() que retorna true caso o CPF inserido seja válido. Caso o CPF seja inválido, retorna um erro e limpa o campo CPF.

// Dica: https://www.devmedia.com.br/validar-cpf-com-javascript/23916

import { Endereco } from "./domain/Endereco.js";
import { Cliente } from "./domain/Cliente.js";

const endereco = new Endereco(
  "Rua Amarela",
  "22",
  "Florianópolis",
  "SC",
  "BR",
  "12345-000"
)

const clienteValido = new Cliente(
  "Camila",
  "56494325971",
  endereco,
  "00 9 0000-000"
)

console.log(clienteValido);


