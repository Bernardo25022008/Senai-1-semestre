const prompt = require("prompt-sync")();
let idade = prompt("Digite sua idade:");
if (idade >= 18) {
  console.log("é maior de idade");
} else {
  console.log(" menor de idade");
}
