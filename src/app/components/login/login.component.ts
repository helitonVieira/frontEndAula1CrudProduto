import { Credenciais } from './../../models/credenciais';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, Validators } from '@angular/forms';

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

  email = new FormControl(null,Validators.email);
  senha = new FormControl(null,Validators.minLength(3));

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Tela Login',
      icon: 'login',
      routeUrl: '/login'
    }
  }

  ngOnInit(): void {
  }

  validaCampor(): boolean {
    if (this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }

}
