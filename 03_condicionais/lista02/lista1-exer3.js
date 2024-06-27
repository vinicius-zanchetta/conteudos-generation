const leia = require('readline-sync')

nome = leia.question("Digite o nome do doador: ")
idade = leia.questionInt("Digite a idade do doador: ")
primeiraDoacao = leia.question("Primeira doacao de sangue?: ")

if ((idade >= 18) && (idade < 60) || ((idade >= 60 && idade < 70) && primeiraDoacao == "false")) {
    console.log(`${nome} está apto/apta para doar sangue!`);
} else {
    console.log(`${nome} NÃO está apto/apta para doar sangue!`);
}
