const leia = require('readline-sync')

numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ")
numero2 = leia.questionInt("Digite o ultimo numero do intervalo: ")

if ((numero1 < numero2)) {
    console.log(`No intervalo entre ${numero1} e ${numero2}:`);
    for(i = numero1; i <= numero2; i++) {
        if (i % 3 == 0 && i % 5 == 0) 
            console.log(i + " é múltiplo de 3 e 5")
    }
} else {
    console.log("Intervalo inválido!");
}