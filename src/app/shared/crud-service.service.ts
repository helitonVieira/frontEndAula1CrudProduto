import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpParams } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { Observable ,EMPTY} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Page } from './page.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CrudServiceService<T> {

  constructor(protected snackBar: MatSnackBar, protected http: HttpClient, private baseUrl){}

  showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, "X", {
        duration: 3000,
        horizontalPosition: "right" ,
        verticalPosition: "top",
        panelClass: isError ? ["msg-error"] : ["msg-success"],
      });
    }
  
    create(record: T): Observable<T> {
      return this.http.post<T>(this.baseUrl, record).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }
  
    read(): Observable<T[]> {
      return this.http.get<T[]>(this.baseUrl).pipe(
       map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }
  
    page(page,linesPerPage,orderBy,direction): Observable<Page<T>> {
      return this.http.get<Page<T>>(this.baseUrl + '/page', {
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
  
    readById(id: number): Observable<T> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<T>(url).pipe(
       map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }
  
    update(record: T): Observable<T> {
      const url = `${this.baseUrl}/${record['id']}`;
      return this.http.put<T>(url, record).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }
  
    delete(id: number): Observable<T> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<T>(url).pipe(
       map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }
  
    errorHandler(e: any): Observable<any> {
      this.showMessage("Ocorreu um erro!", true);
      return EMPTY;
    }
}
