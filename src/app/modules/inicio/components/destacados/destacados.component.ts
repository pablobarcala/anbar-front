import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent {
  productos: Producto[] | undefined = undefined

  constructor(
    private productosService: ProductosService
  ){
    productosService.getProductos().subscribe((productos: any) => {
      const productosFiltrados = productos
      
      productosFiltrados.forEach((producto: any) => {
        if(producto.oferta > 0){
          this.productos = []
          this.productos?.push(producto)
        }
      })
    })
  }
}
