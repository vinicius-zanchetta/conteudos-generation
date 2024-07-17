const leia = require('readline-sync')

let numerosPares = 0, numerosImpares = 0, numero;

for (i = 1; i <= 10; i++) {
    numero = leia.questionInt(`Digite o ${i}o numero: `);
    (numero % 2 == 0) ? numerosPares++ : numerosImpares++
}

console.log("Total de números pares: " + numerosPares );
console.log("Total de números ímpares: " + numerosImpares);
