const leia = require('readline-sync')

console.log("CÓDIGO do CARGO\t\tCARGO\t\t\tPORCENTUAL DE REAJUSTE");
console.log(" 1\t\t\t Gerente\t\t 10%");
console.log(" 2\t\t\t Vendedor\t\t 7%");
console.log(" 3\t\t\t Supervisor\t\t 9%");
console.log(" 4\t\t\t Motorista\t\t 6%");
console.log(" 5\t\t\t Estoquista\t\t 5%");
console.log(" 6\t\t\t Técnico de TI\t\t 8%");

nome = leia.question("Digite o nome do colaborador: ");
codigo = leia.questionInt("Digite o codigo do cargo colaborador: ");
salario = leia.questionFloat("Digite o salario do colaborador: ");

console.log("\nNome do Colaborador: " + nome);
switch (codigo) {
    case 1:
        console.log(`Cargo do Colaborador: Gerente\nSalário: ${(salario * 0.1) + salario}`);
        break;
    case 2:
        console.log(`Cargo do Colaborador: Vendedor\nSalário: ${(salario * 0.07) + salario}`);
        break;
    case 3:
        console.log(`Cargo do Colaborador: Supervisor\nSalário: ${(salario * 0.09) + salario}`);
        break;
    case 4:
        console.log(`Cargo do Colaborador: Motorista\nSalário: ${(salario * 0.06) + salario}`);
        break;
    case 5:
        console.log(`Cargo do Colaborador: Estoquista\nSalário: ${(salario * 0.05) + salario}`);
        break;
    case 6:
        console.log(`Cargo do Colaborador: Técnico de TI\nSalário: ${(salario * 0.08) + salario}`);
        break;

}

