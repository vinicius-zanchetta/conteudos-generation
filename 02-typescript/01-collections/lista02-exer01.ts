import * as leia from "readline-sync";

const numeros: Set<number> = new Set<number>();

for (let i: number = 0; i < 10; i++) {
    numeros.add(leia.questionInt(`Digite um valor inteiro, sem repeti-lo: `))
}

for (let numero of numeros) {
    console.log(numero);
}
