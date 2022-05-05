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

  baseUrl = "/login";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  authenticate(credenciais: Credenciais) {
      return this.http.post(this.baseUrl, credenciais,{
        observe: 'response',
        responseType: 'text'
        
    }).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }    

  successLogin(authToken: string){
    localStorage.setItem('token',authToken); // variavel sistema padrao para salvar autorizaçoes
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
