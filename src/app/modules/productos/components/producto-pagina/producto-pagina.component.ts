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

  tomarProducto(id: number){
    this.productoService.getProductos().subscribe((productos: any) => {
      let productosFiltrar = productos

      this.producto = productosFiltrar.find((p: any) => p.idproductos == id)
    })
  }

  agregarCarrito(producto: Producto){
    this.carritoService.agregarCarrito(this.cantidad.value.cantidad, producto)
  }
}
