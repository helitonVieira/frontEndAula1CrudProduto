import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Prevenda } from './../../models/Prevenda.model';
import { CrudServiceService } from './../../shared/crud-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrevendaService extends CrudServiceService<Prevenda>{


  constructor(protected snackBar: MatSnackBar, protected http: HttpClient) {
    super(snackBar, http, `${environment.api_url}/produtos`);
  }
}
