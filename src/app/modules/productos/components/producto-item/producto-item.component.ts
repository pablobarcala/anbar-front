import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent {
  @Input() producto: Producto | undefined = undefined
  cantidadSeleccionada: number = 1
  cantidad: FormGroup

  constructor(
    private carritoService: CarritoService,
    private formBuilder: FormBuilder
  ){
    this.cantidad = this.formBuilder.group({
      cantidad: [this.cantidadSeleccionada]
    })
  }

  agregarCarrito(producto: Producto){
    if(this.cantidad.value.cantidad <= producto.cantidad){
      this.carritoService.agregarCarrito(this.cantidad.value.cantidad, producto)
    } else {
      alert("No se pueden agregar mas de " + producto.cantidad + " unidades del producto")
    }
  }
}
