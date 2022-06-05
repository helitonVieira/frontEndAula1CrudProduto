
import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

//import { Page } from './page.model';
import { HttpClient, HttpParams} from "@angular/common/http";

import { Produto } from "./produto.model";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Page } from './page.model';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = `${environment.api_url}/produtos`;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right" ,
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl).pipe(
     map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  page(page,linesPerPage,orderBy,direction): Observable<Page> {
    return this.http.get<Page>(this.baseUrl + '/page', {
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

  readById(id: number): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
     map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Produto>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Produto>(url).pipe(
     map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
