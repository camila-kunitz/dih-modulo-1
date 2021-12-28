# Agora vamos tirar um pouco a mão do programa, essa é uma questão mais teórica:

## Quando é recomendado utilizarmos Promises em nosso programa? Qual é a principal diferença entre a utilização de Promisses e Async / Await?

### **Resposta:**

> A utilização das Promises são recomendadas para lidar com eventual conclusão ou falha de uma implementações de funções assincronas. Ela define uma ação que vai ser executada no futuro, podendo ser resolvida (com sucesso), rejeitada (com erro), pendente ou finalizado.

> O async/await é um recurso da linguagem JS que te permite trabalhar com Promise como se fossem ações síncronas, simplificando o uso do then/catch e das Promises no caso em que você precisa executar alguns procedimentos em um grupo de Promises ou em fluxo de controle complicado.
