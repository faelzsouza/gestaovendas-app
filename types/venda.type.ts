import { Cliente } from "./cliente.type";
import { Produto } from "./produtos.type";

export type Venda = {
    id: string;
    data: string;
    entregue: boolean;
    clienteId: string;
    dataEntrega: string;
    produtosIDs: string[];
    cliente: Cliente;
    produtos: Produto[];
}
