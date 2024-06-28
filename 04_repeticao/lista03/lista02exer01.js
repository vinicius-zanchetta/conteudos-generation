const leia = require('readline-sync')

let menoresQue21 = 0, maioresQue50 = 0, idade = 0;

while (idade >= 0) {
    idade = leia.questionInt(`Digite uma idade: `);
    if (idade < 0) {
        continue
    } else if (idade < 21) {
        menoresQue21++;
    } else if (idade > 50) {
        maioresQue50++;
    }
}

console.log("Total de pessoas menores de 21 anos: " + menoresQue21 );
console.log("Total de pessoas maiores de 50 anos: " + maioresQue50 );
