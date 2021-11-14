// Exercício 2

/* Faça uma página HTML contendo 2 campos de texto (dica: input type number), para que o usuário possa inserir, em cada um, o valor que deseja calcular. Coloque também na sua página 4 botões, um indicando soma, outro subtração, outro multiplicação, e outro divisão. Adicione um outro campo de texto, apenas leitura (readonly). Quando o usuário clicar no botão de soma (multiplicação, divisão ou subtração), a sua página deve somar (multiplicar, dividir ou subtrair) os 2 valores inseridos pelo usuário e exibir o resultado no campo de texto readonly.

Programe essa interatividade utilizando JavaScript.

 */

const botoes = document.querySelectorAll("button");

botoes.forEach((botao) =>
  botao.addEventListener("click", () => {
    calcular(botao.value);
  })
);

const calcular = (operacao) => {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);
  const resposta = document.querySelector("#resposta");

  if (operacao === "somar") {
    resposta.value = numero1 + numero2;
  } else if (operacao === "subtrair") {
    resposta.value = numero1 - numero2;
  } else if (operacao === "multiplicar") {
    resposta.value = numero1 * numero2;
  } else {
    resposta.value = numero1 / numero2;
  }
};
