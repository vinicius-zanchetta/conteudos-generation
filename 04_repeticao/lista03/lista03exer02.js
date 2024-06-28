const leia = require('readline-sync')

let multiplosDe3 = 0, numero, qtdMultiplosDe3 = 0;

do {
    numero = leia.questionInt(`Digite um numero: `);
    if (numero != 0 && numero % 3 == 0) {
        multiplosDe3 += numero;
        qtdMultiplosDe3++;
    }
} while (numero != 0);

console.log(`A média de todos os números múltiplos de 3 é: ${(multiplosDe3 / qtdMultiplosDe3).toFixed(2)}`);

