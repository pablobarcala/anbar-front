import { Component } from '@angular/core';
import { Nosotros } from 'src/app/interfaces/Nosotros';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nosotros: Nosotros | undefined = undefined

  constructor(private nosotrosService: NosotrosService){
    nosotrosService.getNosotros().subscribe((resp: any) => {
      let nosotrosList = resp

      nosotrosList.find((nosotros: any) => {
        if(nosotros.idnosotros == 1){
          this.nosotros = nosotros
        }
      })
    })
  }
}
