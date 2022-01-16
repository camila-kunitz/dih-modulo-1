## Qual o principal objetivo da contextAPI? Que problemas ela busca solucionar?

No React, o compartilhamento de informações entre os componentes é feito através de herança.

Porém, este compartilhamento só é possivel numa única hierarquia:

- Um componente filho pode acessar as informações de um componente pai.

Assim, surgem algumas limitações:

- Um componente pai não pode acessar informações de um componente filho.
- Um componente irmão não consegue acessar informações de outro irmão.

Para resolver esse problema, o React tem estratégias de compartilhamento de estados “globais“, através da Context API.

A Context API disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

É indicado para compartilhar dados que podem ser considerados “globais” para a árvore de componentes do React, como por exemplo: tema, idioma, se o usuário está autenticado...

Sempre que possível deve ser quebrado em pequenos contextos, pois quando um valor do contexto é atualizado, todos os componentes ligados à ele serão renderizados novamente.
