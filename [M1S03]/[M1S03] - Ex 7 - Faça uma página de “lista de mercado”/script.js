// Exercício 7

/*
Sua página deve possibilitar ao usuário inserir itens em uma lista e exibir a lista atualizada à medida que forem sendo adicionados novos itens.

A página deve conter um rótulo (<label>) “Item a adicionar:” seguido de um campo de texto onde o usuário possa digitar o item. Deve conter também um botão “Adicionar”, que no momento do clique do usuário deve inserir o item digitado na lista. Se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

A página também deve conter uma lista (<select>), que exibirá os itens adicionados pelo usuário.
 */

document.getElementById("botao").addEventListener("click", () => {
  adicionarItem();
});

const adicionarItem = () => {
  const lista = document.getElementById("lista");
  const item = document.querySelector("#inserir-item");

  if (item.value === "") {
    alert("Escreva no campo o item desejado!");
  } else {
    const itemLista = document.createElement("option");
    itemLista.innerText = item.value;

    lista.appendChild(itemLista);

    item.value = "";
  }
}
