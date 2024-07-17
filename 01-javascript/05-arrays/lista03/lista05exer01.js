const leia = require("readline-sync");

let matrizInteiros = new Array(3);

for (i = 0; i < 3; i++) {
    matrizInteiros[i] = Array(3);
}

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        matrizInteiros[i][j] = leia.questionInt(`Digite o valor de x: matrizInteiros[${i + 1}][x]: `);
    }
}

console.log("Elementos da diagonal principal: ");
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (i == j)
            process.stdout.write(`${matrizInteiros[i][j]} `);
    }
}

console.log("\nElementos da diagonal secundária: ");
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (i + j == 2)
            process.stdout.write(`${matrizInteiros[i][j]} `);
    }
}

soma = 0;
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (i == j)
            soma += matrizInteiros[i][j]
    }
}
console.log("\nSoma dos elementos da diagonal principal: " + soma);

soma = 0;
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (i + j == 2)
            soma += matrizInteiros[i][j]
    };
}

console.log("Soma dos elementos da diagonal secundária: " + soma);