Quando usamos o useEffect, existe um segundo parâmetro que podemos passar e que altera o seu comportamento. O que acontece com o useEffect:

- Quando não passamos o segundo parâmetro?
  O _useEffect_ é ativado quando o componente é renderizado pela primeira e também toda vez que o componente for atualizado.

- Quando passamos um array vazio?
  O _useEffect_ é ativado somente quando o componente é renderizado pela primeira. Ou seja, é executado apenas uma vez.

- Quando passamos um array com uma variável (estado ou prop)?
  O _useEffect_ é ativado somente quando o estado ou prop que estiver dentro do array for atualizado.
