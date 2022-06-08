import { ClienteNewDTO } from './../components/cliente/cliente.model';

export interface Prevenda {
    id?: number
    dtaPreVenda: Date   
    dtaValidade: Date
    status:string
    cliente: ClienteNewDTO
}



