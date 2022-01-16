## Quais são as funções expostas pela contextAPI que podemos utilizar?

- **React.createContext**: Serve para criação um objeto Context.
- **Context.Provider**: É um componente que “fornece” os dados do contexto, bem como as suas mudanças, aos seus “consumidores”. Em resumo, ele proverá o context aos componentes filhos da árvore.
- **Context.Consumer**: Um componente React que assina mudanças de contexto. Usar este componente permite você assinar a um contexto.
- **useContext**: Permite conectar e consumir um contexto.

## Qual o hook que podemos usar para conectar à um contexto e obter o seu valor atual?

Para isto, existe a hook _useContext_, que recebe um único parâmetro que é o contexto que se quer ter acesso e retorna o valor atual do contexto.

`const value = useContext(MyContext)`
