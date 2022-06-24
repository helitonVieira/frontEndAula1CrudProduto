import { PrevendaService } from './../prevenda.service';
import { Prevenda } from './../../../models/Prevenda.model';
import { Cliente } from './../../cliente/cliente-create/clientes.model';
import { Validators, FormControl } from '@angular/forms';
import { ClienteService } from './../../cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-venda-update',
  templateUrl: './pre-venda-update.component.html',
  styleUrls: ['./pre-venda-update.component.css']
})
export class PreVendaUpdateComponent implements OnInit {

  prevenda: Prevenda;
  clientes: Cliente[];

  preTeste: Prevenda = {
    id: 10,
    dtaPreVenda: null,
    dtaValidade: null,
    status: '',
    cliente: { id: 2, nome: 'Juliana', email: 'heli.ton@hotmail.com' }
  }

  dtaPreVenda = new FormControl(null);
  dtaValidade = new FormControl(null);
  status = new FormControl(null, Validators.minLength(2));
  cliente = new FormControl(null, Validators.minLength(2));

  constructor(
    private prevendaService: PrevendaService,
    private clienteService: ClienteService,

    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //carregar as cliente
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
    });

    const id = +this.route.snapshot.paramMap.get("id");
    this.prevendaService.readById(id).subscribe((prevenda) => {
      this.prevenda = prevenda;
    });
  }

  updatePrevenda(): void {
    this.preTeste.status = this.preTeste.status.toUpperCase()//salvar tudo em maiusculo

    this.preTeste.id = this.prevenda.id
    this.preTeste.dtaPreVenda = this.prevenda.dtaPreVenda
    this.preTeste.dtaValidade = this.prevenda.dtaValidade
    this.preTeste.status = this.prevenda.status

    this.prevendaService.update(this.preTeste).subscribe(() => {
      this.prevendaService.showMessage("Prevenda atualizado com sucesso!");
      this.router.navigate(["/prevendas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/prevendas"]);
  }

  validaCampos(): boolean {
    if (this.dtaPreVenda.valid && this.dtaValidade.valid && this.status.valid && this.cliente.valid) {
      return true;
    } else {
      return false;
    }
  }

  retornaStatus(status: any): string {
    if (status == 'ABERTO') {
      return 'ABERTO'
    } else if (status == 'EM ANDAMENTO') {
      return 'EM ANDAMENTO'
    } else {
      return 'ENCERRADO'
    }
  }

}
