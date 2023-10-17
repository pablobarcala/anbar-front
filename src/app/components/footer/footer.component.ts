import { Component } from '@angular/core';
import { Nosotros } from 'src/app/interfaces/Nosotros';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  nosotros: Nosotros | undefined = undefined;

  constructor(
    private nosotroService: NosotrosService
  ) {
    nosotroService.getNosotros().subscribe((resp: any) => {
      let nosotrosLista: Nosotros[] = resp

      nosotrosLista.find((n: any) => {
        if(n.idnosotros == 1) {
          this.nosotros = n
        }
      })
    })
  }
}
