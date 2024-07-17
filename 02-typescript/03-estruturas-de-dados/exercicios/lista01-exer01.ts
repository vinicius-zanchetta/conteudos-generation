import * as leia from "readline-sync";
import { Queue } from "../../02_interfaces/Queue";

const filaBanco = new Queue<string>();
let opcao: number, cliente: string;

console.log("*****************************************************************");
console.log("\n\t\t1 - Adicionar clientes na fila");
console.log("\t\t2 - Listar todos os clientes");
console.log("\t\t3 - Retirar cliente da fila");
console.log("\t\t0 - Sair\n");
console.log("*****************************************************************");

do {
    opcao = leia.questionInt(`\nEntre com a opcao desejada: `);
    switch (opcao) {
        case 1:
            cliente = leia.question("Digite o nome: ");
            filaBanco.enqueue(cliente);
            console.log("Cliente adicionado!");
            break;
        case 2:
            if (filaBanco.isEmpty()) {
                console.log("A Fila está vazia!");
            } else {
                console.log("Lista de Clientes na fila:");
                filaBanco.printQueue();
            }
            break;
        case 3:
            if (filaBanco.isEmpty()) {
                console.log("A Fila está vazia!");
            } else {
                console.log(filaBanco.dequeue());
                console.log("Cliente saiu da fila do banco agradecendo a Deus depois de esperar 12 horas!!");
                
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