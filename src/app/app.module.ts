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
import { ProductCrudComponent } from './views/product-crud/product-crud.component'; /*parte do nav navegação*/
import { MatButtonModule } from  '@angular/material/button';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
//import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
//import { RedDirective } from './directives/red.directive';

import localePt from '@angular/common/locales/pt'; //passar para formato pt-BR
import { registerLocaleData } from  '@angular/common';//passar para formato pt-BR
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ImprimirComponent } from './components/ingresso/imprimir/imprimir.component'; // ng generate @angular/material:table components/product/product-head2

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
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ImprimirComponent
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
  
  ],
  providers: [{
    provide:LOCALE_ID,//passar para formato pt-BR
    useValue : 'pt-BR'//passar para formato pt-BR
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
