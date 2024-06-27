let pc = ["placa-mãe", "cpu", "ram", "rom", "fonte"];
pc.splice(1, 1, "processador");
console.log(pc);
pc.reverse("fonte");
pc.reverse("rom");
pc.reverse("ram");
pc.reverse("processador");
pc.reverse("placa-mãe");
console.log(pc);
