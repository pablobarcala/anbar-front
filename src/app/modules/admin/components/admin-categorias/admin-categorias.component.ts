import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from 'src/app/components/confirmacion/confirmacion.component';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})
export class AdminCategoriasComponent {
  categorias: Categoria[] = []

  constructor(
    private categoriaService: CategoriasService,
    private router: Router,
    private dialog: MatDialog
  ){
    categoriaService.getCategorias().subscribe((categorias: any) => this.categorias = categorias)
  }

  deleteCategoria(id: any){
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      data: {elemento: "Categoría"}
    })

    dialogRef.afterClosed().subscribe((response: any) => {
      if(response){
        this.categoriaService.deleteCategoria(id).subscribe(resp => {
          if(resp){
            alert("La categoría se eliminó correctamente")
            this.router.navigate(['/admin/dashboard/admin-categorias'])
            .then(() => window.location.reload())
          } else {
            alert("Hubo un error")
          }
        })
      }
    })
  }
}
