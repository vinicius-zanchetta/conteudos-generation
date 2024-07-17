import * as leia from "readline-sync";

const cores: Array<String> = new Array<String>()
for (let i: number = 0; i < 5; i++) {
    cores.push(leia.question(`Digite o nome da ${i+1}a cor do array: `))
}

console.log("\nListar todas as cores: ");
for (let cor of cores) {
    console.log(cor);
}

console.log("\nCores ordenadas: ");
cores.sort();
for (let cor of cores) {
    console.log(cor);
}




