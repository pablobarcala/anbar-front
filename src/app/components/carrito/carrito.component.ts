import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: Producto[] = []
  precio: number = 0

  constructor(
    private carritoService: CarritoService
  ){
    this.carritoService.getProductos().subscribe((productos: any) => {
      this.productos = productos
    })
    this.carritoService.getPrecio().subscribe((precio: number) => {
      this.precio = precio
    })
  }

  cerrarCarrito() {
    this.carritoService.toggleCarrito()
  }

  eliminarDeCarrito(i: number, cantidad: number, producto: Producto) {
    this.carritoService.eliminarDeCarrito(i, cantidad, producto)
  }
}
