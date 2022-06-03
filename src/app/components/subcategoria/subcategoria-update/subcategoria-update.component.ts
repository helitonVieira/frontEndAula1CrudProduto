import { Subcategoria } from './../../../models/subcategoria.model';
 
import { Router, ActivatedRoute } from "@angular/router";
import { SubcategoriaService } from "./../subcategoria.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-subcategoria-update",
  templateUrl: "./subcategoria-update.component.html",
  styleUrls: ["./subcategoria-update.component.css"],
})
export class SubcategoriaUpdateComponent implements OnInit {
  subcategoria: Subcategoria;

  constructor(
    private subcategoriaService: SubcategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.subcategoriaService.readById(id).subscribe((subcategoria) => {
      this.subcategoria = subcategoria;
    });
  }

  updateSubcategoria(): void {
    
    this.subcategoria.descricao = this.subcategoria.descricao.toUpperCase()
    
    this.subcategoriaService.update(this.subcategoria).subscribe(() => {
      this.subcategoriaService.showMessage("Subcategoria atualizado com sucesso!");
      this.router.navigate(["/subcategorias"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/subcategorias"]);
  }
}
