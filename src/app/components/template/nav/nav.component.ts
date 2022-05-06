import { LoginService } from './../../login/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {   
  }

  logout(){
    this.router.navigate(['login'])
    this.loginService.logout();
   // this.toast.info('Logout realizado com sucesso', 'Logout')
  }

}
