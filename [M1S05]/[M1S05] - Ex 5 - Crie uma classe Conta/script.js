// A nova classe Conta possui os seguintes atributos: numeroDaConta, saldo e cliente. No método constructor da classe conta verifique se o parâmetro numeroDaConta é do tipo 'string', se o parâmetro saldo é do tipo 'number' e se o parâmetro cliente é uma instância da classe Cliente.

import { Endereco } from "./domain/Endereco.js";
import { Cliente } from "./domain/Cliente.js";
import { Conta } from "./domain/Conta.js"

const enderecoValido = new Endereco(
  "Rua Amarela",
  "22",
  "Florianópolis",
  "SC",
  "BR",
  "12345-000"
);

const camila = new Cliente(
  "Camila",
  "000.0000.000-00",
  enderecoValido,
  "+000000000"
)

const novaConta = new Conta("1234-0", 1, camila);

console.log(novaConta);