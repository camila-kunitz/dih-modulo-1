// Exercício 08

/*
Faça 2 prompts ao usuário:
1. no primeiro, pergunte o ano de nascimento;
2. no segundo, pergunte o ano atual.

Em seguida, exiba na tela um “alert” contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário, caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.

Dica:
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math
*/

const anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
const anoAtual = parseInt(prompt("Digite o ano atual:"));

function calculaIdade(anoNascimento, anoAtual) {
  return anoAtual - anoNascimento;
}

const idadeComAniversario = calculaIdade(anoNascimento, anoAtual);
const idadeSemAniversario = calculaIdade(anoNascimento, anoAtual) - 1;

alert(`Sua idade é ${idadeComAniversario} ou ${idadeSemAniversario} anos`);
