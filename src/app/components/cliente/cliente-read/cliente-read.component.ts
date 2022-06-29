import { BaseFormComponent } from './../../../shared/base-form/base-form.component';
import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteNewDTO } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent extends BaseFormComponent<ClienteNewDTO> implements OnInit {

  clientes: ClienteNewDTO[]

  displayedColumns = ['id', 'nome', 'email', 'cpfOuCnpj', 'tipo', 'action']
  //dataSource : MatTableDataSource<Clientes>;
  dataSource: MatTableDataSource<any>

  constructor(private clienteService: ClienteService,
    private router: Router) {
    super();
  }

  ngOnInit(): void {

    this.clienteService.page(0, 5, 'nome', 'ASC')
      .subscribe(
        clientes => {

          this.page = clientes
          this.record = clientes.content
          this.dataSource = new MatTableDataSource<ClienteNewDTO>(clientes.content)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.totalElements = clientes.totalElements
        })
  }

  carregaPaginaPaginada(): void {
    //this.subcategoriaService.showMessage('pagina '+ this.pageIndex + 'qtdItem  '+ this.pageSize + "oi mundo" + x, false)

    this.clienteService.page(this.pageEvent.pageIndex, this.pageEvent.pageSize, 'nome', 'ASC')
      .subscribe(
        clientes => {
          this.record = clientes.content
          this.dataSource = new MatTableDataSource<ClienteNewDTO>(clientes.content)
          this.dataSource.sort = this.sort;
          this.totalElements = clientes.totalElements
        })
  }

  navigateCreate(): void {
    this.router.navigate(['/clientes/create'])
  }

}
