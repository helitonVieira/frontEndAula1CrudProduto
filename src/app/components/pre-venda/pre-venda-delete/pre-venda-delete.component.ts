import { ActivatedRoute, Router } from '@angular/router';
import { PrevendaService } from './../prevenda.service';
import { Prevenda } from './../../../models/Prevenda.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-venda-delete',
  templateUrl: './pre-venda-delete.component.html',
  styleUrls: ['./pre-venda-delete.component.css']
})
export class PreVendaDeleteComponent implements OnInit {

  prevenda: Prevenda;

  constructor(
    private prevendaService: PrevendaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.prevendaService.readById(id).subscribe((prevenda) => {
      this.prevenda = prevenda;
    });
  }

  deleteSubcategoria(): void {
    this.prevendaService.delete(this.prevenda.id).subscribe(() => {
      this.prevendaService.showMessage("Prevenda excluido com sucesso!");
      this.router.navigate(["/prevendas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/prevendas"]);
  }

}
