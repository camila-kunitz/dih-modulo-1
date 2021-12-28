const buscarImagem = async () => {
  // busca URL da imagem na API
  const urlImagem = await consultaApi();

  // Atribui a URL à tag <img>
  const img = document.getElementById("imagem");
  img.setAttribute('src', urlImagem);

  // Adiciona classe para estilizar na tag <img>
  imagem.classList.add('imagem')
}

const consultaApi = async () => {
  return await fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(resp => resp.json())
    .then(lista => lista[0].url)
    .catch(erro => alert(erro))
}

document.getElementById('botao')
  .addEventListener('click', buscarImagem);




