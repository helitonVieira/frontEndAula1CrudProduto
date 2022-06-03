import { Subcategoria } from './../../models/subcategoria.model';

export interface Produto {
    id?: number
    nome: string
    subcategoria : Subcategoria
    preco: number
}