import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteCreate2Component } from './components/cliente/cliente-create2/cliente-create2.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { PreVendaDeleteComponent } from './components/pre-venda/pre-venda-delete/pre-venda-delete.component';
import { PreVendaUpdateComponent } from './components/pre-venda/pre-venda-update/pre-venda-update.component';
import { PreVendaCreateComponent } from './components/pre-venda/pre-venda-create/pre-venda-create.component';
import { PrevendaCrudComponent } from './views/prevenda-crud/prevenda-crud.component';
import { HomeCrudComponent } from './views/home-crud/home-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { NavComponent } from './components/template/nav/nav.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';

import { DomJqueryComponent } from './components/estudo/dom-jquery/dom-jquery.component';
import { SubcategoriaCrudComponent } from './views/subcategoria-crud/subcategoria-crud.component';
import { SubcategoriaDeleteComponent } from './components/subcategoria/subcategoria-delete/subcategoria-delete.component';
import { SubcategoriaUpdateComponent } from './components/subcategoria/subcategoria-update/subcategoria-update.component';
import { SubcategoriaCreateComponent } from './components/subcategoria/subcategoria-create/subcategoria-create.component';

import { ImprimirComponent } from './components/ingresso/imprimir/imprimir.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },

  {
    path: "", component: HomeCrudComponent, canActivate: [AuthGuard], children: [ // children: [ torna os outros caminho filho somente se o home esta autorizado consegue acessar os demais
      { path: "home", component: HomeComponent },
      
      { path: "products", component: ProductCrudComponent },
      { path: "products/create", component: ProductCreateComponent },
      { path: "products/update/:id", component: ProductUpdateComponent },
      { path: "products/delete/:id", component: ProductDeleteComponent },

      { path: "subcategorias", component: SubcategoriaCrudComponent },
      { path: "subcategorias/create", component: SubcategoriaCreateComponent },
      { path: "subcategorias/update/:id", component: SubcategoriaUpdateComponent },
      { path: "subcategorias/delete/:id", component: SubcategoriaDeleteComponent },

      { path: "prevendas", component: PrevendaCrudComponent },
      { path: "prevendas/create", component:  PreVendaCreateComponent },
      { path: "prevendas/update/:id", component:  PreVendaUpdateComponent },
      { path: "prevendas/delete/:id", component:  PreVendaDeleteComponent },

      { path: "clientes", component: ClienteCrudComponent },
      { path: "clientes/create", component:  ClienteCreate2Component },
      { path: "clientes/update/:id", component:  ClienteUpdateComponent },
      { path: "clientes/delete/:id", component:  ClienteDeleteComponent },
    ]
  },
  { path: "login/cliente/create", component: ClienteCreateComponent },

  { path: "ingresso/imprimir", component: ImprimirComponent },

  { path: "estudo/domjquery", component: DomJqueryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

