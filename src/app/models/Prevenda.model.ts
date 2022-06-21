import { Cliente } from './../components/cliente/cliente-create/clientes.model';
export interface Prevenda {
    id?: number
    dtaPreVenda: Date   
    dtaValidade: Date
    status:string
    cliente: Cliente
}



