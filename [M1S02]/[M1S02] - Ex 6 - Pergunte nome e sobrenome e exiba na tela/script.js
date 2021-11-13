// Exercício 06

/*
Faça 2 prompts ao usuário:
1. no primeiro, pergunte o seu sobrenome;
2. no segundo, pergunte o seu nome.

Em seguida, exiba na tela um “alert”, contendo o nome completo do usuário, na ordem correta (ou seja: Nome Sobrenome).

https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
*/

const sobrenome = prompt("Digite seu sobrenome:"); 
const nome = prompt("Digite seu nome:");


alert(`Olá! me chamo: ${nome} ${sobrenome}.`);


