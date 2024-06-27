let carro = {
  marca: "toyota",
  modelo: "supra mk4",
  ano: 2019,
  cor: "Branco",
};
console.log(carro.modelo, carro.cor);
carro.cor = "jacinto";
carro.condiçao = "novo";
delete carro.ano;
console.log(carro);
