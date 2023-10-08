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
  imagen: string
}

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent {
  productos: Producto[] = []

  constructor(private productosService: ProductosService){
    productosService.getProductos().subscribe((productos: any) => this.productos = productos)
  }
}
