const TYPE = {
  STR: "string"
}

export class Endereco {
  logradouro
  numero
  cidade
  estado
  pais
  cep

  constructor(log, num, cid, est, pai, cep) {
    if (
      typeof log !== TYPE.STR || 
      typeof num !== TYPE.STR  ||
      typeof cid !== TYPE.STR  ||
      typeof est !== TYPE.STR  ||
      typeof pai !== TYPE.STR  ||
      typeof cep !== TYPE.STR 
    ) {
      throw "Endereço Inválido!"
    }
 
    this.logradouro = log
    this.numero = num
    this.cidade = cid
    this.estado = est
    this.pais = pai
    this.cep = cep
  }
}