const leia = require('readline-sync')

let somaNumerosPositivos = 0, numero;

do {
    numero = leia.questionInt(`Digite um numero: `);
    if (numero > 0)
        somaNumerosPositivos += numero;
} while (numero != 0);

console.log(`A soma dos números positivos é: ${somaNumerosPositivos}`);

