const leia = require('readline-sync')

numero = leia.questionInt("Digite um numero inteiro: ")

if ((numero % 2 == 0) && (numero >= 0)) {
    console.log(`O número ${numero} é par e positivo`);
} else if ((numero % 2 == 1) && (numero >= 0)) {
    console.log(`O número ${numero} é ímpar e positivo`);
} else if ((numero % 2 == 0) && (numero < 0)) {
    console.log(`O número ${numero} é par e negativo`);
} else {
    console.log(`O número ${numero} é ímpar e negativo`);
}