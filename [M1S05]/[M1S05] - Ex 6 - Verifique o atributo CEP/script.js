// Crie um método que valida o formato do CEP informado na hora de criar um novo objeto da classe Endereco. O novo método deve ser utilizado dentro do constructor(). Caso não seja um CEP no formato válido, cinco números, hífen e três números ('00000-000'), lance uma exceção. Se quiser, pode experimentar utilizar uma expressão regular.

import { Endereco } from "./Endereco.js";

const cepInvalido = new Endereco(
  "Rua Amarela",
  "22",
  "Florianópolis",
  "SC",
  "BR",
  "12345-0000" // irá lançar um erro no construtor
)

console.log(cepInvalido);
