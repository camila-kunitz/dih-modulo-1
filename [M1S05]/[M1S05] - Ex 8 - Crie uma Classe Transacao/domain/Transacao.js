import { Conta } from "./Conta.js"

const TYPE = {
  STR: "string",
  NUM: "number"
}

export class Transacao {
  conta
  valorDaTransacao

  constructor(conta, valorTrasacao) {
    if (!(conta instanceof Conta)) {
      throw "Conta Inválida!"
    }
    if (typeof valorTrasacao !== TYPE.NUM) {
      throw "Valor Inválido!"
    }

    this.conta = conta
    this.valorDaTransacao = valorTrasacao
  }

  transferencia() {
    this.conta.saldo -= this.valorDaTransacao
    return this.conta.saldo;
  }

  deposito() {
    this.conta.saldo += this.valorDaTransacao
    return this.conta.saldo;
  }
}
