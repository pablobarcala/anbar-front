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
  cantidad: FormGroup

  constructor(
    private carritoService: CarritoService,
    private formBuilder: FormBuilder
  ){
    this.cantidad = this.formBuilder.group({
      cantidad: [1]
    })

    console.log(this.cantidad.get('cantidad')?.value)
  }

  stockProducto(): number[] {
    let i: number
    let cantidadProducto: number[] = []

    if(this.producto?.cantidad){
      for(i = 1; i <= this.producto?.cantidad; i++){
        cantidadProducto.push(i)
      }
    }

    return cantidadProducto
  }

  agregarCarrito(producto: Producto){
    let cantidadCargar = parseInt(this.cantidad.get('cantidad')?.value)
    if(cantidadCargar <= producto.cantidad){
      this.carritoService.agregarCarrito(cantidadCargar, producto)
    } else {
      alert("No se pueden agregar mas de " + producto.cantidad + " unidades del producto")
    }
  }
}
