const prompt = require("prompt-sync")();
while (true) {
  let usuario = prompt("Digite seu usuario ? ");
  let senha = Number(prompt("Digite sua senha ?"));
  const usuarioc = "Bernardo";
  const senhac = 2502;
  if (usuario == usuarioc && senha == senhac) {
    console.log("Login realizado com sucesso");
    break;
  }
  if (usuario != usuarioc && senha != senhac) {
    console.log("Senha ou usuario incorreto");
  }
}
