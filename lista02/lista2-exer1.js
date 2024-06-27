const leia = require('readline-sync')

console.log("CÓDIGO\t\t  PRODUTO\t\t VALOR");
console.log("1\t\t Cachorro Quente\t R$ 10.00");
console.log("2\t\t X-Salada\t\t R$ 15.00");
console.log("3\t\t X-Bacon\t\t R$ 18.00");
console.log("4\t\t Bauru\t\t\t R$ 12.00");
console.log("5\t\t Refrigerante\t\t R$ 8.00");
console.log("6\t\t Suco de laranja\t R$ 13.00");

codigo = leia.questionInt("Digite o codigo do item que deseja comprar: ")
quantidade = leia.questionInt("Digite a quantidade que deseja comprar: ")

switch (codigo) {
    case 1:
        console.log(`\nProduto: Cachorro Quente\nValor total: ${quantidade * 10}`);
        break;
    case 2:
        console.log(`\nProduto: X-Salada\nValor total: ${quantidade * 15}`);
        break;
    case 3:
        console.log(`\nProduto: X-Bacon\nValor total: ${quantidade * 18}`);
        break;
    case 4:
        console.log(`\nProduto: Bauru\nValor total: ${quantidade * 12}`);
        break;
    case 5:
        console.log(`\nProduto: Refrigerante\nValor total: ${quantidade * 8}`);
        break;
    case 6:
        console.log(`\nProduto: Suco de Laranja\nValor total: ${quantidade * 13}`);
        break;
}