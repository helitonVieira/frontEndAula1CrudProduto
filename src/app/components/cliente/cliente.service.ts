import { ClienteNewDTO } from './cliente.model';
import { CrudServiceService } from './../../shared/crud-service.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
  providedIn: 'root'
})

export class ClienteService extends CrudServiceService<ClienteNewDTO>{

  constructor(protected snackBar: MatSnackBar, protected http: HttpClient) {
    super(snackBar, http, `${environment.api_url}/clientes`);
  }
  
}
