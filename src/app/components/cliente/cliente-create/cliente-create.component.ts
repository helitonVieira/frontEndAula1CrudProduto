import { ClienteNewDTO } from './../cliente.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})

export class ClienteCreateComponent implements OnInit {
  cliente: ClienteNewDTO = {    
    nome: '',
    email: '',
    cpfOuCnpj: '06484714622',  
    tipo: '1',       
    senha: '',      
    cidadeId: 1,    
  }

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createCliente(): void {
    //passar para maiusculo
    this.cliente.nome = this.cliente.nome.toUpperCase()
    
      this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!')
      this.router.navigate(['/login'])//voltar para tela login
    })

  }

  cancel(): void {
    this.router.navigate(['/login'])
  }

}
