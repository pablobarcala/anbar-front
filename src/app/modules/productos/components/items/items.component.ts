import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  buscar: FormGroup
  constructor(
    private productosService: ProductosService,
    private formBuilder: FormBuilder  
  ){
    productosService.getProductos().subscribe((productos: any) => {
      this.productos = productos
      this.filtro()
    });
    this.buscar = this.formBuilder.group({
      nombre: ['']
    })
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

  buscarPorNombre(){
    this.productosService.getProductosPorNombre(this.buscar.get('nombre')?.value).subscribe((productos: any) => {
      this.productos = productos
    })
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes["navOpcion"]) {
      this.filtro();
    }
  }
}
