import { Component } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-finalizacion',
  templateUrl: './finalizacion.component.html',
  styleUrls: ['./finalizacion.component.css']
})
export class FinalizacionComponent {
  opcion: string = ''

  constructor(
    private compraService: CompraService
  ){
    compraService.getOpcion().subscribe((resp: any) => this.opcion = resp)
    if(this.opcion == 'pagina'){
      compraService.comprarEnPagina()
    } else {
      compraService.comprarEnVendedor()
    }
  }
}
