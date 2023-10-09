import { Component } from '@angular/core';
import { Nosotros } from 'src/app/interfaces/Nosotros';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

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
