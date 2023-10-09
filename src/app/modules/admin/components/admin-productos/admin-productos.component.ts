import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductosService } from 'src/app/services/productos.service';

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
    productosService.getProductos().subscribe((productos: any) => this.productos = productos)
  }
}
