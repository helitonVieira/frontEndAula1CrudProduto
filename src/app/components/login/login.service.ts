import { environment } from './../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Credenciais } from './../../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';


import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class LoginService { //nome padrao AuthService

  baseUrl = `${environment.api_url}/login`;

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  authenticate(credenciais: Credenciais) {
      return this.http.post(this.baseUrl, credenciais,{
        observe: 'response',
        responseType: 'text'
        
    }).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }    

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if(token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  successLogin(authToken: string){
    localStorage.setItem('token',authToken); // variavel sistema padrao para salvar autorizaçoes
  }

  logout(){
    localStorage.clear();
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }


  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
