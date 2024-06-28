const leia = require('readline-sync')

let continuar = "S";
let qtdDevsBackend = 0;
let qtdMulheresFrontend = 0;
let qtdHomensMobileMais40 = 0;
let qtdNaoBinariosFullStackMenos30 = 0;
let totalRespostas = 0;
let mediaIdade = 0;

while (continuar != "N") {

    idade = leia.questionInt(`Idade: `);
    console.log(
        `\nCódigo   Identidade de Genero
1   \t Mulher Cis
2   \t Homem Cis
3   \t Não Binário
4   \t Mulher Trans
5   \t Homem Trans
6   \t Outros`);
    identidadeGenero = leia.questionInt(`Codigo Identidade de Genero: `);
    console.log(
        `\nCódigo\tTipo Desenvolvedor
1\tBackend
2\tFrontend
3\tMobile
4\tFullStack`);
    pessoaDesenvolvedora = leia.questionInt(`Codigo Pessoa Desenvolvedora: `);

    totalRespostas++;
    mediaIdade+= idade;
    if (pessoaDesenvolvedora == 1)
        qtdDevsBackend++
    if ((identidadeGenero == 1 || identidadeGenero == 4) && (pessoaDesenvolvedora == 2))
        qtdMulheresFrontend++
    if ((identidadeGenero == 2 || identidadeGenero == 5) && (pessoaDesenvolvedora == 3) && (idade > 40))
        qtdHomensMobileMais40++
    if ((identidadeGenero == 3) && (pessoaDesenvolvedora == 4) && (idade < 30))
        qtdNaoBinariosFullStackMenos30++

    continuar = leia.question("Deseja continuar? (S/N) ")
}

console.log(
`Total de pessoas desenvolvedoras Backend: ${qtdDevsBackend}
Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${qtdMulheresFrontend}
Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${qtdHomensMobileMais40}
Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${qtdNaoBinariosFullStackMenos30}
O número total de pessoas que responderam à pesquisa: ${totalRespostas}
A média de idade das pessoas que responderam à pesquisa: ${(mediaIdade / totalRespostas).toFixed(2)}`);