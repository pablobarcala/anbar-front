import { Component } from '@angular/core';
import { Nosotros } from 'src/app/interfaces/Nosotros';
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

  constructor(private nosotrosService: NosotrosService){
    nosotrosService.getNosotros().subscribe((nosotros: any) => {
      nosotros.find((nosotros: any) => {
        if(nosotros.idnosotros == 1){
          this.nosotros = nosotros
        }
      })
    })
  }
}
