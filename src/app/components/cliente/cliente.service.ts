import { Cliente } from './cliente-create/clientes.model';
import { environment } from './../../../environments/environment';

import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ClienteNewDTO } from './cliente.model';
import { PageCliente } from './page.model';

import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  baseUrl = `${environment.api_url}/clientes`;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(cliente: ClienteNewDTO): Observable<ClienteNewDTO> {
    return this.http.post<ClienteNewDTO>(this.baseUrl, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
 

   page(page,linesPerPage,orderBy,direction): Observable<PageCliente> {
    return this.http.get<PageCliente>(this.baseUrl + '/page', {
      params: new HttpParams()
        .set('page', page)
        .set('linesPerPage', linesPerPage)
        .set('orderBy', orderBy.toString())        
        .set('direction', direction.toString())
    }).pipe(
      map(res => {
        return res})
    );
  }

  readById(id: number): Observable<ClienteNewDTO> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ClienteNewDTO>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(cliente: ClienteNewDTO): Observable<ClienteNewDTO> {
    const url = `${this.baseUrl}/${cliente.id}`;
    return this.http.put<ClienteNewDTO>(url, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<ClienteNewDTO> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ClienteNewDTO>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
