let pessoa = {
  nome: "Bernardo",
  idade: 16,
  profissão: "Investidor",
  país: "Espanha",
};
console.log(pessoa.nome, pessoa.idade);
pessoa.profissão = "vendedor da shopee";
pessoa.email = "bernaalexandre";
console.log(pessoa);
delete pessoa.país;
console.log(pessoa);
