import * as leia from "readline-sync";
import { Stack } from "../../02_interfaces/Stack";

const pilhaLivros = new Stack<string>();
let opcao: number, livro: string;

console.log("*********************************************************");
console.log("\n\t1 -  Adicionar um novo livro na pilha.");
console.log("\t2 - Listar todos os livros");
console.log("\t3 - Retirar livro da pilha");
console.log("\t0 - Sair\n");
console.log("*********************************************************");


do {
    opcao = leia.questionInt(`\nEntre com a opcao desejada: `);
    switch (opcao) {
        case 1:
            livro = leia.question("Digite o nome: ");
            pilhaLivros.push(livro);
            console.log("Livro adicionado!");
            break;
        case 2:
            if (pilhaLivros.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                console.log("Lista de livros na pilha:");
                pilhaLivros.printStack();
            }
            break;
        case 3:
            if (pilhaLivros.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                console.log(pilhaLivros.pop());
                console.log("Livro retirado da pilha!");
                
            }
            break;
            case 0:
                console.log("Obrigado por utilizar o programa.");
                
                break;
        default:
            console.log("A opção desejada é inválida! Tente novamente.");
            break;
    }
} while (opcao != 0)