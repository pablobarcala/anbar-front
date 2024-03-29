import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  form: FormGroup

  constructor(
    private carritoService: CarritoService,
    private formBuilder: FormBuilder
  ){
    this.carritoService.getProductos().subscribe((productos: any) => {
      this.productos = productos
    })
    this.carritoService.getPrecio().subscribe((precio: number) => {
      this.precio = precio
    })
    this.form = this.formBuilder.group({
      cantidad: [1]
    })
  }

  stockProducto(productoX: Producto): number[] {
    let i: number
    let cantidadProducto: number[] = []

    this.productos.forEach((producto: any) => {
      if(producto.idproductos == productoX.idproductos)
      if(producto.cantidad) {
        for(i = 1; i <= producto.cantidad; i++){
          cantidadProducto.push(i)
        }
      }
    })

    return cantidadProducto
  }

  cerrarCarrito() {
    this.carritoService.toggleCarrito()
  }

  eliminarDeCarrito(i: number, producto: Producto) {
    this.carritoService.eliminarDeCarrito(i, this.form.get('cantidad')?.value, producto)
    this.form.patchValue({
      cantidad: 0
    })
  }
}
