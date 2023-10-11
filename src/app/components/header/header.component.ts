import { Component } from '@angular/core';
import { Nosotros } from 'src/app/interfaces/Nosotros';
import { CarritoService } from 'src/app/services/carrito.service';
import { MenuService } from 'src/app/services/menu.service';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  opciones: string[] = [
    "Inicio",
    "Productos",
    "Acerca de",
    "FAQ",
    "Contacto"
  ]
  
  nosotros: Nosotros | undefined = undefined

  precio: number = 0
  cantidad: number = 0

  constructor(
    private nosotrosService: NosotrosService,
    private carritoService: CarritoService  
  ){
    nosotrosService.getNosotros().subscribe((nosotros: any) => {
      nosotros.find((nosotros: any) => {
        if(nosotros.idnosotros == 1){
          this.nosotros = nosotros
        }
      })
    })

    carritoService.getPrecio().subscribe((precio: any) => this.precio = precio)
    carritoService.getCantidad().subscribe((cantidad: any) => this.cantidad = cantidad)
  }

  abrirCarrito(){
    this.carritoService.toggleCarrito()
  }
}
