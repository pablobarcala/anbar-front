import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

interface Producto {
  nombre: string,
  precio: number,
  categorias: string[],
  imagen: string
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() navOpcion: string = ""

  productos: Producto[] = [
    {
      nombre: "Combo zig zag gris",
      precio: 1700,
      categorias: ["Almohadones", "Gris"],
      imagen: "../../../../../assets/iconos/almohadones.png"
    },
    {
      nombre: "Combo b/n",
      precio: 1500,
      categorias: ["Almohadones", "B / N", "Living"],
      imagen: "../../../../../assets/iconos/almohadones.png"
    },
    {
      nombre: "Combo rosa",
      precio: 1700,
      categorias: ["Almohadones", "Rosa"],
      imagen: "../../../../../assets/iconos/almohadones.png"
    }
  ]

  productosFiltrados: Producto[] = []

  constructor(private productosService: ProductosService){
    productosService.getProductos().subscribe((productos: any) => this.productos = productos);
  }
  
  filtro(){
    this.productosFiltrados = []

    this.productos.forEach(producto => {
      producto.categorias.forEach(categoria => {
        if(categoria == this.navOpcion){
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
