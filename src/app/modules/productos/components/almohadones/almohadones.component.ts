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
      categorias: ["Almohadones", "Gris"]
    },
    {
      nombre: "Combo b/n",
      precio: 1500,
      categorias: ["Almohadones", "B / N", "Living"]
    },
    {
      nombre: "Combo rosa",
      precio: 1700,
      categorias: ["Almohadones", "Rosa"]
    },
    {
      nombre: "Combo zig zag gris",
      precio: 1700,
      categorias: ["Almohadones", "Gris"]
    },
    {
      nombre: "Combo zig zag gris",
      precio: 1700,
      categorias: ["Almohadones", "Gris"]
    }
  ]
}
