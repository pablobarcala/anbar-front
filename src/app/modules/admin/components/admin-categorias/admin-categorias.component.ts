import { Component } from '@angular/core';

interface Categoria {
  nombre: string
}

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
