import { Component } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.css']
})
export class AdminCategoriasComponent {
  categorias: Categoria[] = [
    {
      nombre: "Muebles"
    }, 
    {
      nombre: "Almohadones"
    }
  ]
}
