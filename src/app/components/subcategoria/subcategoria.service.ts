import { Subcategoria } from './subCategoria.model';

import { Page } from './page.model';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class SubcategoriaService {
  baseUrl = "/api/subcategorias";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(subcategoria: Subcategoria): Observable<Subcategoria> {
    return this.http.post<Subcategoria>(this.baseUrl, subcategoria).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Subcategoria[]> {
    return this.http.get<Subcategoria[]>(this.baseUrl).pipe(
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

  readById(id: number): Observable<Subcategoria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Subcategoria>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(subcategoria: Subcategoria): Observable<Subcategoria> {
    const url = `${this.baseUrl}/${subcategoria.id}`;
    return this.http.put<Subcategoria>(url, subcategoria).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Subcategoria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Subcategoria>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
