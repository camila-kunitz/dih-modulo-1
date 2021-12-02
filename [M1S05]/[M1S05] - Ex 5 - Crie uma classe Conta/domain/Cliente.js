import { Endereco } from "./Endereco.js";

const TYPE = {
  STR: "string"
}

export class Cliente {
  nome
  cpf
  endereco
  numeroDoCelular

  constructor(nome, cpf, end, cel) {

    if (
      typeof nome !== TYPE.STR || 
      typeof cpf !== TYPE.STR ||
      !(end instanceof Endereco) ||
      typeof cel !== TYPE.STR 
    ){
      throw "Parâmetro Inválido!"
    }

    this.nome = nome
    this.cpf = cpf
    this.endereco = end
    this.numeroDoCelular = cel
  }
}