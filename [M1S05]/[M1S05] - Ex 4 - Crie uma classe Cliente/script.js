// A nova classe Cliente possui os seguintes atributos: nome, cpf, endereco, numeroDoCelular. O parâmetro endereco deve ser uma instância da classe Endereco. No método constructor() da classe cliente, verifique se o parâmetro endereco é uma instância da classe Endereco (utilize instanceof), verifique também se os parâmetros restantes são todos do tipo 'string'. Caso algum parâmetro estiver incorreto, lance uma exceção (throw).

import { Endereco } from "./domain/Endereco.js";
import { Cliente } from "./domain/Cliente.js";

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

console.log(camila);