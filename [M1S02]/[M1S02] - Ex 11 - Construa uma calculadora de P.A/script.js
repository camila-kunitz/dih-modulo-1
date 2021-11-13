// Exercício 11

/*
Ao entrar na página, seu script deve realizar 2 prompts ao usuário:
1. um solicitando um “valor inicial”;
2. outro um valor para a “raíz”.

Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela.
Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz.

Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.

Dica:
https://matematicabasica.net/progressao-aritmetica/https://www.javascriptprogressivo.net/2018/12/progressao-aritmetica-pa-em-javascript.html
*/


const valorInicial = parseInt(prompt("Digite um valor inicial:"));
const raiz = parseInt(prompt("Digite uma raiz:"));

function calculaProgressaoAritimetica(valorInicial, raiz) {
  let progressao = [valorInicial];

  for (let i = 0; i < 10; i++) {
    let proximoNumero = progressao[i] + raiz;
    progressao.push(proximoNumero);
  }

  return progressao;
}

alert(calculaProgressaoAritimetica(valorInicial, raiz));