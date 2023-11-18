import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-pagina',
  templateUrl: './producto-pagina.component.html',
  styleUrls: ['./producto-pagina.component.css']
})
export class ProductoPaginaComponent {
  id: number = 0;
  producto: Producto | undefined = undefined 
  cantidad: FormGroup

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService,
    private formBuilder: FormBuilder,
    private carritoService: CarritoService
  ){
    route.params.subscribe(params => {
      this.id = params['id']
      this.tomarProducto(this.id)
    })
    this.cantidad = formBuilder.group({
      cantidad: [1]
    })
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

  tomarProducto(id: number){
    this.productoService.getProductos().subscribe((productos: any) => {
      let productosFiltrar = productos

      this.producto = productosFiltrar.find((p: any) => p.idproductos == id)
    })
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
