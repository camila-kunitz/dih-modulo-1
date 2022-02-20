# Exercicio 09 - Composição e arquitetura

Quando organizamos nossos arquivos, é boa prática deixarmos componentes bem nomeados e dentro de diretórios em que faça sentido eles estarem. Não existe uma maneira correta, e o padrão a ser seguido geralmente depende do que o time acordou na concepção do projeto.

Dada a lista de componentes abaixo, como você organizaria estes componentes em pastas? Veja o nome dos componentes para imaginar uma estrutura de pastas que faça sentido.

Botao.js
InputTexto.js
CardProduto.js
CardProdutoHeader.js
CardProdutoBody.js
GlobalStyles.js
themes.js
fetchAutenticador.js
fetchProdutos.js
AutenticadorContext.js
AutenticadorProvider.js
formataListaProdutos.js
formataListaUsuarios.js
routes.js
PaginaHome
PaginaListaUsuarios
PaginaListaProdutos

<hr/>

### Resposta

```
 └── src
 	  ├── components
      │	   └── Card
      │	   │    └── CardProduto.js
      │    │    └── CardProdutoHeader.js
      │    │    └── CardProdutoBody.js
      │    └── Botao.js
      │    └── InputTexto.js
      ├── contexts
      │    └── AutenticadorContext.js
      │    └── AutenticadorProvider.js
      ├── pages
      │	   └── PaginaHome.js
      │	   └── PaginaListaUsuarios.js
      │	   └── PaginaListaProdutos.js
      ├── routes
      │	   └── routes.js
      ├── services
      │	   └── fetchAutenticador.js
      │	   └── fetchProdutos.js
      ├── themes
      │	   └── GlobalStyles.js
      │	   └── themes.js
      └── utils
           └── formataListaProdutos.js
           └── formataListaUsuarios.js
```
