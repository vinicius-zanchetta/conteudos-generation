const leia = require("readline-sync");

let i, vetorInteiros = new Array(10);

for (i = 0; i < 10; i++) {
    vetorInteiros[i] = leia.questionInt(`Digite o numero ${i + 1}: `);
}

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ")

encontrou = false;
for(i = 0; i < vetorInteiros.length; i++) {
    if (vetorInteiros[i] == numero) {
        encontrou = true;
        break;
    }
}

encontrou ? console.log(`O número ${numero} está localizado na posição ${i+1}`) : console.log(`O número ${numero} não foi encontrado!`)
