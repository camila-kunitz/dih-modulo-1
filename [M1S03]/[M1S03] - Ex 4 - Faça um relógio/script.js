// Exercício 4

/*Construa uma página HTML contendo um texto que informa o horário no momento de acesso, no formato “23:59” (HH:mm).
 */

const relogio = () => {
  const data = new Date();
  const horas = data.getHours();
  let minutos = data.getMinutes();
  const inputTime = document.getElementById("tempo");

  minutos = minutos < 10 ? "0" + minutos : minutos;
  inputTime.value = `${horas}:${minutos}`;
};

relogio();
