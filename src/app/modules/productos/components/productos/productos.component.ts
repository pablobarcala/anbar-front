import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  navegacion: string[] = [
    "Almohadones",
    "Muebles",
    "Decoración"
  ]

  navOpcion: string = ""

  constructor(private menuService: MenuService){
    menuService.getOpcion().subscribe(opcion => this.navOpcion = opcion)
  }

  cambiarOpcion(opcion: string){
    this.menuService.cambiarOpcion(opcion)
  }
}
