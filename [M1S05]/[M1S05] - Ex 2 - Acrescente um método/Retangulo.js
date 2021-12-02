export class Retangulo {
  height
  widht

  constructor(altura, largura) {
    this.height = altura;
    this.widht = largura;
  }

  calcularArea() {
    return this.height * this.widht
  }
}

