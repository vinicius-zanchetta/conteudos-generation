const leia = require('readline-sync')

let salario, abono;

salario = leia.questionFloat("Digite o valor do salario: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um número real!"})
abono = leia.questionFloat("Digite o valor do abono: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um número real!"})

novoSalario = salario + abono;
console.log(`O seu novo salário é ${novoSalario}`);