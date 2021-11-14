// Exercício 5

/*Construa uma página HTML contendo um texto que informa o horário atual, no formato “23:59”, e que atualize automaticamente o valor, sempre que mudar o horário.
 */

const relogio = () => {
  console.log("Iniciou relogio");

  const data = new Date();
  const horas = data.getHours();
  let minutos = data.getMinutes();
  const inputTime = document.getElementById("tempo");

  minutos = minutos < 10 ? "0" + minutos : minutos;
  inputTime.value = horas + ":" + minutos;
};

relogio();
setInterval(relogio, 30 * 1000);
