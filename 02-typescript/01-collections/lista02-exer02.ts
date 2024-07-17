import * as leia from "readline-sync";

const numeros: Set<number> = new Set<number>();
let achou: boolean = false;

for (let i: number = 0; i < 10; i++) {
    numeros.add(leia.questionInt(`Digite um valor inteiro, sem repeti-lo: `))
}

let numeroProcurado: number = leia.questionInt(`Digite o numero que voce deseja encontrar: `)

for (let numero of numeros) {
    if (numeroProcurado == numero) {
        console.log(`O número ${numeroProcurado} foi encontrado!`);
        achou = true;
    }
}

if (!achou)
    console.log(`O número ${numeroProcurado} não foi encontrado.`);
    
