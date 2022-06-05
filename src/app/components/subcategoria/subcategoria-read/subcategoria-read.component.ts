import { Subcategoria } from './../../../models/subcategoria.model';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { SubcategoriaService } from './../subcategoria.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Page} from '../page.model';
import { PageEvent } from "@angular/material/paginator";



@Component({
  selector: 'app-subcategoria-read',
  templateUrl: './subcategoria-read.component.html',
  styleUrls: ['./subcategoria-read.component.css']
})
export class SubcategoriaReadComponent implements OnInit {

  subcategorias: Subcategoria[]

  displayedColumns = ['id', 'descricao', 'action']
  //dataSource : MatTableDataSource<Subcategoria>;
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


  constructor(private subcategoriaService: SubcategoriaService,
    private router: Router) { }

  ngOnInit(): void {

    this.subcategoriaService.page(0,5,'descricao','ASC')
    .subscribe( 
      subcategorias => {
    
    this.page = subcategorias
    this.subcategorias = subcategorias.content
    this.dataSource = new MatTableDataSource<Subcategoria>(subcategorias.content)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.totalElements = subcategorias.totalElements
    
  })
  }
  
  carregaPaginaPaginada():void {
    //this.subcategoriaService.showMessage('pagina '+ this.pageIndex + 'qtdItem  '+ this.pageSize + "oi mundo" + x, false)
       
      this.subcategoriaService.page(this.pageEvent.pageIndex,this.pageEvent.pageSize,'descricao','ASC')
      .subscribe( 
        subcategorias => {
      this.subcategorias = subcategorias.content
      this.dataSource = new MatTableDataSource<Subcategoria>(subcategorias.content)
      this.dataSource.sort = this.sort;
      this.totalElements = subcategorias.totalElements
      
    })
  }

  navigateCreate(): void {
    this.router.navigate(['/subcategorias/create'])
  }

  onSearchClear() {
    this.searchKey = ""
    this.applyFilter()
    //this.subcategoriaService.showMessage("Ocorreu um erro!", true);
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toUpperCase()
  }
}
