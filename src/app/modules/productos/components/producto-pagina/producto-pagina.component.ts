import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-pagina',
  templateUrl: './producto-pagina.component.html',
  styleUrls: ['./producto-pagina.component.css']
})
export class ProductoPaginaComponent {
  id: number = 0;
  producto: Producto | undefined = undefined 

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService  
  ){
    route.params.subscribe(params => {
      this.id = params['id']
      this.tomarProducto(this.id)
    })
  }

  tomarProducto(id: number){
    this.productoService.getProductos().subscribe((productos: any) => {
      let productosFiltrar = productos

      this.producto = productosFiltrar.find((p: any) => p.idproductos == id)
    })
  }
}
