const prompt = require("prompt-sync")();

/*
  Exemplo do Objeto da Tarefa
  {
    id: number,
    tarefa: string,
    marcada: boolean
  }
*/

const lista = [];
let id = 0;

console.clear();

function mostrarLista() {
  console.log(lista);
}

function adicionarTarefa() {
  const texto = prompt("digite um texto :");
  lista.push({
    id: lista.length + 1,
    tarefa: texto,
    marcado: false,
  });
}

function marcarTarefa() {
  const marcar = prompt("Qual tarefa você deseja marcar ?");
  lista[marcar - 1].marcada = true;
}

function removerTarefa() {
  const remover = prompt("Digite a tarefa na qual deseja remover: ");
  lista.splice(remover - 1, 1);
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
