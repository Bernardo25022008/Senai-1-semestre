const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número ? "));
let contador = 0;
let i = 1;
do {
  if (numero % i == 0) {
    contador++;
  }
  i++;
} while (i <= numero);
if (contador == 2) {
  console.log("Primo");
} else {
  console.log("Não e primo");
}
