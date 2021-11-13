// Exercício 07

/*
Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um “alert” contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome.

Dica:
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


const ultimoNome = prompt("Digite seu ultimo nome:");

alert(`Olá, ${ultimoNome.toUpperCase()} seu sobrenome contém ${ultimoNome.length} letras`);



