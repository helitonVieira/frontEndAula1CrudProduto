
import { CustomPaginator } from './components/subcategoria/custom-paginator';
import { NgModule, LOCALE_ID } from '@angular/core';// LOCALE_ID passar para formato pt-BR
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';	 

import { MatSidenavModule } from  '@angular/material/sidenav'; /*parte do nav navegação*/
import { MatCardModule } from  '@angular/material/card'; /*parte do home*/
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatButtonModule } from  '@angular/material/button';

import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//import { RedDirective } from './directives/red.directive';

import localePt from '@angular/common/locales/pt'; //passar para formato pt-BR
import { registerLocaleData } from  '@angular/common';//passar para formato pt-BR

import { ProductCrudComponent } from './views/product-crud/product-crud.component'; /*parte do nav navegação*/
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

import { ImprimirComponent } from './components/ingresso/imprimir/imprimir.component';

import { SubcategoriaCrudComponent } from './views/subcategoria-crud/subcategoria-crud.component';
import { SubcategoriaReadComponent } from './components/subcategoria/subcategoria-read/subcategoria-read.component';
import { SubcategoriaUpdateComponent } from './components/subcategoria/subcategoria-update/subcategoria-update.component';
import { SubcategoriaDeleteComponent } from './components/subcategoria/subcategoria-delete/subcategoria-delete.component';
import { SubcategoriaCreateComponent } from './components/subcategoria/subcategoria-create/subcategoria-create.component'; // ng generate @angular/material:table components/product/product-head2
import { MatSelectModule } from '@angular/material/select';
import { DomJqueryComponent } from './components/estudo/dom-jquery/dom-jquery.component';
import { LoginComponent } from './components/login/login.component';
//import { ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs/operators';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';

/*import { ForDirective } from './directives/for.directive';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';*/

registerLocaleData(localePt);//passar para formato pt-BR
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,

    ImprimirComponent,
    SubcategoriaCrudComponent,
    SubcategoriaReadComponent,
    SubcategoriaUpdateComponent,
    SubcategoriaDeleteComponent,
    SubcategoriaCreateComponent,
    DomJqueryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule, // ng generate @angular/material:table <components/product/product-read2
    MatPaginatorModule,// ng generate @angular/material:table <components/product/product-read2
    MatSortModule,// ng generate @angular/material:table <components/product/product-read2
    MatSelectModule,
    ReactiveFormsModule,
    /*ToastrModule.forRoot({ //mostrar msg na tela roda comando gitBash: npm i ngx-toastr --save
      timeOut:4000,
      closeButton:true,
      progressBar:true})*/
  ],
  providers: [AuthInterceptorProvider,{
    provide:LOCALE_ID,//passar para formato pt-BR
    useValue : 'pt-BR'//passar para formato pt-BR       
  }],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
