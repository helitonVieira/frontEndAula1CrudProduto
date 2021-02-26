import { Subcategoria } from './../subcategoria.model';
import { SubcategoriaService } from './../subcategoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategoria-create',
  templateUrl: './subcategoria-create.component.html',
  styleUrls: ['./subcategoria-create.component.css']
})
export class SubcategoriaCreateComponent implements OnInit {

  subcategoria: Subcategoria = {
    descricao: ''
  }

  constructor(private subcategoriaService: SubcategoriaService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createSubcategoria(): void {
    //passar para maiusculo
    this.subcategoria.descricao = this.subcategoria.descricao.toUpperCase()

    this.subcategoriaService.create(this.subcategoria).subscribe(() => {
      this.subcategoriaService.showMessage('Subcategoria criado!')
      this.router.navigate(['/subcategorias'])//voltar para tela principal
    })

  }

  cancel(): void {
    this.router.navigate(['/subcategorias'])
  }
}
