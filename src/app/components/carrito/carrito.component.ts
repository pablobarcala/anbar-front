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

  constructor(
    private carritoService: CarritoService
  ){
    this.carritoService.getProductos().subscribe((productos: any) => this.productos = productos)
  }
}
