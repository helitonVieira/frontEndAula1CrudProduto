import { CrudServiceService } from './../../shared/crud-service.service';
import { environment } from './../../../environments/environment';
import { Subcategoria } from './../../models/subcategoria.model';

import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SubcategoriaService extends CrudServiceService<Subcategoria>{

  constructor(protected snackBar: MatSnackBar, protected http: HttpClient) {
    super(snackBar, http, `${environment.api_url}/subcategorias`);
  }

}
