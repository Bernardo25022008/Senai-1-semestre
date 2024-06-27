const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];
let DiagonalA = 0;
let DiagonalB = 0;
let subtra;
for (let i = 0; i < arr.length; i++) {
  for (let ii = 0; ii < arr.length; ii++) {
    if (i === ii) DiagonalA += arr[i][ii];
    else if (i + ii === arr[i].length - 1) DiagonalB += arr[i][ii];
    subtra = DiagonalA - DiagonalB;
  }
}

console.log("A soma da diagonal principal é:", DiagonalA);
console.log("A soma da diagonal secundária é:", DiagonalB);
console.log("A diferença entre as duas é:", subtra);
