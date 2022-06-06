import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-subcategoria-crud',
  templateUrl: './subcategoria-crud.component.html',
  styleUrls: ['./subcategoria-crud.component.css']
})
export class SubcategoriaCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Subcategorias',
      icon: 'storefront',
      routeUrl: '/subcategoria'
    }
  }

  ngOnInit(): void {
  }

  navigateToSubcategoriaCreate(): void {
    this.router.navigate(['/subcategorias/create'])
  }

}
