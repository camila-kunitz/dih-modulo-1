// Exercício 3 

/* Utilizando Javascript, peça a confirmação do usuário ao clicar em algum botão, perguntando se ele deseja realmente realizar essa ação.

Dica: Lembre-se da estrutura “scripts” criada no exercício anterior.
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
*/

let botao = document.getElementById("botao");

botao.addEventListener("click", () => 
  alert('você deseja realizar esta ação?')
);