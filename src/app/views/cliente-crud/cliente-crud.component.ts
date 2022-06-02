import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

  constructor(private router: Router,private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Usuario',
      icon: 'client',
      routeUrl: '/cliente'
    }
  }

  ngOnInit(): void {
  }

  navigateToClienteCreate(): void {
    this.router.navigate(['/cliente/create'])
  }

}


  

