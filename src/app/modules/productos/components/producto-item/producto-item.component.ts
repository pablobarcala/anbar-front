import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent {
  @Input() producto: Producto | undefined = undefined

  constructor(
    private carritoService: CarritoService
  ){}

  agregarCarrito(producto: Producto){
    this.carritoService.agregarCarrito(producto)
  }
}
