const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
let mult = 0;
let resultado = 0;
for (let linha = 0; linha < numbers.length; linha++) {
  for (let coluna = 0; coluna < numbers.length; coluna++) {
    if (coluna == 0) {
      mult = numbers[linha][coluna] * numbers[linha][coluna + 1];
    } else {
      resultado = mult * numbers[linha][coluna + 1];
      console.log(resultado);
    }
  }
}
