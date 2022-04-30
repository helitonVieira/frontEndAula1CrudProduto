import { LoginComponent } from './components/login/login.component';

import { DomJqueryComponent } from './components/estudo/dom-jquery/dom-jquery.component';
import { SubcategoriaCrudComponent } from './views/subcategoria-crud/subcategoria-crud.component';
import {SubcategoriaDeleteComponent } from './components/subcategoria/subcategoria-delete/subcategoria-delete.component';
import {SubcategoriaUpdateComponent } from './components/subcategoria/subcategoria-update/subcategoria-update.component';
import {SubcategoriaCreateComponent } from './components/subcategoria/subcategoria-create/subcategoria-create.component';

import { ImprimirComponent } from './components/ingresso/imprimir/imprimir.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "",
    component: HomeComponent
  },
  
  {
    path: "products",
    component: ProductCrudComponent
  },

  {
    path: "products/create",
    component: ProductCreateComponent
  },

  {
    path: "products/update/:id",
    component: ProductUpdateComponent

  },

  {
    path: "products/delete/:id",
    component: ProductDeleteComponent

  },

  {
    path: "subcategorias",
    component: SubcategoriaCrudComponent
  },

  {
    path: "subcategorias/create",
    component: SubcategoriaCreateComponent
  },

  {
    path: "subcategorias/update/:id",
    component: SubcategoriaUpdateComponent
  },

  {
    path: "subcategorias/delete/:id",
    component: SubcategoriaDeleteComponent
  },
  {
    path: "ingresso/imprimir",
    component: ImprimirComponent
  },

  {
    path: "estudo/domjquery",
    component: DomJqueryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

