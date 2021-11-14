// Exercício 3

/*Em uma página HTML, insira um campo de texto para que o usuário insira um número. Programe uma função em JavaScript para verificar se o número inserido pelo usuário é par ou ímpar, e informe o usuário através de um texto na página HTML.
 */

const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  parImpar();
});

const parImpar = () => {
  const numeroDigitado = Number(document.getElementById("numero").value);
  const resposta = document.getElementById("resposta");
  const calculo = numeroDigitado % 2;

  if (calculo === 0) {
    resposta.value = "Este número é Par!";
  } else {
    resposta.value = "Este número é Impar!";
  }
};
