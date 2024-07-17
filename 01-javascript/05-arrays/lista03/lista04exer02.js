const leia = require("readline-sync");

let i, somaElementos = 0, media, vetorInteiros = new Array(10);

for (i = 0; i < 10; i++) {
    vetorInteiros[i] = leia.questionInt(`Digite o numero ${i + 1}: `);
    somaElementos+= vetorInteiros[i];
}

media = somaElementos / 10

console.log("Elementos nos índices impares:");
for (i = 1; i < 10; i+= 2) {
    process.stdout.write(`${vetorInteiros[i]} `);
}

console.log("\nElementos pares");
for (i = 0; i < 10; i++) {
    if (vetorInteiros[i] % 2 == 0)
        process.stdout.write(`${vetorInteiros[i]} `);
}

console.log(`\nSoma: ${somaElementos}`);
console.log(`Média: ${somaElementos}`);

