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

  mostrarBuscar(){
    const form = document.querySelector("#form")
    if(form?.classList.contains("mostrar")){
      form.classList.remove("mostrar")
    } else {
      form?.classList.add("mostrar")
    }
  }
}
