// Dado que uma conta de cliente nunca pode ser negativa, e uma transferência ou depósito não pode ser maior que 300 reais. Faça essa validação nos métodos transferencia e deposito da classe Transacao, exiba um alert na tela se as condições necessárias para a transação não forem atendidas e não atualize o saldo das contas. Adicione um método executarTransacao() que, ao ser invocado, verifica se ambos os atributos conta e contaTransferencia foram informados, se sim, executa o método transferencia() senão, se tiver apenas o atributo conta populado, executa o método deposito().

import { Endereco } from "./domain/Endereco.js"
import { Cliente } from "./domain/Cliente.js"
import { Conta } from "./domain/Conta.js"
import { Transacao } from "./domain/Transacao.js"

const enderecoCamila = new Endereco("Rua Amarela", "22", "Florianópolis", "SC", "BR", "12345-000");
const clienteCamila = new Cliente('Camila', '56494325971', enderecoCamila, '+5500900001111');

const contaCamila1 = new Conta('0001', 1000, clienteCamila);
const contaCamila2 = new Conta('0002', 2000, clienteCamila);

const transacao = new Transacao(300, contaCamila1, contaCamila2);
transacao.executaTransacao();

console.log(contaCamila1)
console.log(contaCamila2)
console.log(transacao)
