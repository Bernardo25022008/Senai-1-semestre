const prompt = require("prompt-sync")();
while (true) {
  let numero = Number(prompt("Digite um número ? "));
  const correto = 98;
  if (numero == correto) {
    console.log("parabéns, você acertou o número");
    break;
  }
  if (numero != correto) {
    console.log("Esta incorreto");
  }
}
