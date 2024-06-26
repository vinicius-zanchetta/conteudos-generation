const leia = require('readline-sync')

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido;

salarioBruto = leia.questionFloat("Digite o salario bruto: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
adicionalNoturno = leia.questionFloat("Qual é o valor adicional por trabalhar a noite? ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
horasExtras = leia.questionFloat("Digite o valor recebido por hora extra: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
descontos = leia.questionFloat("Digite o valor descontado do salário: ", {limitMessage: "Voce entrou com outro tipo de valor! Digite um numero float!"})
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos
console.log(salarioLiquido);