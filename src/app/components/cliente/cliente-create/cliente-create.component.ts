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
    tipo: 1,       
    senha: '',      
    logradouro: 'bento goncalves', 
    numero: '851',     
    complemento: '',
    bairro: '',     
    cep: '38400000',       
    telefone1: '34996451318',  
    telefone2: '34999999999',  
    telefone3: '34888888888',  
    cidadeId: 1, 
    
  }

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createCliente(): void {
    //passar para maiusculo
    this.cliente.nome = this.cliente.nome.toUpperCase()
    this.cliente.logradouro = this.cliente.logradouro.toUpperCase();       
    this.cliente.complemento = this.cliente.logradouro.toUpperCase();
    this.cliente.bairro = this.cliente.logradouro.toUpperCase();

    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!')
      this.router.navigate(['/login'])//voltar para tela login
    })

  }

  cancel(): void {
    this.router.navigate(['/login'])
  }

}
