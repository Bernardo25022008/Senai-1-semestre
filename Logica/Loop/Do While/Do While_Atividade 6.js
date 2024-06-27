const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número ? "));
let fatorial = numero;
let i = 0;
let soma;
do {
  if (i == 0) {
    fatorial = numero - 1;
    soma = numero * fatorial;
    i++;
  }
  fatorial = fatorial - 1;
  soma = soma * fatorial;
} while (fatorial > 1);
console.log("A fatorial de", numero, "é", +soma);
