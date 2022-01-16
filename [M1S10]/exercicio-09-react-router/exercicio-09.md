## Para que é utilizado o React Router?

Assim como em páginas web tradicionais, normalmente precisamos acessar outros componentes ou páginas que não estão renderizadas na página principal. Com isso temos a necessidade de fazer o roteamento dos caminhos que serão acessados pelo usuário a partir do componente/página inicial.

A maneira mais completa de fazer isso e também uma das mais utilizadas é com a biblioteca chamada _react-router_.

## O que é o BrowserRouter?

É um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes, por conta disso ele ficará em volta dos componentes `<Route>`.

```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route path="/sobre" element={<Sobre />}>
    <Route path="/contato" element={<Contato />}>
  </Routes>
</BrowserRouter>
```

## O que é o Routes?

É um componente que recebe vários componentes de Rota, ou seja, é um agrupador de rotas da aplicação.

```javascript
<Routes>
  <Route path="/" element={<App />}>
  <Route path="/sobre" element={<Sobre />}>
  <Route path="/contato" element={<Contato />}>
</Routes>
```

## O que é o Route?

Componente que associa a rota ao componente, ele recebe dois parâmetros:

- **path**: é o caminho na URL que precisa ser acessado para mostrar o componente, definido pelo parâmetro element;
- **element**: recebe o componente que será exibido ao acessar a rota;

```javascript
<Route path="/sobre" element={<Sobre />}>
```
