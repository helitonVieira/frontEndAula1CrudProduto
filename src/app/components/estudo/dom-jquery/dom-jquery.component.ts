import { MsgAlertaService } from './../../msg-alerta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-jquery',
  templateUrl: './dom-jquery.component.html',
  styleUrls: ['./dom-jquery.component.css']
})
export class DomJqueryComponent implements OnInit {

  constructor(private mesgAlerta: MsgAlertaService) { }

  digitado : String 
  txtbox : string
  ngOnInit(): void {
    //let nome1;  caso queira criar variavel dentro metodo tem que usar o let fora nao precisa
  }

/*  => chamado Aerio function => msm que retorn
  const nome = (filename) => new Promise((resolve,reject) => {})

  é o mesmo que 

   const nome = function(promise){
    return new Promise((resolve,reject))} */

  msgAlerta():void {
    this.mesgAlerta.showMessage("mensagem de teste!");
  }

  change():void{
    this.mesgAlerta.showMessage("exc depois que termina digitar: " + this.digitado );
   // this.digitado = this.digitado + document.getElementById("digit")
  }

  receberValorHtml(txtbox : string): void {
    this.txtbox = txtbox
    this.mesgAlerta.showMessage('recebendo valor html '+ this.txtbox);
  }

  

}
