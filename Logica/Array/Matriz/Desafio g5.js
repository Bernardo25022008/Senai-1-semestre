const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];
let linha1 = 0;
for (let coluna = 0; coluna <= numbers.length; coluna++) {
  for (let linha = 0; linha < numbers.length; linha++) {
    linha1 = linha1 + linha++;
    let mult = numbers[linha][coluna] * numbers[linha1][coluna];
    console.log(mult);
  }
}
