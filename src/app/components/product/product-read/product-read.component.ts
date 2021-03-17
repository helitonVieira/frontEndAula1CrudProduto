import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Produto } from './../product.model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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

  searchKey: String

    constructor(private productService: ProductService,
      private router: Router) { }  

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products

      this.dataSource = new MatTableDataSource<Produto>(products)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
