const leia = require('readline-sync')

let nota1, nota2, nota3, nota4;
nota1 = leia.questionFloat("Nota 1: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
nota2 = leia.questionFloat("Nota 2: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
nota3 = leia.questionFloat("Nota 3: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
nota4 = leia.questionFloat("Nota 4: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4
console.log(`Sua média final foi ${mediaFinal.toFixed(2)}`);