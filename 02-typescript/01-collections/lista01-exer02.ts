import * as leia from "readline-sync";

const numeros: Array<Number> = new Array<Number>(2,5,1,3,4,9,7,8,10,6);
let numeroProcurado: number = leia.questionInt(`Digite o numero que voce deseja encontrar: `)
let achou: boolean = false;

const position: number = numeros.indexOf(numeroProcurado)

if (position >= 0) {
    console.log(`O número ${numeroProcurado} está na posição ${position} do array`); 
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado!`)
}

// if (numeros.includes(numeroProcurado)) {
//     console.log(`O número ${numeroProcurado} está na posição ${numeros.indexOf(numeroProcurado)} do array`);
//     achou = true;
// }

// for (let i: number = 0; i < 10; i++) {
//     if (numeroProcurado == numeros[i]) {
//         console.log(`O número ${numeroProcurado} está na posição ${i} do array`)
//         achou = true;
//     }
// }

// if (!achou)
//     console.log(`O número ${numeroProcurado} não foi encontrado!`);





