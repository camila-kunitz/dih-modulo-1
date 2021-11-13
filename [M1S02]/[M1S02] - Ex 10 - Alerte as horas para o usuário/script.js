// Exercício 10

/*
Construa um script que alerta o horário no momento de acesso, no formato “23:59” (HH:mm).

Dica: Lembre-se da estrutura “scripts” criada no exercício anterior.

Dica:
https://codare.aurelio.net/2009/04/03/javascript-obter-e-mostrar-data-e-hora/
*/

const data = new Date();
const hora = data.getHours();
const min = data.getMinutes();
    
alert(`São exatamente ${hora} ${':'} ${min} horas`);

