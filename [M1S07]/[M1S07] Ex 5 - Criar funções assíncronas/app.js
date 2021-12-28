const euNaoEspero = async () => {
  aguarda5Segundos()
  console.log("Eu não espero!");
}

const aguarda5Segundos = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
  console.log("Função diz: Terminei!");
}

euNaoEspero();

const euEspero = async () => {
  await aguarda5Segundos() // linha única modificada (await)
  console.log("Eu espero!");
};

euEspero();