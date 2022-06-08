import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prevenda-crud',
  templateUrl: './prevenda-crud.component.html',
  styleUrls: ['./prevenda-crud.component.css']
})
export class PrevendaCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Pré Vendas',
      icon: 'shopping_cart_checkout',
      routeUrl: '/prevenda'
    }
  }

  ngOnInit(): void {
  }
  
}
