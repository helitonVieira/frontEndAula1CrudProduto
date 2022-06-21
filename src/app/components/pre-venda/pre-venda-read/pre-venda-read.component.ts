import { PrevendaService } from './../prevenda.service';
import { Prevenda } from './../../../models/Prevenda.model';
import { MatTableDataSource } from '@angular/material/table';
import { BaseFormComponent } from './../../../shared/base-form/base-form.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-venda-read',
  templateUrl: './pre-venda-read.component.html',
  styleUrls: ['./pre-venda-read.component.css']
})

export class PreVendaReadComponent extends BaseFormComponent<Prevenda> implements OnInit {
 
  prevendas: Prevenda[]

  displayedColumns = ['id', 'dtaPreVenda', 'dtaValidade','status', 'cliente.id', 'cliente.nome', 'action']

    constructor(private prevendaService: PrevendaService,
      private router: Router) { 
        super();
      }  

  ngOnInit(): void {

    this.prevendaService.page(0,5,'id','DESC')
    .subscribe(
      prevendas => {

     this.page = prevendas
      this.record = prevendas.content
      this.dataSource = new MatTableDataSource<Prevenda>(prevendas.content)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.totalElements = prevendas.totalElements

    })
  }

  carregaPaginaPaginada():void {
    //this.subcategoriaService.showMessage('pagina '+ this.pageIndex + 'qtdItem  '+ this.pageSize + "oi mundo" + x, false)
       
      this.prevendaService.page(this.pageEvent.pageIndex,this.pageEvent.pageSize,'id','DESC')
      .subscribe( 
        prevendas => {
      this.record = prevendas.content
      this.dataSource = new MatTableDataSource<Prevenda>(prevendas.content)
      this.dataSource.sort = this.sort;
      this.totalElements = prevendas.totalElements
      
    })
  } 

  navigateCreate(): void {
    this.router.navigate(['/prevendas/create'])
  }
}
