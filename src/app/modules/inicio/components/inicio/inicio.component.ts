import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  navegacion: string[] = [
    "Almohadones",
    "Muebles",
    "Decoración",
    "Todo"
  ]

  navOpcion: string = "Almohadones"

  cambiarOpcion(opcion: string){
    this.navOpcion = opcion
  }
}
