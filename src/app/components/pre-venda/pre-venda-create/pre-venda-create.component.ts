import { Observable } from 'rxjs';
import { ClienteNewDTO } from './../../cliente/cliente.model';
import { Cliente } from './../../cliente/cliente-create/clientes.model';
import { ClienteService } from './../../cliente/cliente.service';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';
import { PrevendaService } from './../prevenda.service';
import { Prevenda } from './../../../models/Prevenda.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-venda-create',
  templateUrl: './pre-venda-create.component.html',
  styleUrls: ['./pre-venda-create.component.css']
})
export class PreVendaCreateComponent implements OnInit {

  prevenda: Prevenda = {
    dtaPreVenda: null,
    dtaValidade: null,
    status:'ABERTO',
    cliente:{id:null, nome:'', email:''}
  }

  //clientes : Cliente[];
  clientes : Observable<Cliente[]>;
  
  dtaPreVenda = new FormControl(null, Validators.required);
  dtaValidade = new FormControl(null);
  status = new FormControl(null, Validators.minLength(2));
  cliente = new FormControl(null, Validators.minLength(2));
  

  constructor(private prevendaService: PrevendaService,
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {

    this.clientes = this.clienteService.read();
    /*this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
    })*/

  }

  createPrevenda(): void {
    //passar para maiusculo
    this.prevenda.status = this.prevenda.status.toUpperCase()

    this.prevendaService.create(this.prevenda).subscribe(() => {
      this.prevendaService.showMessage('Prevenda criado!')
      this.router.navigate(['/prevendas'])//voltar para tela principal
    })

  }

  cancel(): void {
    this.router.navigate(['/prevendas'])
  }

  validaCampor(): boolean {
    if (this.status.valid || this.dtaPreVenda <= this.dtaValidade ) {
      return true;
    } else {
      return false;
    }
  }

}
