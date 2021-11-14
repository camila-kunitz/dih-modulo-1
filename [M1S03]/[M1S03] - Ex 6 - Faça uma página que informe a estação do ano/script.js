// Exercício 6

/*
Sua página deve conter um texto e uma imagem, ambos representando a estação. Ao carregar a página, baseado na data atual, seu código deve verificar qual a estação atual do ano no hemisfério sul, e deve alterar o texto e a imagem, para que passem a representar a estação correta. Considere: 22/12 a 21/03 - Verão; 22/03 a 21/06 - Outono; 22/06 a 21/09 - Inverno; 22/09 a 21/12 - Primavera.
 */
const estacaoAno = () => {
  const dataAtual = new Date("1989-05-06");
  const mes = dataAtual.getMonth();
  const dia = dataAtual.getDate();
  const img = document.querySelector("#imagem-estacao");
  const texto = document.getElementById("texto");

  if ((dia > 21 && mes === 12) || mes < 3 || (dia < 22 && mes === 3)) {
    texto.innerHTML = "Estamos no verão!";
    img.src = "imgs/img-verao.jpg";
  } else if ((dia > 21 && mes === 03) || mes < 6 || (dia < 22 && mes === 6)) {
    texto.innerHTML = "Estamos no Outono!";
    img.src = "imgs/img-outono.jpg";
  } else if ((dia > 21 && mes === 06) || mes < 9 || (dia < 22 && mes === 9)) {
    texto.innerHTML = "Estamos no Inverno!";
    img.src = "imgs/img-inverno.jpg";
  } else if ((dia > 21 && mes === 09) || mes < 12 || (dia < 22 && mes === 12)) {
    texto.innerHTML = "Estamos na Primavera!";
    img.src = "imgs/img-primavera.jpg";
  }
};

estacaoAno();
