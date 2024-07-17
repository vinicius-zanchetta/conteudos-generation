const leia = require('readline-sync')

numero1 = leia.questionFloat("Digite o 1o numero: ")
numero2 = leia.questionFloat("Digite o 2o numero: ")

console.log("\nCÓDIGO da OPERAÇÃO\tOPERAÇÃO");
console.log("1\t\t\tSoma");
console.log("2\t\t\tSubtração");
console.log("3\t\t\tMultiplicação");
console.log("4\t\t\tDivisão");
operacao = leia.questionInt("Digite o codigo da operacao: ")

switch (operacao) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log("Operação inválida!");
        break;
}