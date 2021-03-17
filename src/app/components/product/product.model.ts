import { Subcategoria } from '../subcategoria/subcategoria.model';
export interface Produto {
    id?: number
    nome: string
    subcategoria : Subcategoria
    preco: number

}