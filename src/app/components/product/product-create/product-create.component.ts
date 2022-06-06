import { ProdutoService } from './../produto.service';

import { SubcategoriaService } from './../../subcategoria/subcategoria.service';
import { Subcategoria } from './../../../models/subcategoria.model';

import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';

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

  nome = new FormControl(null, Validators.minLength(2));
  subcategoria = new FormControl(null, Validators.minLength(2));
  preco = new FormControl(null, Validators.minLength(1));

  constructor(private produtoService: ProdutoService,
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


    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto criado!')
      this.router.navigate(['/products'])//voltar para tela principal
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

  validaCampor(): boolean {
    if (this.nome.valid && this.subcategoria.valid && this.preco.valid) {
      return true;
    } else {
      return false;
    }
  }
}
