const prompt = require("prompt-sync")();

const letra = prompt("Digite um letra :");
switch (true) {
  case letra == "a":
    console.log("Letra a digitada");
    break;
  case letra == "b":
    console.log("letra b digita");
    break;
  default:
    console.log(
      "o prazo para as atividades está entre a letra G e K do teclado"
    );
}
