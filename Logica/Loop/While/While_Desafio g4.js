const prompt = require("prompt-sync")();
let dado;
let casa = 0;
let i = 0;

while (true) {
  prompt.hide("jogue o dado");
  dado = Math.random() * 20;
  dado = Math.ceil(dado);
  console.log(dado);
  i++;
  if (dado == 1) {
    console.log("volte uma casa");
    casa = casa - 1;
  }
  if (dado >= 2 && dado < 12) {
    console.log("Não avança nenhuma casa");
    casa = casa + 0;
  }
  if (dado >= 12 && dado <= 19) {
    console.log("Avança uma casa");
    casa = casa + 1;
  }
  if (dado == 20) {
    console.log("Avança 10 casas");
    casa = casa = 10;
  }
  if (casa >= 10) {
    console.log("Ganhou");
    console.log(i);
    break;
  }
}
