// Exercício 10

/*
Na página HTML devem existir 2 campos de texto (dica: input type number): um com rótulo (label) “valor inicial”, e outro com rótulo “raíz”. Também deve ter 2 botões: um rotulado “Calcular P.A.” e outro rotulado “Calcular P.G.”. O evento click de cada botão deve chamar uma função que: verifica se os campos estão preenchidos (dica: length) e, se estiverem vazios, deve mostrar uma mensagem ao usuário pedindo para inserir os valores; caso os campos estejam preenchidos, deve calcular os 10 primeiros valores da sequência e exibir na tela.

Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28. P.G. (Progressão Geométrica) é como uma P.A., mas em vez de somar, multiplica-se a raiz.

Exemplo: Valor inicial = 1; raiz = 3; P.G. = 1, 3, 9, 27, 81...
 */

const botaoPa = document.getElementById("botaoPa");
botaoPa.addEventListener("click", () => {
  calculaPa();
})

const botaoPg = document.getElementById("botaoPg");
botaoPg.addEventListener("click", () => {
  calculaPg();
})

const calculaPa = () => {
  const valorInicial = parseInt(document.getElementById("valorInicial").value);
  const valorRaiz = parseInt(document.getElementById("valorRaiz").value);

  if (Number.isNaN(valorInicial) || Number.isNaN(valorRaiz)) {
    alert("Insira um valor nos dois campos!");
  } else {
    let progressao = [valorInicial];

    for (let i = 0; i < 9; i++) {
      let proximoNumero = progressao[i] + valorRaiz;
      progressao.push(proximoNumero);
    }

    alert(progressao);
  }
}

const calculaPg = () => {
  const valorInicial = parseInt(document.getElementById("valorInicial").value);
  const valorRaiz = parseInt(document.getElementById("valorRaiz").value);

  if (Number.isNaN(valorInicial) || Number.isNaN(valorRaiz)) {
    alert("Insira um valor nos dois campos!");
  } else {
    let progressao = [valorInicial];

    for (let i = 0; i < 9; i++) {
      let proximoNumero = progressao[i] * valorRaiz;
      progressao.push(proximoNumero);
    }
    
    alert(progressao);
  }
}
