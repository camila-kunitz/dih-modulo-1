// Crie novos atributos idDeTransacao (que deve ser incrementado automaticamente para cada transação), contaTransferencia (opcional, que receberá a transação), data (dia e horário da transação). Atualize o método transferencia, para que a conta do atributo contaTransferencia seja atualizada ao executar o método transferencia().

import { Endereco } from "./domain/Endereco.js"
import { Cliente } from "./domain/Cliente.js"
import { Conta } from "./domain/Conta.js"
import { Transacao } from "./domain/Transacao.js"

const enderecoCamila = new Endereco("Rua Amarela", "22", "Florianópolis", "SC", "BR", "12345-000");
const clienteCamila = new Cliente('Camila', '56494325971', enderecoCamila, '+5500900001111');

const contaCamila1 = new Conta('0001', 1000, clienteCamila);
const contaCamila2 = new Conta('0002', 2000, clienteCamila);

const transacao = new Transacao(500, contaCamila1, contaCamila2);
transacao.executaTransacao();

console.log(contaCamila1)
console.log(contaCamila2)
console.log(transacao)