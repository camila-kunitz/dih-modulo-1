// Crie uma classe chamada Transacao, que só possui os atributos: conta e valorDaTransacao. A classe deve possuir dois métodos: transferencia e deposito. Quando chamados, devem debitar ou creditar na conta o valorDaTransacao. O atributo conta deve ser uma instância de uma classe Conta.

import { Endereco } from "./domain/Endereco.js"
import { Cliente } from "./domain/Cliente.js"
import { Conta } from "./domain/Conta.js"
import { Transacao } from "./domain/Transacao.js"

const enderecoCamila = new Endereco("Rua Amarela", "22", "Florianópolis", "SC", "BR", "12345-000");

const clienteCamila = new Cliente('Camila', '56494325971', enderecoCamila, '+5500900001111');

const contaCamila = new Conta('0000', 1000, clienteCamila);

const transacao = new Transacao(contaCamila, 500);

// Depósito
console.log(`Saldo antes do depósito de R$500: ${contaCamila.saldo}`);
transacao.deposito();
console.log(`Saldo após depósito: ${contaCamila.saldo}`);


// Transferência
console.log(`Saldo antes da transferência de R$500: ${contaCamila.saldo}`);
transacao.transferencia();
console.log(`Saldo após transferência: ${contaCamila.saldo}`);
