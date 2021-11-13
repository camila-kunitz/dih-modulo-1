// Exercício 09

/*
Faça 3 prompts ao usuário:
1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
2. no segundo, pergunte o primeiro valor que deseja calcular;
3. no terceiro, o segundo valor que deseja calcular.

Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.

Dica:
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math
*/

const operacao = prompt("Qual o tipo de cálculo você deseja fazer? +, -, * ou / .");

const valor1 = parseInt(prompt("Qual o primeiro valor que você deseja calcular:"));

const valor2 = parseInt(prompt("Qual o segundo valor que você deseja calcular:"));

function calcular(operador, valorA, valorB) {
  if (operador === "+") {
    return valorA + valorB;
  } else if(operador === "-") {
      return valorA - valorB; 
  } else if(operador === "*") {
      return valorA * valorB; 
  } else if(operador === "/"){
      return valorA / valorB; 
  } else {
    return "operador inválido!";
  }
}

alert(`O resultado do seu cálculo é: ${calcular(operacao, valor1, valor2)}`);

