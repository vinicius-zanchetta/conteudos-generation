import * as leia from "readline-sync"
import { Medicamento } from "./src/model/Medicamento"
import { Cosmetico } from "./src/model/Cosmetico"
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";

function main(): void {
    const produtos: ProdutoController = new ProdutoController();
    let id: number, nomeProduto: string, tipo: number, preco: number, fragrancia: string, generico: string;
    const tipoProduto = ["Cosmetico", "Medicamento"];
    let opcao: number;
    // let med: Medicamento = new Medicamento(1, "Aspirina", 1, 9.99, "AspiXina");
    // let cosm: Cosmetico = new Cosmetico(2, "Hidratante", 2, 20.99, "Phebo");
    // produtos.criarProduto(med);
    // produtos.criarProduto(cosm);
    // produtos.listarProdutos();
    // produtos.consultarProdutoPorId(1);
    // produtos.consultarProdutoPorId(2);

    console.log("_______________________________");
    console.log("PROJETO DE CADASTRO DE PRODUTOS");
    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
    console.log("1 - Criar Produto");
    console.log("2 - Listar Todos Produtos");
    console.log("3 - Buscar Produto pelo ID");
    console.log("4 - Atualizar Produto");
    console.log("5 - Deletar Produto");
    console.log("6 - Sair da Aplicação");
    
    console.log("_______________________________");
    
    while (true) {
        opcao = leia.questionInt("Digite qual comando voce deseja realizar: \n")
        switch(opcao) {
            case 1:
                console.log("Qual é o tipo do Produto?");
                tipo = leia.keyInSelect(tipoProduto, "", {cancel : false}) + 1;
                nomeProduto = leia.question("Digite o nome do produto: ");
                preco = leia.questionFloat("Digite o preco do produto: ")
                if (tipo == 1) {
                    fragrancia = leia.question("Qual eh a fragrancia do produto? ")
                    produtos.criarProduto(new Cosmetico(produtos.gerarNumero(), nomeProduto, tipo, preco, fragrancia));
                    console.log("Cosmético criado com sucesso!\n");
                    
                } else if (tipo == 2) {
                    generico = leia.question("Qual eh o generico do produto? ")
                    produtos.criarProduto(new Cosmetico(produtos.gerarNumero(), nomeProduto, tipo, preco, generico));
                    console.log("Medicamento criado com sucesso!\n");
                }
                break;
            case 2:
                produtos.listarProdutos();
                break;
            case 3:
                id = leia.questionInt("Digite o ID do produto que voce procura: ")
                produtos.consultarProdutoPorId(id)
                break;
            case 4:
                id = leia.questionInt("Digite o ID do produto que voce deseja atualizar: ")
                let produtoAtualizado = produtos.buscarNoArray(id);

                if (produtoAtualizado == null) {
                    console.log("Produto não encontrado!\n");
                    continue;
                }

                nomeProduto = leia.question("Digite o nome do produto a ser atualizado: ");
                preco = leia.questionFloat("Digite o preco do produto a ser atualizado: ")
                
                if (produtoAtualizado.tipo == 1) {
                    fragrancia = leia.question("Qual eh a fragrancia do produto a ser atualizado? ")
                    produtos.atualizarProduto(new Cosmetico(id, nomeProduto, produtoAtualizado.tipo, preco, fragrancia));
                    console.log("Cosmético atualizado com sucesso!\n");
                } else if (produtoAtualizado.tipo == 2) {
                    generico = leia.question("Qual eh o generico do produto a ser atualizado? ")
                    produtos.atualizarProduto(new Cosmetico(id, nomeProduto, produtoAtualizado.tipo, preco, generico));
                    console.log("Medicamento atualizado com sucesso!\n");
                }

                break;
            case 5:
                id = leia.questionInt("Digite o ID do item a ser deletado: ");
                produtos.deletarProduto(id);
                break;
            case 6:
                // exit();
                break;
            // case :

            //     break;

        }
    }
    
    
}

main();