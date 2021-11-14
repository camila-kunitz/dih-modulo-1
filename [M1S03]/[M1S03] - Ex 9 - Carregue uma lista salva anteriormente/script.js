// Exercicio 9

/*
Utilizando a mesma página do exercício anterior (exercício 7), crie um novo botão “Carregar lista”, que ao ser clicado deve buscar no Local Storage se existe uma lista de itens de mercado salva em memória, e em caso positivo deve mostrar os itens no elemento da página. Caso não haja nenhuma lista previamente salva, deve informar o usuário “Não há itens salvos”.
 */


let listaArray = [];

document.getElementById("botao").addEventListener("click", () => {
  adicionarItem();
});

document.getElementById("botaoSalvar").addEventListener("click", () => {
  salvarLista();
});

document.getElementById("botaoCarregar").addEventListener("click", () => {
  carregarLista();
});

const adicionarItem = () => {
  const item = document.querySelector("#inserir-item");

  if (item.value === "") {
    alert("Escreva no campo o item desejado!");
  } else {
    criaItemHtml(item.value);
    item.value = "";
  }
}

const criaItemHtml = (texto) => {
  const itemLista = document.createElement("option");
  itemLista.innerText = texto;
  
  const lista = document.getElementById("lista");
  lista.appendChild(itemLista);

  listaArray.push(texto);
}

const salvarLista = () => {
  localStorage.setItem("bancoLista", JSON.stringify(listaArray));
}

const carregarLista = () => {
  const bancoExistente = localStorage.getItem("bancoLista");

  if (bancoExistente) {
    listaArray = JSON.parse(bancoExistente);

    const lista = document.getElementById("lista");
    listaArray.forEach(item => criaItemHtml(item));
    
  } else {
    alert("Não há itens salvos.")
  }
}