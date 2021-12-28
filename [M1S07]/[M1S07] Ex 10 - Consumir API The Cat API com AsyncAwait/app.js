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
  try {
    const consultaUrl = `https://api.thecatapi.com/v1/images/search`
    const response = await fetch(consultaUrl)
    const converteUrl = await response.json()
    const urlImagem = converteUrl[0].url

    return urlImagem;

  } catch (erro) {
    alert('Erro!');
  }
}

document.getElementById('botao')
  .addEventListener('click', buscarImagem);




