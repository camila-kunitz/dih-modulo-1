# Mais uma questão teórica: O que significa termos um programa assíncrono?

## Quando uma função for assíncrona, quando é recomendado utilizar o Await?

### **Resposta:**

> Chamamos de programação assíncrona quando nosso código deve aguardar certo processamento que não está em nosso controle acontecer, como uma requisição externa a uma API, para aí então continuar com a execução da tarefa seguinte. [(Referência)](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?gclid=CjwKCAiAiKuOBhBQEiwAId_sK3OCqTHuyAE7KcIM_U56lB5F7dZ-Rs19xHumnH5Aamh68K2V9U0ihhoCqJkQAvD_BwE)

> Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida. A palavra-chave await recebe uma Promise e a transforma em um valor de retorno (ou lança uma exceção em caso de erro). Quando utilizamos await, o JavaScript vai aguardar até que a Promise finalize. Se for finalizada com sucesso (o termo utilizado é fulfilled), o valor obtido é retornado. Se a Promise for rejeitada (o termo utilizado é rejected), é retornado o erro lançado pela exceção.
[(Referência)](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)

