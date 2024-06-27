const prompt = require("prompt-sync")();
let maior = Number(prompt("Digite um número ? "));
let menor = maior;
let i = 0;
do {
  const n1 = Number(prompt("Digite um número ? "));

  if (n1 > maior) {
    maior = n1;
  }
  if (n1 < menor) {
    menor = n1;
  }
  i++;
} while (i <= 10);
console.log(menor);
console.log(maior);
