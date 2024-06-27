const leia = require('readline-sync')

let numero1, numero2, numero3, numero4, calculo;

numero1 = leia.questionFloat("Digite o numero 1: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
numero2 = leia.questionFloat("Digite o numero 2: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
numero3 = leia.questionFloat("Digite o numero 3: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
numero4 = leia.questionFloat("Digite o numero 4: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
calculo = (numero1 * numero2) - (numero3 * numero4)
console.log(calculo.toFixed(1));