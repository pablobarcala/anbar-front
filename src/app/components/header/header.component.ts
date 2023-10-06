import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

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

  navOpcion: string = ''

  constructor(
    private menuService: MenuService
  ){
    menuService.getOpcion().subscribe(opcion => this.navOpcion = opcion)
  }

  cambiarOpcion(opcion: string){
    this.menuService.cambiarOpcion(opcion)
  }
}
