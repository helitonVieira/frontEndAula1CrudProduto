import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-venda-read',
  templateUrl: './pre-venda-read.component.html',
  styleUrls: ['./pre-venda-read.component.css']
})
export class PreVendaReadComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
