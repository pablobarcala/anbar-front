import { Component } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})
export class AdminCategoriasComponent {
  categorias: Categoria[] = []

  constructor(private categoriaService: CategoriasService){
    categoriaService.getCategorias().subscribe((categorias: any) => this.categorias = categorias)
  }
}
