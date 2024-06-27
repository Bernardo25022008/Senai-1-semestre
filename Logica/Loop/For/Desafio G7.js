const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite a altura da piramide ? "));
for (let i = 1; i <= numero; i++) {
  console.log(" ".repeat(numero - i), "*".repeat(i + i - 1));
}
