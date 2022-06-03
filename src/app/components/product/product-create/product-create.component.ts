import { SubcategoriaService } from './../../subcategoria/subcategoria.service';
import { Subcategoria } from './../../../models/subcategoria.model';

import { Produto } from './../produto.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  subcategorias: Subcategoria[]

  produto: Produto = {
    nome: '',
    subcategoria: { id: null, descricao: '' },
    preco: null
  }


  constructor(private productService: ProductService,
    private subcategoriaService: SubcategoriaService,
    private router: Router) { }

  ngOnInit(): void {
    this.subcategoriaService.read().subscribe(subcategorias => {
      this.subcategorias = subcategorias
    })
  }

  createProduct(): void {
    this.produto.preco = Number(String(this.produto.preco).replace(',', '.'))// aceitar virgula 
    this.produto.nome = this.produto.nome.toUpperCase()//salvar tudo em maiusculo


    this.productService.create(this.produto).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])//voltar para tela principal
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
