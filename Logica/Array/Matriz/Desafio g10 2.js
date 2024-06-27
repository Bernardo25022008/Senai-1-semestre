const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];
let somaA = 0;
let somaB = 0;

for (let i = 0; i < arr.length; i++) {
  somaA += arr[i][i];
}
for (let i = 0; i < arr.length; i++) {
  somaB += arr[i][arr.length - 1 - i];
}

let subtra = somaA - somaB;

console.log("A soma da diagonal principal é:", somaA);
console.log("A soma da diagonal secundária é:", somaB);
console.log("A diferença entre as duas é:", subtra);
