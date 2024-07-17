import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Produto> = new Array<Produto>();
    public numero: number = 0;

    criarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("Produto criado com sucesso!");
    }

    listarProdutos(): void {
        this.listaProdutos.forEach(p => p.visualizar());
    }

    consultarProdutoPorId(id: number): void {
        let produtoBuscado: Produto | null = this.buscarNoArray(id);
        (produtoBuscado !== null) ? produtoBuscado.visualizar() : console.log("O produto não foi encontrado.");
    }

    atualizarProduto(produto: Produto): void {
        let idBuscado = this.buscarNoArray(produto.id);

        if (idBuscado !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(idBuscado)] = produto;
            console.log(`O produtode ID ${produto.id} foi alterado com sucesso.`);
        } else {
            console.log("Produto não encontrado!");
        }
    }

    deletarProduto(id: number): void {
        let produtoBuscado: Produto | null = this.buscarNoArray(id);
        if (produtoBuscado != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(produtoBuscado), 1);
            console.log("Produto deletado com sucesso da base de dados.");
        } else
            console.log("Produto não foi encontrado na base de dados.");
        return;
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}