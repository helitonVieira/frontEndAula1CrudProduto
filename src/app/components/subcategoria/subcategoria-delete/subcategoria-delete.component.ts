import { Subcategoria } from './../../../models/subCategoria.model';
import { Router, ActivatedRoute } from "@angular/router";
import { SubcategoriaService } from "./../subcategoria.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-subcategoria-delete",
  templateUrl: "./subcategoria-delete.component.html",
  styleUrls: ["./subcategoria-delete.component.css"],
})
export class SubcategoriaDeleteComponent implements OnInit {
  subcategoria: Subcategoria;

  constructor(
    private subcategoriaService: SubcategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subcategoriaService.readById(id).subscribe((subcategoria) => {
      this.subcategoria = subcategoria;
    });
  }

  deleteSubcategoria(): void {
    this.subcategoriaService.delete(this.subcategoria.id).subscribe(() => {
      this.subcategoriaService.showMessage("Subcategoria excluido com sucesso!");
      this.router.navigate(["/subcategorias"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/subcategorias"]);
  }
}
