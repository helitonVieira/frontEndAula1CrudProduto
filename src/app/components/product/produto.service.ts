import { CrudServiceService } from './../../shared/crud-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudServiceService<Produto>{


  constructor(protected snackBar: MatSnackBar, protected http: HttpClient) {
    super(snackBar, http, `${environment.api_url}/produtos`);
  }
}
