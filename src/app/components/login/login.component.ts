import { Credenciais } from './../../models/credenciais';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais : Credenciais = {
    email:'',
    senha:''
  }

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Tela Login',
      icon: 'login',
      routeUrl: '/login'
    }
  }

  ngOnInit(): void {
  }

}
