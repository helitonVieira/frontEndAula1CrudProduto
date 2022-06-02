import { SubcategoriaService } from './../../subcategoria/subcategoria.service';
import { Subcategoria } from './../../subcategoria/subcategoria.model';

import { Produto } from "./../produto.model";

import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {

  product: Produto;
  subcategorias : Subcategoria[];

  constructor(
    private productService: ProductService,
    private subcategoriaService: SubcategoriaService,

    private router: Router,
    private route: ActivatedRoute
  ) {}

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
    this.product.preco = Number(String(this.product.preco).replace(',','.'))// aceitar virgula 
    this.product.nome = this.product.nome.toUpperCase()//salvar tudo em maiusculo


    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
