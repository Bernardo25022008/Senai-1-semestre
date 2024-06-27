//Crie um loop for que permita receber 5 números do usuário usando prompt. Determine qual número é o maior e qual é o menor.
const prompt = require("prompt-sync")();
let maior;
let menor;
for (let i = 0; i < 5; i++) {
  const n1 = Number(prompt("Digite um número ? "));
  if (i == 0) {
    menor = n1;
    maior = n1;
  } else {
    if (n1 > maior) {
      maior = n1;
    }
    if (n1 < menor) {
      menor = n1;
    }
  }
}
console.log(maior, menor);
