import { Component } from '@angular/core';

interface Almohadon {
  nombre: string,
  precio: number,
  categorias: string[]
}

@Component({
  selector: 'app-almohadones',
  templateUrl: './almohadones.component.html',
  styleUrls: ['./almohadones.component.css']
})
export class AlmohadonesComponent {
  almohadones: Almohadon[] = [
    {
      nombre: "Combo zig zag gris",
      precio: 1700,
      categorias: ["Almohadon", "Gris"]
    },
    {
      nombre: "Combo b/n",
      precio: 1500,
      categorias: ["Almohadon", "B / N", "Living"]
    },
    {
      nombre: "Combo rosa",
      precio: 1700,
      categorias: ["Almohadon", "Rosa"]
    },
    {
      nombre: "Combo zig zag gris",
      precio: 1700,
      categorias: ["Almohadon", "Gris"]
    },
    {
      nombre: "Combo zig zag gris",
      precio: 1700,
      categorias: ["Almohadon", "Gris"]
    }
  ]
}
