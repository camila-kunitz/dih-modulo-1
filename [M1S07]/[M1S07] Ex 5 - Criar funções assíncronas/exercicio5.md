Vamos trabalhar com funções assíncronas agora. 

Crie um novo código ‘app.js’. Neste código crie uma função assíncrona chamada: “euNaoEspero()”; Essa função irá chamar outra função chamada “aguarda5Segundos()”. Então, na linha debaixo da chamada da função insira um console.log('Eu não espero'). O código de “aguarda5Segundos()” pode ser encontrado abaixo:

```
async function aguarda5Segundos() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log("Função diz: Terminei!")
}
```

Chame a função “euNaoEspero()” e verifique se ele está aguardando “aguarda5Segundos()” terminar de rodar para executar o resto do programa. Por que isso acontece?

Agora crie outra função assíncrona chamada “euEspero()”, ela possui a mesma sintaxe que “euNãoEspero()”, porém ela deve aguardar “aguarda5Segundos()” terminar de executar. 

Como podemos fazer isso modificando apenas uma linha do código?


### **Resposta:** 

Utilizando a palavara chave *await* para aguardar a conclusão da função.