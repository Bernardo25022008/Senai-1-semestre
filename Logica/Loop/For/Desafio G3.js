const prompt = require("prompt-sync")();
let numero = 0;
let media;
for (let i = 1; i <= 10; i++) {
  const n = Number(prompt("Digite um número ? "));
  numero = numero + n;
  if (i == 10) {
    media = numero / i;
  }
}
console.log(media, numero);
