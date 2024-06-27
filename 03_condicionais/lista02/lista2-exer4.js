const leia = require('readline-sync')

saldo = 1000.0;
console.log("\nCÓDIGO da OPERAÇÃO\tOPERAÇÃO");
console.log("1\t\t\tSaldo");
console.log("2\t\t\tSaque");
console.log("3\t\t\tDepósito");

codigoOp = leia.questionInt("Digite o codigo da operacao: ")


switch (codigoOp) {
    case 1:
        console.log(`Operação: Consultar Saldo\nSaldo: ${saldo}`);
        break;
    case 2:
        valor = leia.questionFloat("\nDigite o valor a ser retirado: ")
        if (valor > 1000)
            console.log("Saldo Insuficiente");
        else
            console.log(`\nOperação: Saque\nValor retirado: ${valor}\nSaldo: ${saldo-valor}`);
        break;
    case 3:
        valor = leia.questionFloat("\nDigite o valor a ser depositado: ")
        console.log(`\nOperação: Depósito\nSaldo: ${saldo + valor}`);
        break;
    default:
        console.log("\nOperação inválida!");
        break;
}