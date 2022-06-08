import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Component, ViewChild } from '@angular/core';
import { Page } from '../page.model';

@Component({
  selector: 'app-base-form',
  templateUrl: 'base-form.component.html'
})
export class BaseFormComponent<T>  {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  
  record: T[]
  dataSource: MatTableDataSource<any>

  page: Page<T>
  searchKey: String

  // MatPaginator Inputs
  length:number =  5;
  pageSize :number = 5;
  pageSizeOptions: number[] = [5, 10, 15,20];
  totalElements:number;
  pageIndex:number = 0;

  // MatPaginator Output
  pageEvent: PageEvent;
  constructor() {}    

  onSearchClear() {
    this.searchKey = ""
    this.applyFilter()
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toUpperCase()
  }

}
