function lista(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma = soma + array[i];
  }
  console.log(soma);
}

lista([1, 12, 13]);

//resultado = 26
