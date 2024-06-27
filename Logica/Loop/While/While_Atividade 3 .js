//Crie um loop while que tenha 10 iterações.
//A cada iteração, receba um número pelo prompt. Por fim, mostre no console o maior e o menor número.
const prompt = require("prompt-sync")();
let maior = Number(prompt("Digite um número ? "));
let menor = maior;
let i = 0;
while (i <= 10) {
  const n1 = Number(prompt("Digite um número ? "));

  if (n1 > maior) {
    maior = n1;
  }
  if (n1 < menor) {
    menor = n1;
  }
  i++;
}
console.log(maior, menor);
