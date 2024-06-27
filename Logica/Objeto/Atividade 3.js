const prompt = require("prompt-sync")();
let arr = [];
for (let i = 0; i < 5; i++) {
  let nome1 = prompt("digite um nome :");
  const obj = {
    id: i + 1,
    nome: nome1,
  };
  arr.push(obj);
}
console.log(arr);
