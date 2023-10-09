import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css']
})
export class EditProductosComponent {
  producto: Producto | undefined = undefined;
  id: number = 0

  constructor(private route: ActivatedRoute, private productoService: ProductosService){
    route.params.subscribe(params => {
      this.id = params['id']
      this.filtrar(this.id)
    })
  }
  
  filtrar(id: number){
    this.productoService.getProductos().subscribe((resp: any) => {
      let productos: Producto[] = resp
  
      this.producto = productos.find(producto => producto.idproductos == id)
    })
  }
}
