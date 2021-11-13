// Exercício 05

/*
Para realizar esse exercício, utilize o console do navegador.
Pergunte ao usuário:
1. nome (prompt);
2. idade (prompt);
3. gosta de praticar algum esporte? (confirm)
Crie 3 variáveis para guardar as respostas do usuário:
1. deve receber um valor textual (string);
2. deve receber um valor numérico (number);
3. deve receber um valor de verdadeiro ou falso (boolean).

Faça com que esses 3 valores sejam exibidos no console do navegador.

https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt
https://developer.mozilla.org/pt-BR/docs/Web/API/window/confirm
*/

const nome = prompt("Digite seu nome:"); 
const idade = parseInt(prompt("Digite sua idade:"));
const praticaEsporte = confirm("Você pratica esporte?");

function respostaEsporte(praticaEsporte) {
  if (praticaEsporte) {
    return "Eu pratico esporte!"
  } 
  
  return "Eu não pratico esporte!"
}

console.log(`Me chamo ${nome}, tenho ${idade} anos, ${respostaEsporte(praticaEsporte)}`);

alert(`Me chamo ${nome}, tenho ${idade} anos, ${respostaEsporte(praticaEsporte)}`);





