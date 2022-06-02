import { Subcategoria } from './../subcategoria/subCategoria.model';

export interface Produto {
    id?: number
    nome: string
    subcategoria : Subcategoria
    preco: number
}