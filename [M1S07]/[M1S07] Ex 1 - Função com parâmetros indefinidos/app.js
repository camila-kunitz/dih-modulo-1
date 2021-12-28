// Para treinar os conceitos de Rest / Spread.

// Utilizando o operador Rest, crie uma função que receba como parâmetro uma quantidade indefinida de variáveis inteiras e retorne o produto de todas elas exibindo o resultado com console.log(resultado).

const calcularProduto = (...numerosInteiros) => {
   let total = 1

    for (let item of numerosInteiros) {
      total *= parseInt(item);
    }

    return total;
}


console.log(calcularProduto(2, 3, 1));