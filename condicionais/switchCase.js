const leia = require('readline-sync')

let valorPlano;

nome = leia.question("Digite seu nome: ")

console.log("\n 1 -- De 0 a 10 anos ");
console.log(" 2 -- De 11 a 29 anos ");
console.log(" 3 -- De 30 a 45 anos ");
console.log(" 4 -- De 46 a 59 anos");
console.log(" 5 -- De 60 a 65 anos ");
console.log(" 6 -- Acima de 65 anos ");

codigo = leia.questionInt("\nDigite o codigo da sua faixa etaria: ")

switch (codigo) {
    case 1:
        valorPlano = 100;
        break;
    case 2:
        valorPlano = 200;
        break;
    case 3:
        valorPlano = 300;
        break;
    case 4:
        valorPlano = 400;
        break;
    case 5:
        valorPlano = 500;
        break;
    default:
        valorPlano = 1000;
        break;
    
}

console.log(`Seu plano de saúde custará R$${valorPlano}`);
