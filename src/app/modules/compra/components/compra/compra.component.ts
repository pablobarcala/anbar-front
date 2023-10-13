import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  productos: Producto[] | undefined = undefined;

  constructor(
    private carritoService: CarritoService
  ){
    carritoService.getProductos().subscribe((productos: any) => this.productos = productos)
  }
}
