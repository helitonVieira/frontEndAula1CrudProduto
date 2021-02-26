import { ImprimirService } from './../imprimir.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.css']
})
export class ImprimirComponent implements OnInit {

  constructor(private imprimirService: ImprimirService) { }

  ngOnInit(): void {
  }

 printContent(el):void {
   
    var restorepage = document.body.innerHTML
    var printcontent = document.getElementById(el).innerHTML
    document.body.innerHTML = printcontent

    window.print()
    window.close()
    document.body.innerHTML = restorepage
    this.imprimirService.imprimir('vai dar tudo certo')
  }
  

}
