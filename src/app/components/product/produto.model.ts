import { Subcategoria } from './../../models/subCategoria.model';

export interface Produto {
    id?: number
    nome: string
    subcategoria : Subcategoria
    preco: number
}