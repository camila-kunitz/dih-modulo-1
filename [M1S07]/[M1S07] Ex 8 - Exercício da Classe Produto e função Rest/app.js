import Produto from "./domain/Produto.js"

const calcularProdutos = (...itens) => {
  let total = 0;

  itens.forEach(item => {
    total += item.quantidade * item.valor;
  });

  return total;
}

const produto1 = new Produto("Guardanapo", 2, 3.00);
const produto2 = new Produto("Lava Roupas", 1, 5.00);

console.log("Somatório total:" +
  calcularProdutos(produto1, produto2)
);
