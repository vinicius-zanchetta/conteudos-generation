const leia = require('readline-sync')

numA = leia.questionInt("Digite o valor de A: ")
numB = leia.questionInt("Digite o valor de B: ")
numC = leia.questionInt("Digite o valor de C: ")

if ((numA + numB) > numC) {
    console.log(`A soma de ${numA} com ${numB} é ${numA+numB} e é MAIOR que ${numC}`);
} else if ((numA + numB) == numC) {
    console.log(`A soma de ${numA} com ${numB} é ${numA+numB} e é IGUAL a ${numC}`);
} else {
    console.log(`A soma de ${numA} com ${numB} é ${numA+numB} e é MENOR que ${numC}`);
}