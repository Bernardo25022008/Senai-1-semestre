const prompt = require("prompt-sync")();
const cambioMoedas = {
  dolar_us: {
    nome: "Dólar Americano",
    codigo: "USD",
    valor_em_real: 5.4,
  },
  euro: {
    nome: "Euro",
    codigo: "EUR",
    valor_em_real: 6.52,
  },
  libra: {
    nome: "Libra Esterlina",
    codigo: "GBP",
    valor_em_real: 7.42,
  },
  iene: {
    nome: "Iene Japonês",
    codigo: "JPY",
    valor_em_real: 0.049,
  },
  dolar_au: {
    nome: "Dólar Australiano",
    codigo: "AUD",
    valor_em_real: 4.14,
  },
};

function dolarus(a) {
  console.log(math.rambom(a / 5.4));
}

while (true) {
  const BRL = Number(prompt("Valor a ser convertido:"));
  console.log(
    `MENU
        1 - US
        2 - Euro
        3 - Libra
        4 - Iene
        5 - Au
        6 -Encerrar`
  );

  const Cambio = Number(prompt("Digite a opção: "));

  if (Cambio === 6) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (Cambio) {
    case 1:
      console.log(dolarus(BRL));
      continuar();
      break;
    case 2:
      console.log(subtração(BRL));
      continuar();
      break;
    case 3:
      console.log(multiplicação(a, b));
      continuar();
      break;
    case 4:
      console.log(divisão(a, b));
      continuar();
      break;
    case 5:
      continua();
    default:
      console.log("Opção inválida");
  }

  console.clear();
}
