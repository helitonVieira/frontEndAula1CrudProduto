import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Produto } from './../produto.model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Page} from '../page.model';
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Produto[]

  displayedColumns = ['id', 'nome', 'subcategoria.id', 'subcategoria.descricao', 'preco', 'action']

  dataSource: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  page: Page
  searchKey: String

   // MatPaginator Inputs
   length:number =  5;
   pageSize :number = 5;
   pageSizeOptions: number[] = [5, 10, 15,20];
   totalElements:number;
   pageIndex:number = 0;
 
   // MatPaginator Output
   pageEvent: PageEvent;

    constructor(private productService: ProductService,
      private router: Router) { }  

  ngOnInit(): void {

    this.productService.page(0,5,'nome','ASC')
    .subscribe(
      products => {

     this.page = products
      this.products = products.content
      this.dataSource = new MatTableDataSource<Produto>(products.content)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.totalElements = products.totalElements

    })
  }

  carregaPaginaPaginada():void {
    //this.subcategoriaService.showMessage('pagina '+ this.pageIndex + 'qtdItem  '+ this.pageSize + "oi mundo" + x, false)
       
      this.productService.page(this.pageEvent.pageIndex,this.pageEvent.pageSize,'nome','ASC')
      .subscribe( 
        products => {
      this.products = products.content
      this.dataSource = new MatTableDataSource<Produto>(products.content)
      this.dataSource.sort = this.sort;
      this.totalElements = products.totalElements
      
    })
  }


  navigateCreate(): void {
    this.router.navigate(['/products/create'])
  }

  onSearchClear() {
    this.searchKey = ""
    this.applyFilter()
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toUpperCase()
  }
}
