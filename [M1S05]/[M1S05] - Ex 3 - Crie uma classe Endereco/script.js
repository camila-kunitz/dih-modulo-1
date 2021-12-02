// Crie uma nova classe para representar as informações de um endereço. A classe Endereco possui os seguintes atributos: logradouro, numero, cidade, estado, pais, cep. No constructor() desta classe, verifique se todos os valores recebidos por parâmetro são do tipo 'string' (utilize typeof). Caso algum não seja do tipo 'string', lance (throw) uma exceção com a seguinte mensagem: "Endereço inválido!". Ex.: throw 'Endereço inválido!'

import { Endereco } from "./Endereco.js";

const enderecoInvalido = new Endereco(
  "Rua Amarela",
  22, // irá lançar um erro no construtor
  "Florianópolis",
  "SC",
  "BR",
  "12345-000"
);

console.log(enderecoInvalido);