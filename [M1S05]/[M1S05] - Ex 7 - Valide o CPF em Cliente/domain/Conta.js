import { Cliente } from "./Cliente.js";

const TYPE = {
  STR: "string",
  NUM: "number"
}

export class Conta {
  numeroDaConta
  saldo
  cliente

  constructor(conta, saldo, cliente) {
    if (
      typeof conta !== TYPE.STR ||
      typeof saldo !== TYPE.NUM ||
      !(cliente instanceof Cliente)
    ) {
      throw "Parâmetro Inválido!"
    }

    this.numeroDaConta = conta
    this.saldo = saldo
    this.cliente = cliente
  }
}