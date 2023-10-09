import { Component, Input, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() navOpcion: string = ""

  productos: Producto[] = []

  productosFiltrados: Producto[] = []

  constructor(private productosService: ProductosService){
    productosService.getProductos().subscribe((productos: any) => {
      this.productos = productos
      this.filtro()
    });
  }
  
  filtro(){
    this.productosFiltrados = []

    this.productos.forEach(producto => {
      producto.categorias.forEach(categoria => {
        if(categoria.nombre == this.navOpcion){
          this.productosFiltrados.push(producto)
        }
      })
    })
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes["navOpcion"]) {
      this.filtro();
    }
  }
}
