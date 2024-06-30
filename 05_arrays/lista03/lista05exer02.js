const leia = require("readline-sync");

let matrizInteiros = new Array(10);
let vetorInteiros = new Array(10);

for (i = 0; i < 10; i++) {
    matrizInteiros[i] = Array(4);
}

for (i = 0; i < 10; i++) {
    for (j = 0; j < 4; j++) {
        matrizInteiros[i][j] = leia.questionFloat(`Digite a nota do aluno ${i + 1} no ${j + 1}o bimestre: `);
    }
}

somaNotaAnual = 0;
for (i = 0; i < 10; i++) {
    for (j = 0; j < 4; j++) {
        somaNotaAnual += matrizInteiros[i][j];
    }
    vetorInteiros[i] = somaNotaAnual / 4;
    console.log(`Nota Aluno ${i + 1}: ${vetorInteiros[i].toFixed(1)} `);
    somaNotaAnual = 0;
}

