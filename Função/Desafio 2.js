const prompt = require("prompt-sync")();
function adição(a, b) {
  return a + b;
}
function subtração(a, b) {
  return a - b;
}
function multiplicação(a, b) {
  return a * b;
}
function divisão(a, b) {
  return a / b;
}
function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}
const a = Number(prompt("Digite um número :"));
const b = Number(prompt("Digite um número :"));

while (true) {
  console.log(
    `MENU
      1 - Soma
      2 - Subtração
      3 - Multiplicação
      4 - Divisão
      5 - encerrar`
  );

  const operação = Number(prompt("Digite a opção: "));

  if (operação === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (operação) {
    case 1:
      console.log(adição(a, b));
      continuar();
      break;
    case 2:
      console.log(subtração(a, b));
      continuar();
      break;
    case 3:
      console.log(multiplicação(a, b));
      continuar();
      break;
    case 4:
      console.log(divisão(a, b));
      continuar();
      break;
    default:
      console.log("Opção inválida");
  }

  console.clear();
}
