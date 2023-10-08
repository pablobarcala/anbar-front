import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

interface Categoria {
  nombre: string
}

interface Producto {
  nombre: string,
  precio: number,
  cantidad: number,
  categorias: Categoria[],
  imagen: string,
  descripcion: string
}

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent {
  productos: Producto[] = [
    {
      nombre: "Mesa ratona",
      precio: 3000,
      cantidad: 5,
      categorias: [
        {
          nombre: "Muebles"
        }, 
        {
          nombre: "Mesa"
        }
      ],
      imagen: "link",
      descripcion: ""
    }
  ]

  constructor(private productosService: ProductosService){
    // productosService.getProductos().subscribe((productos: any) => this.productos = productos)
  }
}
