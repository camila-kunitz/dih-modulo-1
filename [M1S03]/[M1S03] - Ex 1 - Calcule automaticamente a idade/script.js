// Exercício 1

/* Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado “calcular idade”. Programe uma função a ser executada quando o usuário clicar no botão, que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.
 */

const calculaIdade = () => {
  const botaoIdade = document.getElementById("botao");
  const dataAtual = new Date().getFullYear();
  const resposta = document.getElementById("resposta");

  botaoIdade.addEventListener("click", () => {
    const dataAniversario = document.getElementById("date").value;
    const anoAniversario = dataAniversario.split("-")[0];

    var resultado = dataAtual - anoAniversario;
    resposta.innerHTML = `Sua idade é ${resultado} anos!`;

    console.log(dataAniversario);
  });
};

calculaIdade();
