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
  productoExiste: boolean = true
  buscando: boolean = false
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
  
  buscarPorNombre(){
    this.productosService.getProductosPorNombre(this.buscar.get('nombre')?.value).subscribe((productos: any) => {
      const productosBuscados = productos
      if(productosBuscados > []){
        this.productoExiste = true
      } else {
        this.productoExiste = false
      }
      this.productosFiltrados = productosBuscados

      this.buscando = true
    })
  }

  filtro(){
    this.productosFiltrados = []

    this.productos.forEach(producto => {
      if(producto.categoria.nombre == this.navOpcion){
        this.productosFiltrados.push(producto)
      }
    })
  }


  ngOnChanges(changes: SimpleChanges){
    if (changes["navOpcion"]) {
      this.filtro();
      this.buscando = false
    }
  }
}
