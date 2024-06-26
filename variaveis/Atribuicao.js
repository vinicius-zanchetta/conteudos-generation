const leia = require('readline-sync')

let quantidade;
let altura;

quantidade = leia.questionFloat("Digite um valor do tipo real: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
console.log(quantidade);
console.log(typeof(quantidade));