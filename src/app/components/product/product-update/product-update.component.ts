import { ProdutoService } from './../produto.service';
import { Subcategoria } from './../../../models/subcategoria.model';
import { SubcategoriaService } from './../../subcategoria/subcategoria.service';

import { Produto } from "./../produto.model";

import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {

  product: Produto;
  subcategorias: Subcategoria[];

  nome = new FormControl(null, Validators.minLength(2));
  subcategoria = new FormControl(null, Validators.minLength(2));
  preco = new FormControl(null, Validators.minLength(1));

  constructor(
    private productService: ProdutoService,
    private subcategoriaService: SubcategoriaService,

    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //carregar as subCategorias
    this.subcategoriaService.read().subscribe(subcategorias => {
      this.subcategorias = subcategorias
    });

    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });

  }

  updateProduct(): void {
    this.product.preco = Number(String(this.product.preco).replace(',', '.'))// aceitar virgula 
    this.product.nome = this.product.nome.toUpperCase()//salvar tudo em maiusculo


    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

  validaCampor(): boolean {
    if (this.nome.valid && this.subcategoria.valid && this.preco.valid) {
      return true;
    } else {
      return false;
    }
  }
}
